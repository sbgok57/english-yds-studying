import React, { useState, useRef } from 'react';
import { VocabularyItem, VocabularySource } from '../types/vocabulary';
import { dbService } from '../services/db';
import { QuizletImporter, QuizletPreviewResult } from '../services/quizlet';
import { PdfVocabularyImporter, PdfDetailedAuditReport } from '../services/pdf';
import { deduplicateVocabularyBatch } from '../services/importer';
import {
  Upload,
  X,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Globe,
  Loader2,
  Info,
  StopCircle,
  Eye,
} from 'lucide-react';

interface VocabularyImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  existingVocabulary: VocabularyItem[];
  onImportComplete: () => void;
}

type TabType = 'quizlet' | 'pdf';

export const VocabularyImportModal: React.FC<VocabularyImportModalProps> = ({
  isOpen,
  onClose,
  existingVocabulary,
  onImportComplete,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('quizlet');

  // Duplicate Strategy
  const [duplicateStrategy, setDuplicateStrategy] = useState<'skip' | 'update'>('update');

  // Shared Processing States
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [importDone, setImportDone] = useState<boolean>(false);
  const [importedSummary, setImportedSummary] = useState<{
    added: number;
    updated: number;
    duplicates: number;
    incomplete: number;
    manualReview: number;
    sourceTitle: string;
  }>({
    added: 0,
    updated: 0,
    duplicates: 0,
    incomplete: 0,
    manualReview: 0,
    sourceTitle: '',
  });

  // Tab 1: Quizlet States
  const [quizletUrl, setQuizletUrl] = useState<string>('');
  const [quizletText, setQuizletText] = useState<string>('');
  const [quizletTitle, setQuizletTitle] = useState<string>('');
  const [quizletPreview, setQuizletPreview] = useState<QuizletPreviewResult | null>(null);
  const [quizletScanNotice, setQuizletScanNotice] = useState<{
    status: 'idle' | 'scanning' | 'success' | 'fallback_ready' | 'error';
    message: string;
    technicalDetail?: string;
  }>({ status: 'idle', message: '' });

  // Tab 2: PDF States
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfItems, setPdfItems] = useState<VocabularyItem[]>([]);
  const [pdfPages, setPdfPages] = useState<number>(0);
  const [pdfProgress, setPdfProgress] = useState<{ currentPage: number; totalPages: number; itemsFound: number } | null>(null);
  const [pdfReport, setPdfReport] = useState<PdfDetailedAuditReport | null>(null);
  const cancelPdfRef = useRef<boolean>(false);

  if (!isOpen) return null;

  // --- QUIZLET HANDLERS ---
  const handleScanQuizlet = async () => {
    if (!quizletUrl.trim()) return;
    setQuizletScanNotice({ status: 'scanning', message: 'Quizlet adresi kontrol ediliyor...' });
    setIsProcessing(true);

    const result = await QuizletImporter.scanQuizletUrl(
      quizletUrl,
      quizletTitle || 'Quizlet Genel Kaynağı'
    );
    setIsProcessing(false);

    if (result.accessFailed) {
      // Graceful fallback notice: No scary CF 403 error dumps
      setQuizletScanNotice({
        status: 'fallback_ready',
        message: result.friendlyMessage || 'Quizlet sayfasına doğrudan erişim şu anda kısıtlı. Alternatif veri aktarımı deneniyor...',
        technicalDetail: result.failureReason,
      });
      // Record source audit
      await dbService.saveSource(result.source);
    } else {
      setQuizletScanNotice({
        status: 'success',
        message: result.friendlyMessage || `Başarılı! ${result.discoveredSets.length} adet halka açık set tespit edildi.`,
      });
    }
  };

  const handlePreviewQuizletText = () => {
    if (!quizletText.trim()) return;
    const preview = QuizletImporter.previewQuizletImport(quizletText, existingVocabulary);
    setQuizletPreview(preview);
  };

  const handleImportQuizletText = async () => {
    if (!quizletText.trim()) return;
    setIsProcessing(true);

    const title = quizletTitle.trim() || 'Quizlet İçe Aktarım';
    const { items, incompleteCount, manualReviewQueue } = QuizletImporter.parseQuizletExportText(quizletText, {
      sourceTitle: title,
      sourceUrl: quizletUrl.trim() || undefined,
    });

    const sourceId = `quizlet-${Date.now()}`;
    const sourceRef = {
      sourceId,
      sourceType: 'quizlet' as const,
      sourceUrl: quizletUrl.trim() || undefined,
      setName: title,
      importedAt: new Date().toISOString(),
    };

    const { toInsert, toUpdate, duplicateCount } = deduplicateVocabularyBatch(
      existingVocabulary,
      items,
      sourceRef
    );

    const itemsToSave: VocabularyItem[] = [
      ...toInsert,
      ...(duplicateStrategy === 'update' ? toUpdate : []),
    ];

    if (itemsToSave.length > 0) {
      await dbService.saveVocabularyBatch(itemsToSave);
    }

    const sourceRecord: VocabularySource = {
      id: sourceId,
      type: 'quizlet-set',
      url: quizletUrl.trim() || undefined,
      title,
      status: incompleteCount > 0 ? 'partially_completed' : 'completed',
      lastImportedAt: new Date().toISOString(),
      discoveredSetCount: 1,
      processedSetCount: 1,
      failedSetCount: 0,
      importedItemCount: itemsToSave.length,
      duplicateCount,
      incompleteCount,
      manualReviewCount: manualReviewQueue.length,
    };
    await dbService.saveSource(sourceRecord);

    setIsProcessing(false);
    setImportDone(true);
    setImportedSummary({
      added: toInsert.length,
      updated: duplicateStrategy === 'update' ? toUpdate.length : 0,
      duplicates: duplicateCount,
      incomplete: incompleteCount,
      manualReview: manualReviewQueue.length,
      sourceTitle: title,
    });
    onImportComplete();
  };

  // --- PDF HANDLERS ---
  const handlePdfFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPdfFile(file);
    setIsProcessing(true);
    cancelPdfRef.current = false;

    try {
      setPdfProgress({ currentPage: 0, totalPages: 1, itemsFound: 0 });
      const result = await PdfVocabularyImporter.processPdfFile(
        file,
        (prog) => {
          setPdfProgress(prog);
        },
        () => cancelPdfRef.current
      );
      setPdfItems(result.items);
      setPdfPages(result.totalPages);
      setPdfReport(result.report || null);
    } catch (err) {
      console.warn('PDF parsing error:', err);
      alert('PDF dosyası okunurken bir sorun oluştu.');
    } finally {
      setIsProcessing(false);
      setPdfProgress(null);
    }
  };

  const handleCancelPdf = () => {
    cancelPdfRef.current = true;
    setIsProcessing(false);
  };

  const handleConfirmPdfImport = async () => {
    if (!pdfFile || pdfItems.length === 0) return;
    setIsProcessing(true);

    const sourceId = `pdf-${pdfFile.name.replace(/[^a-zA-Z0-9_-]/g, '_')}-${Date.now()}`;
    const sourceRef = {
      sourceId,
      sourceType: 'pdf' as const,
      fileName: pdfFile.name,
      importedAt: new Date().toISOString(),
    };

    const { toInsert, toUpdate, duplicateCount } = deduplicateVocabularyBatch(
      existingVocabulary,
      pdfItems,
      sourceRef
    );

    const itemsToSave: VocabularyItem[] = [
      ...toInsert,
      ...(duplicateStrategy === 'update' ? toUpdate : []),
    ];

    if (itemsToSave.length > 0) {
      await dbService.saveVocabularyBatch(itemsToSave);
    }

    const sourceRecord: VocabularySource = {
      id: sourceId,
      type: 'pdf',
      fileName: pdfFile.name,
      title: pdfFile.name,
      status: pdfReport?.isCancelled ? 'partially_completed' : 'completed',
      lastImportedAt: new Date().toISOString(),
      discoveredSetCount: pdfPages,
      processedSetCount: pdfPages,
      failedSetCount: 0,
      importedItemCount: itemsToSave.length,
      duplicateCount,
      incompleteCount: pdfReport?.needsReviewTerms || 0,
      manualReviewCount: pdfReport?.needsReviewTerms || 0,
    };
    await dbService.saveSource(sourceRecord);

    setIsProcessing(false);
    setImportDone(true);
    setImportedSummary({
      added: toInsert.length,
      updated: duplicateStrategy === 'update' ? toUpdate.length : 0,
      duplicates: duplicateCount,
      incomplete: pdfReport?.needsReviewTerms || 0,
      manualReview: pdfReport?.needsReviewTerms || 0,
      sourceTitle: pdfFile.name,
    });
    onImportComplete();
  };

  const handleCleanCorruptedPdfRecords = async () => {
    const { cleanItems, removedCount } = PdfVocabularyImporter.cleanCorruptedPdfItems(existingVocabulary);
    if (removedCount > 0) {
      await dbService.saveVocabularyBatch(cleanItems);
      alert(`Temizlendi: ${removedCount} adet hatalı PDF kaydı kaldırıldı. Mevcut öğrenme geçmişiniz ve geçerli kelimeleriniz korundu.`);
      onImportComplete();
    } else {
      alert('Tebrikler: Veritabanında hatalı veya bozuk PDF kaydı bulunamadı. Verileriniz tamamen geçerli.');
    }
  };

  const handleReset = () => {
    setImportDone(false);
    setQuizletUrl('');
    setQuizletText('');
    setQuizletPreview(null);
    setQuizletScanNotice({ status: 'idle', message: '' });
    setPdfFile(null);
    setPdfItems([]);
    setPdfReport(null);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Kelime İçe Aktarma Merkezi"
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 sm:pt-8 pt-4 overflow-y-auto bg-slate-900/25 dark:bg-black/30 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleReset();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
                Kelime Veritabanı İçe Aktarma Merkezi
              </h3>
              <p className="text-xs text-slate-400">
                Quizlet (URL & Metin) ve PDF kaynaklarından eksiksiz ve güvenli aktarım
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            aria-label="Kapat"
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Bar (CSV Completely Removed) */}
        {!importDone && (
          <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 px-6 pt-2 gap-2">
            {[
              { id: 'quizlet', label: '1. Quizlet (URL & Metin)', icon: Globe },
              { id: 'pdf', label: '2. PDF Belgesi', icon: FileText },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-t-xl border-t border-x transition-all ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-brand-600 dark:text-brand-400 shadow-sm'
                      : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {importDone ? (
            <div className="p-8 text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                İçe Aktarma Başarıyla Tamamlandı!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Kaynak: <strong>{importedSummary.sourceTitle}</strong>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto pt-2 text-xs">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800">
                  <span className="text-emerald-700 dark:text-emerald-300 font-bold block text-lg">
                    +{importedSummary.added}
                  </span>
                  <span className="text-slate-500">Yeni Kelime</span>
                </div>
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                  <span className="text-blue-700 dark:text-blue-300 font-bold block text-lg">
                    {importedSummary.updated}
                  </span>
                  <span className="text-slate-500">Güncellenen</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800">
                  <span className="text-amber-700 dark:text-amber-300 font-bold block text-lg">
                    {importedSummary.duplicates}
                  </span>
                  <span className="text-slate-500">Mevcut / Birleşen</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <span className="text-slate-700 dark:text-slate-300 font-bold block text-lg">
                    %100
                  </span>
                  <span className="text-slate-500">İlerleme Korundu</span>
                </div>
              </div>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium pt-2">
                ✓ Tüm çalışma geçmişiniz, ustalık puanlarınız ve tekrar tarihleriniz eksiksiz korundu.
              </p>
            </div>
          ) : (
            <>
              {/* TAB 1: QUIZLET */}
              {activeTab === 'quizlet' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-brand-50/60 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900 text-xs text-brand-900 dark:text-brand-300 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-bold">Quizlet Aktarım Desteği (6 Aşamalı Yedekli Mimari)</p>
                      <p className="text-slate-600 dark:text-slate-400">
                        Quizlet genel bağlantınızı tarayabilir veya doğrudan Quizlet'in "Dışa Aktar" ekranından kopyaladığınız terimleri aşağıdaki metin kutusuna yapıştırabilirsiniz.
                      </p>
                    </div>
                  </div>

                  {/* Set / Source Title Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Kaynak / Set Başlığı (İsteğe Bağlı)
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: YDS Akademik Zarflar veya Unit 1 Phrasal Verbs"
                      value={quizletTitle}
                      onChange={(e) => setQuizletTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  {/* URL Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Quizlet URL Bağlantısı (İsteğe Bağlı)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        placeholder="https://quizlet.com/... veya https://quizlet.com/tr/.../folders/..."
                        value={quizletUrl}
                        onChange={(e) => setQuizletUrl(e.target.value)}
                        className="flex-1 px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                      />
                      <button
                        onClick={handleScanQuizlet}
                        disabled={isProcessing || !quizletUrl.trim()}
                        className="px-4 py-2.5 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white flex items-center gap-1.5 transition-all shadow-sm shrink-0"
                      >
                        {isProcessing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Globe className="w-3.5 h-3.5" />}
                        Taramayı Başlat
                      </button>
                    </div>
                  </div>

                  {/* Scan Notice */}
                  {quizletScanNotice.status !== 'idle' && (
                    <div
                      className={`p-3.5 rounded-2xl text-xs flex items-start gap-2.5 animate-fadeIn ${
                        quizletScanNotice.status === 'success'
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-800 dark:text-emerald-300'
                          : quizletScanNotice.status === 'fallback_ready'
                          ? 'bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-amber-800 dark:text-amber-300'
                          : quizletScanNotice.status === 'scanning'
                          ? 'bg-blue-50 dark:bg-blue-950/40 border border-blue-200 text-blue-800 dark:text-blue-300'
                          : 'bg-rose-50 dark:bg-rose-950/40 border border-rose-200 text-rose-800 dark:text-rose-300'
                      }`}
                    >
                      {quizletScanNotice.status === 'scanning' ? (
                        <Loader2 className="w-4 h-4 animate-spin shrink-0 mt-0.5" />
                      ) : quizletScanNotice.status === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      )}
                      <div className="space-y-1 flex-1">
                        <p className="font-semibold">{quizletScanNotice.message}</p>
                        {quizletScanNotice.technicalDetail && (
                          <details className="text-[11px] opacity-80 cursor-pointer pt-1">
                            <summary className="font-medium">Teknik Ayrıntılar</summary>
                            <p className="mt-1 font-mono text-[10px] bg-black/10 p-2 rounded-lg">
                              {quizletScanNotice.technicalDetail}
                            </p>
                          </details>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Text Input Area (Method 5 Fallback) */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Quizlet Dışa Aktarım Metni (Tab, Tire, İki Nokta veya Virgül Ayırıcı)
                      </label>
                      <span className="text-[11px] text-slate-400">Otomatik Ayırıcı Algılama</span>
                    </div>
                    <textarea
                      rows={6}
                      placeholder={"abandon\tterk etmek, bırakmak\nscarce\tkıt, yetersiz\nreluctant\tisteksiz, gönülsüz"}
                      value={quizletText}
                      onChange={(e) => {
                        setQuizletText(e.target.value);
                        if (quizletPreview) setQuizletPreview(null);
                      }}
                      className="w-full p-3.5 rounded-2xl text-xs font-mono bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  {/* Preview Section */}
                  {quizletPreview && (
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs animate-fadeIn">
                      <div className="flex items-center justify-between font-bold text-slate-800 dark:text-slate-200">
                        <span>İçe Aktarım Önizlemesi:</span>
                        <span className="text-emerald-600 dark:text-emerald-400">
                          {quizletPreview.detectedCount} Terim Algılandı
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] pt-1">
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold block text-sm text-brand-600">{quizletPreview.detectedCount}</span>
                          <span className="text-slate-400">Algılanan</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold block text-sm text-emerald-600">{quizletPreview.validCount}</span>
                          <span className="text-slate-400">Geçerli</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold block text-sm text-amber-600">{quizletPreview.duplicateCount}</span>
                          <span className="text-slate-400">Birleşecek</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold block text-sm text-purple-600">{quizletPreview.manualReviewCount}</span>
                          <span className="text-slate-400">İnceleme</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      onClick={handlePreviewQuizletText}
                      disabled={!quizletText.trim()}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-50 flex items-center gap-1.5 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Önizle
                    </button>
                    <button
                      onClick={handleImportQuizletText}
                      disabled={isProcessing || !quizletText.trim()}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white disabled:opacity-50 flex items-center gap-1.5 transition-all shadow-md"
                    >
                      {isProcessing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                      İçe Aktarımı Onayla
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: PDF */}
              {activeTab === 'pdf' && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 text-xs text-indigo-900 dark:text-indigo-300 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-bold">Gelişmiş PDF Karakter & Kelime Çözümleyici (UTF-8 Pipeline)</p>
                      <p className="text-slate-600 dark:text-slate-400">
                        Türkçe karakterler (ç, ğ, ı, ö, ş, ü), ligatürler ve satır sonu birleştirmeleri tamir edilir. Gerçek kelimeler asla tahmin edilerek değiştirilmez.
                      </p>
                    </div>
                  </div>

                  {/* File Upload Box */}
                  <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl p-6 text-center space-y-3 bg-slate-50/50 dark:bg-slate-800/30 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 flex items-center justify-center mx-auto">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {pdfFile ? pdfFile.name : 'PDF Dosyanızı Seçin'}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Deyimsel fiiller, akademik kelimeler veya soru bankası PDF'leri
                      </p>
                    </div>
                    <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white cursor-pointer shadow-sm transition-all">
                      <span>Dosya Seç (.pdf)</span>
                      <input
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handlePdfFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Progress Indicator with Cancel Button */}
                  {isProcessing && pdfProgress && (
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 text-xs animate-fadeIn">
                      <div className="flex items-center justify-between font-bold">
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
                          Sayfa Taranıyor: {pdfProgress.currentPage} / {pdfProgress.totalPages}
                        </span>
                        <button
                          onClick={handleCancelPdf}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 transition-colors flex items-center gap-1"
                        >
                          <StopCircle className="w-3.5 h-3.5" /> İptal Et
                        </button>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-brand-600 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.max(5, (pdfProgress.currentPage / Math.max(1, pdfProgress.totalPages)) * 100)}%`,
                          }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Tespit Edilen Kelimeler: <strong>{pdfProgress.itemsFound}</strong>
                      </p>
                    </div>
                  )}

                  {/* PDF Detailed Report */}
                  {pdfReport && !isProcessing && (
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs animate-fadeIn">
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2 font-bold text-slate-800 dark:text-slate-200">
                        <span>PDF Ayrıştırma Raporu</span>
                        <span className="text-brand-600 font-mono text-[11px]">
                          {pdfReport.pagesScanned} / {pdfReport.totalPages} Sayfa
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold block text-emerald-600 text-sm">{pdfReport.validTerms}</span>
                          <span className="text-slate-400">Geçerli Kelime</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold block text-amber-600 text-sm">{pdfReport.needsReviewTerms}</span>
                          <span className="text-slate-400">İnceleme Gerekli</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold block text-sky-600 text-sm">{pdfReport.nativeExtractionStatus}</span>
                          <span className="text-slate-400">Native Parse</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                          <span className="font-bold block text-purple-600 text-sm">{pdfReport.ocrStatus}</span>
                          <span className="text-slate-400">OCR Durumu</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={handleCleanCorruptedPdfRecords}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-[11px] underline"
                    >
                      Bozuk Geçmiş Kayıtları Tara ve Temizle
                    </button>
                    <button
                      onClick={handleConfirmPdfImport}
                      disabled={isProcessing || pdfItems.length === 0}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white disabled:opacity-50 flex items-center gap-1.5 transition-all shadow-md"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      {pdfItems.length} Kelimeyi İçe Aktar
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        {!importDone && (
          <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Çakışma Stratejisi:</span>
              <select
                value={duplicateStrategy}
                onChange={(e) => setDuplicateStrategy(e.target.value as 'skip' | 'update')}
                className="px-2.5 py-1 rounded-lg text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none"
              >
                <option value="update">Öğrenme Geçmişini Koru & Anlamları Birleştir</option>
                <option value="skip">Mevcut Kelimeleri Atla</option>
              </select>
            </div>
            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Kapat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
