import React, { useState } from 'react';
import { VocabularyItem, VocabularySource } from '../types/vocabulary';
import { dbService } from '../services/db';
import { QuizletImporter } from '../services/quizlet';
import { PdfVocabularyImporter } from '../services/pdf';
import { parseCsvContent, validateAndAnalyzeCsv, ParsedCsvRow, InvalidCsvRow } from '../services/csv';
import { deduplicateVocabularyBatch } from '../services/importer';
import {
  Upload,
  X,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ArrowRight,
  Globe,
  FileDown,
  Loader2,
  Info,
} from 'lucide-react';

interface VocabularyImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  existingVocabulary: VocabularyItem[];
  onImportComplete: () => void;
}

type TabType = 'quizlet' | 'pdf' | 'csv';

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
  const [quizletScanNotice, setQuizletScanNotice] = useState<{
    status: 'idle' | 'scanning' | 'success' | 'blocked' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });

  // Tab 2: PDF States
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfItems, setPdfItems] = useState<VocabularyItem[]>([]);
  const [pdfPages, setPdfPages] = useState<number>(0);
  const [pdfProgress, setPdfProgress] = useState<{ currentPage: number; totalPages: number; itemsFound: number } | null>(null);

  // Tab 3: CSV States
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [csvValidRows, setCsvValidRows] = useState<ParsedCsvRow[]>([]);
  const [csvInvalidRows, setCsvInvalidRows] = useState<InvalidCsvRow[]>([]);
  const [csvDuplicateCount, setCsvDuplicateCount] = useState<number>(0);

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
      setQuizletScanNotice({
        status: 'blocked',
        message:
          'Cloudflare Bot Koruması Algılandı (HTTP 403): Quizlet doğrudan otomatik web kazımayı engellemektedir. Setinizi eksiksiz içe aktarmak için Quizlet sayfasındaki "..." menüsünden "Dışa Aktar (Export)" seçeneğine tıklayıp metni kopyalayarak aşağıdaki kutuya yapıştırınız.',
      });
      // Save ACCESS_FAILED record in sources audit registry
      await dbService.saveSource(result.source);
    } else {
      setQuizletScanNotice({
        status: 'success',
        message: `Başarılı! ${result.discoveredSets.length} adet halka açık set tespit edildi.`,
      });
    }
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

  const handleImportQuizletText = async () => {
    if (!quizletText.trim()) return;
    setIsProcessing(true);

    const title = quizletTitle.trim() || 'Quizlet İçe Aktarım';
    const { items, incompleteCount } = QuizletImporter.parseQuizletExportText(quizletText, {
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
      status: 'completed',
      lastImportedAt: new Date().toISOString(),
      discoveredSetCount: 1,
      processedSetCount: 1,
      failedSetCount: 0,
      importedItemCount: itemsToSave.length,
      duplicateCount,
      incompleteCount,
      manualReviewCount: incompleteCount,
    };
    await dbService.saveSource(sourceRecord);

    setIsProcessing(false);
    setImportDone(true);
    setImportedSummary({
      added: toInsert.length,
      updated: duplicateStrategy === 'update' ? toUpdate.length : 0,
      duplicates: duplicateCount,
      incomplete: incompleteCount,
      manualReview: incompleteCount,
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

    try {
      setPdfProgress({ currentPage: 0, totalPages: 1, itemsFound: 0 });
      const result = await PdfVocabularyImporter.processPdfFile(file, (prog) => {
        setPdfProgress(prog);
      });
      setPdfItems(result.items);
      setPdfPages(result.totalPages);
    } catch (err) {
      console.warn('PDF parsing error:', err);
      alert('PDF dosyası okunurken hata oluştu.');
    } finally {
      setIsProcessing(false);
      setPdfProgress(null);
    }
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

    const incompleteCount = pdfItems.filter((i) => i.requiresManualReview).length;

    const sourceRecord: VocabularySource = {
      id: sourceId,
      type: 'pdf',
      fileName: pdfFile.name,
      title: pdfFile.name,
      status: 'completed',
      lastImportedAt: new Date().toISOString(),
      discoveredSetCount: pdfPages,
      processedSetCount: pdfPages,
      failedSetCount: 0,
      importedItemCount: itemsToSave.length,
      duplicateCount,
      incompleteCount,
      manualReviewCount: incompleteCount,
    };
    await dbService.saveSource(sourceRecord);

    setIsProcessing(false);
    setImportDone(true);
    setImportedSummary({
      added: toInsert.length,
      updated: duplicateStrategy === 'update' ? toUpdate.length : 0,
      duplicates: duplicateCount,
      incomplete: incompleteCount,
      manualReview: incompleteCount,
      sourceTitle: pdfFile.name,
    });
    onImportComplete();
  };

  // --- CSV HANDLERS ---
  const handleCsvFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCsvFile(file);
    setIsProcessing(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const parsedRows = parseCsvContent(content);
      const analysis = validateAndAnalyzeCsv(parsedRows, existingVocabulary);

      setCsvValidRows(analysis.validRows);
      setCsvInvalidRows(analysis.invalidRows);
      setCsvDuplicateCount(analysis.duplicateCount);
      setIsProcessing(false);
    };

    reader.onerror = () => {
      setIsProcessing(false);
      alert('Dosya okunamadı. Lütfen geçerli bir CSV dosyası seçin.');
    };

    reader.readAsText(file, 'UTF-8');
  };

  const handleConfirmCsvImport = async () => {
    if (!csvFile || csvValidRows.length === 0) return;
    setIsProcessing(true);

    let added = 0;
    let updated = 0;
    const itemsToSave: VocabularyItem[] = [];
    const sourceId = `csv-${csvFile.name.replace(/[^a-zA-Z0-9_-]/g, '_')}-${Date.now()}`;
    const sourceRef = {
      sourceId,
      sourceType: 'csv' as const,
      fileName: csvFile.name,
      importedAt: new Date().toISOString(),
    };

    for (const row of csvValidRows) {
      if (row.isDuplicate) {
        if (duplicateStrategy === 'update' && row.existingId) {
          const existingItem = existingVocabulary.find((v) => v.id === row.existingId);
          if (existingItem) {
            const updatedItem: VocabularyItem = {
              ...existingItem,
              word: row.word,
              meaningsTr: row.meaningsTr,
              partOfSpeech: row.partOfSpeech,
              example: row.example,
              synonyms: row.synonyms.length > 0 ? row.synonyms : existingItem.synonyms,
              antonyms: row.antonyms.length > 0 ? row.antonyms : existingItem.antonyms,
              collocations: row.collocations.length > 0 ? row.collocations : existingItem.collocations,
              sourceRefs: [...(existingItem.sourceRefs || []), sourceRef],
            };
            itemsToSave.push(updatedItem);
            updated++;
          }
        }
      } else {
        const newItem: VocabularyItem = {
          id: `vocab-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
          word: row.word,
          meaningsTr: row.meaningsTr,
          partOfSpeech: row.partOfSpeech,
          example: row.example,
          synonyms: row.synonyms,
          antonyms: row.antonyms,
          collocations: row.collocations,
          visualMnemonic: `Memory anchor for ${row.word}`,
          pronunciation: `/${row.word.toLowerCase()}/`,
          difficulty: row.difficulty,
          source: `CSV: ${csvFile.name}`,
          sourceRefs: [sourceRef],
        };
        itemsToSave.push(newItem);
        added++;
      }
    }

    if (itemsToSave.length > 0) {
      await dbService.saveVocabularyBatch(itemsToSave);
    }

    const sourceRecord: VocabularySource = {
      id: sourceId,
      type: 'csv',
      fileName: csvFile.name,
      title: csvFile.name,
      status: 'completed',
      lastImportedAt: new Date().toISOString(),
      discoveredSetCount: 1,
      processedSetCount: 1,
      failedSetCount: 0,
      importedItemCount: itemsToSave.length,
      duplicateCount: csvDuplicateCount,
      incompleteCount: csvInvalidRows.length,
      manualReviewCount: csvInvalidRows.length,
    };
    await dbService.saveSource(sourceRecord);

    setIsProcessing(false);
    setImportDone(true);
    setImportedSummary({
      added,
      updated,
      duplicates: csvDuplicateCount,
      incomplete: csvInvalidRows.length,
      manualReview: csvInvalidRows.length,
      sourceTitle: csvFile.name,
    });
    onImportComplete();
  };

  const handleReset = () => {
    setQuizletUrl('');
    setQuizletText('');
    setQuizletTitle('');
    setQuizletScanNotice({ status: 'idle', message: '' });
    setPdfFile(null);
    setPdfItems([]);
    setPdfPages(0);
    setCsvFile(null);
    setCsvValidRows([]);
    setCsvInvalidRows([]);
    setCsvDuplicateCount(0);
    setImportDone(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Kelime İçe Aktarma Merkezi"
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 sm:pt-8 pt-4 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
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
                Quizlet, PDF ve CSV kaynaklarından eksiksiz ve doğrulanmış kelime aktarımı
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            aria-label="Kapat"
            className="p-1 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Bar */}
        {!importDone && (
          <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 px-6 pt-2 gap-2">
            {[
              { id: 'quizlet', label: '1. Quizlet (URL & Metin)', icon: Globe },
              { id: 'pdf', label: '2. PDF Belgesi', icon: FileText },
              { id: 'csv', label: '3. CSV Tablosu', icon: FileDown },
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
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Quizlet Klasör veya Set URL'si:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        placeholder="https://quizlet.com/user/.../folders/..."
                        value={quizletUrl}
                        onChange={(e) => setQuizletUrl(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                      />
                      <button
                        type="button"
                        onClick={handleScanQuizlet}
                        disabled={isProcessing || !quizletUrl.trim()}
                        className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-semibold transition-colors flex items-center gap-1.5"
                      >
                        {isProcessing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                        Tara
                      </button>
                    </div>
                  </div>

                  {quizletScanNotice.status !== 'idle' && (
                    <div
                      className={`p-3.5 rounded-xl border flex items-start gap-2.5 ${
                        quizletScanNotice.status === 'blocked'
                          ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                          : quizletScanNotice.status === 'success'
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                          : 'bg-slate-50 dark:bg-slate-800 border-slate-200 text-slate-700'
                      }`}
                    >
                      <Info className="w-4 h-4 shrink-0 mt-0.5" />
                      <div className="space-y-1 leading-relaxed">
                        <span className="font-bold block">
                          {quizletScanNotice.status === 'blocked'
                            ? 'Otomatik Web Erişimi Uyarısı (Cloudflare WAF):'
                            : 'Tarama Bilgisi:'}
                        </span>
                        <p>{quizletScanNotice.message}</p>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-bold text-slate-700 dark:text-slate-300">
                        Quizlet Dışa Aktarım Metni (Tab / Virgül / Tire Ayrılmış):
                      </label>
                      <span className="text-[10px] text-slate-400">
                        Quizlet &gt; "..." &gt; "Dışa Aktar" &gt; Metni Kopyala
                      </span>
                    </div>
                    <textarea
                      rows={6}
                      placeholder="Örnek:
mitigate	hafifletmek, azaltmak
deteriorate	kötüleşmek, bozulmak
significantly - önemli derecede
carry out : yerine getirmek"
                      value={quizletText}
                      onChange={(e) => setQuizletText(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    ></textarea>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Kaynak Başlığı (Opsiyonel):
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: YDS En Sık Kullanılan Zarflar - Set 1"
                      value={quizletTitle}
                      onChange={(e) => setQuizletTitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>
              )}

              {/* TAB 2: PDF */}
              {activeTab === 'pdf' && (
                <div className="space-y-4 text-xs">
                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-brand-500 transition-colors">
                    <FileText className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                    <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      YDS Kelime & Phrasal Verb PDF Dosyasını Seçin
                    </p>
                    <p className="text-[11px] text-slate-400 mb-3">
                      Örn: "YDS Grammar En Çok Sorulan Öbek Fiiller.pdf", "YDS Phrasal Verbs.pdf"
                    </p>
                    <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium cursor-pointer shadow-sm transition-all">
                      <Upload className="w-3.5 h-3.5" />
                      PDF Dosyası Yükle
                      <input
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handlePdfFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Live scanning progress indicator */}
                  {isProcessing && pdfProgress && (
                    <div className="p-4 rounded-xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200 dark:border-brand-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-brand-700 dark:text-brand-300">
                        <span>PDF Sayfa Taranıyor...</span>
                        <span>Sayfa {pdfProgress.currentPage} / {pdfProgress.totalPages}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-600 transition-all duration-200"
                          style={{
                            width: `${Math.round((pdfProgress.currentPage / (pdfProgress.totalPages || 1)) * 100)}%`,
                          }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Şu ana kadar bulunan kelime &amp; phrasal verb: <strong>{pdfProgress.itemsFound}</strong>
                      </p>
                    </div>
                  )}

                  {/* Rule 42 Friendly Notice */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      📌 Yerel macOS PDF Dosyaları Notu:
                    </p>
                    <p>
                      "YDS Grammar En Çok Sorulan Öbek Fiiller.pdf" veya "YDS Phrasal Verbs.pdf" dosyalarınız bilgisayarınızdaysa, yukarıdaki butona tıklayarak doğrudan seçip içe aktarabilirsiniz. Sayfa sayfa taranarak phrasal verbler ("carry out", "put off") ve Türkçe karşılıkları eksiksiz ayrıştırılır.
                    </p>
                  </div>

                  {pdfFile && (
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {pdfFile.name}
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          ✓ {pdfItems.length} İfade / Kelime Çıkarıldı ({pdfPages} Sayfa)
                        </span>
                      </div>

                      {pdfItems.length > 0 && (
                        <div className="max-h-40 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg">
                          <table className="w-full text-left text-[11px]">
                            <thead className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 sticky top-0">
                              <tr>
                                <th className="p-2">Kelime / Deyim</th>
                                <th className="p-2">Türkçe Anlam</th>
                                <th className="p-2">Tür</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                              {pdfItems.slice(0, 10).map((item, idx) => (
                                <tr key={idx}>
                                  <td className="p-2 font-bold">{item.word}</td>
                                  <td className="p-2">{(item.meaningsTr || item.turkishMeanings || item.meanings || []).join(', ')}</td>
                                  <td className="p-2 uppercase font-mono text-[9px]">
                                    {item.partOfSpeech}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Clean Corrupted PDF records */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-700 dark:text-slate-300 block text-[11px]">
                        Veri Tabanı Bütünlüğü &amp; Temizlik:
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Önceki bozuk/yarım PDF kayıtlarını güvenle temizler; gerçek öğrenme geçmişinize dokunmaz.
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCleanCorruptedPdfRecords}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 hover:bg-rose-100 transition-colors"
                    >
                      Hatalı PDF Kayıtlarını Temizle
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: CSV */}
              {activeTab === 'csv' && (
                <div className="space-y-4 text-xs">
                  {!csvFile && (
                    <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-brand-500 transition-colors">
                      <FileDown className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                      <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        CSV Dosyanızı Seçin
                      </p>
                      <p className="text-[11px] text-slate-400 mb-3">
                        Format: word, turkishMeaning, partOfSpeech, example, synonyms, antonyms, collocations
                      </p>
                      <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium cursor-pointer shadow-sm transition-all">
                        <Upload className="w-3.5 h-3.5" />
                        CSV Seç (.csv)
                        <input
                          type="file"
                          accept=".csv,text/csv"
                          onChange={handleCsvFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}

                  {csvFile && (
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">
                          Dosya
                        </span>
                        <span className="font-bold text-slate-900 dark:text-slate-100">
                          {csvFile.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                          ✓ {csvValidRows.length} Geçerli Satır
                        </span>
                        {csvDuplicateCount > 0 && (
                          <span className="text-amber-500 font-bold">
                            ⚠ {csvDuplicateCount} Mevcut
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DUPLICATE STRATEGY RADIO OPTIONS */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
                  <AlertTriangle className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  Mevcut Kelimeler İçin Çakışma Stratejisi:
                </div>
                <div className="space-y-1.5 pl-6">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                    <input
                      type="radio"
                      name="dupStrategy"
                      checked={duplicateStrategy === 'update'}
                      onChange={() => setDuplicateStrategy('update')}
                      className="accent-brand-600"
                    />
                    <span>
                      <strong>Bilgileri birleştir &amp; güncelle (Önerilen):</strong> Yeni Türkçe anlamları ve eşanlamlıları ekle;{' '}
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        öğrenme durumunu asla sıfırlama.
                      </span>
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                    <input
                      type="radio"
                      name="dupStrategy"
                      checked={duplicateStrategy === 'skip'}
                      onChange={() => setDuplicateStrategy('skip')}
                      className="accent-brand-600"
                    />
                    <span>
                      <strong>Mevcut olanları atla (Skip):</strong> Yalnızca veritabanında hiç bulunmayan yeni kelimeleri ekle.
                    </span>
                  </label>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {importDone ? 'Kapat' : 'İptal'}
          </button>

          {!importDone && (
            <>
              {activeTab === 'quizlet' && (
                <button
                  onClick={handleImportQuizletText}
                  disabled={isProcessing || !quizletText.trim()}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-50 shadow-sm transition-all"
                >
                  {isProcessing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                  Quizlet Kelimelerini İçe Aktar
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {activeTab === 'pdf' && (
                <button
                  onClick={handleConfirmPdfImport}
                  disabled={isProcessing || pdfItems.length === 0}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-50 shadow-sm transition-all"
                >
                  {isProcessing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                  PDF Kelimelerini İçe Aktar
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {activeTab === 'csv' && (
                <button
                  onClick={handleConfirmCsvImport}
                  disabled={isProcessing || csvValidRows.length === 0}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-50 shadow-sm transition-all"
                >
                  {isProcessing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                  CSV Kelimelerini İçe Aktar
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
