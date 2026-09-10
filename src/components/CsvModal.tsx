import React, { useState } from 'react';
import {
  parseCsvContent,
  validateAndAnalyzeCsv,
  ParsedCsvRow,
  InvalidCsvRow,
} from '../services/csv';
import { VocabularyItem } from '../types';
import { dbService } from '../services/db';
import { Upload, X, CheckCircle2, AlertTriangle, FileText, ArrowRight } from 'lucide-react';

interface CsvModalProps {
  isOpen: boolean;
  onClose: () => void;
  existingVocabulary: VocabularyItem[];
  onImportComplete: () => void;
}

export const CsvModal: React.FC<CsvModalProps> = ({
  isOpen,
  onClose,
  existingVocabulary,
  onImportComplete,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [validRows, setValidRows] = useState<ParsedCsvRow[]>([]);
  const [invalidRows, setInvalidRows] = useState<InvalidCsvRow[]>([]);
  const [duplicateCount, setDuplicateCount] = useState<number>(0);
  const [duplicateStrategy, setDuplicateStrategy] = useState<'skip' | 'update'>('skip');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [importDone, setImportDone] = useState<boolean>(false);
  const [importedSummary, setImportedSummary] = useState<{ added: number; updated: number }>({
    added: 0,
    updated: 0,
  });

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setIsProcessing(true);
    setImportDone(false);

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const parsedRows = parseCsvContent(content);
      const analysis = validateAndAnalyzeCsv(parsedRows, existingVocabulary);

      setValidRows(analysis.validRows);
      setInvalidRows(analysis.invalidRows);
      setDuplicateCount(analysis.duplicateCount);
      setIsProcessing(false);
    };

    reader.onerror = () => {
      setIsProcessing(false);
      alert('Dosya okunamadı. Lütfen geçerli bir CSV dosyası seçin.');
    };

    reader.readAsText(selectedFile, 'UTF-8');
  };

  const handleConfirmImport = async () => {
    setIsProcessing(true);
    let added = 0;
    let updated = 0;

    const itemsToSave: VocabularyItem[] = [];

    for (const row of validRows) {
      if (row.isDuplicate) {
        if (duplicateStrategy === 'update' && row.existingId) {
          // Update vocabulary metadata while preserving learning progress
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
            };
            itemsToSave.push(updatedItem);
            updated++;
          }
        }
        // If skip, do nothing for this row
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
          source: 'User CSV Import',
        };
        itemsToSave.push(newItem);
        added++;
      }
    }

    if (itemsToSave.length > 0) {
      await dbService.saveVocabularyBatch(itemsToSave);
    }

    setIsProcessing(false);
    setImportDone(true);
    setImportedSummary({ added, updated });
    onImportComplete();
  };

  const handleClose = () => {
    setFile(null);
    setValidRows([]);
    setInvalidRows([]);
    setDuplicateCount(0);
    setImportDone(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="CSV Kelime İçe Aktarma"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              CSV Kelime Listesi İçe Aktar
            </h3>
          </div>
          <button
            onClick={handleClose}
            aria-label="Kapat"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {!file && (
            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 text-center hover:border-brand-500 transition-colors">
              <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">
                CSV Dosyanızı buraya sürükleyin veya seçin
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Desteklenen format: word, turkishMeaning, partOfSpeech, example, synonyms, antonyms, collocations
              </p>
              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium cursor-pointer shadow-md transition-all">
                <Upload className="w-4 h-4" />
                Dosya Seç (.csv)
                <input
                  type="file"
                  accept=".csv,text/csv"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {file && !importDone && (
            <div className="space-y-4">
              {/* File Info & Stats */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-bold block">Seçilen Dosya</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{file.name}</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    ✓ {validRows.length} Geçerli Satır
                  </span>
                  {invalidRows.length > 0 && (
                    <span className="text-red-500 font-bold">
                      ✗ {invalidRows.length} Hatalı Satır
                    </span>
                  )}
                  {duplicateCount > 0 && (
                    <span className="text-amber-500 font-bold">
                      ⚠ {duplicateCount} Mevcut Kelime
                    </span>
                  )}
                </div>
              </div>

              {/* Duplicate Strategy Option */}
              {duplicateCount > 0 && (
                <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300 mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    Mevcut Kelimeler İçin Seçim Yapın:
                  </div>
                  <div className="space-y-2 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-800 dark:text-slate-200">
                      <input
                        type="radio"
                        name="dupStrategy"
                        checked={duplicateStrategy === 'skip'}
                        onChange={() => setDuplicateStrategy('skip')}
                        className="text-brand-600"
                      />
                      <span>
                        <strong>Mevcut olanları atla (Skip):</strong> Yalnızca veritabanında olmayan yeni kelimeleri ekle.
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-slate-800 dark:text-slate-200">
                      <input
                        type="radio"
                        name="dupStrategy"
                        checked={duplicateStrategy === 'update'}
                        onChange={() => setDuplicateStrategy('update')}
                        className="text-brand-600"
                      />
                      <span>
                        <strong>Bilgileri güncelle (Öğrenme İlerlemesini Koru):</strong> Kelime tanımlarını güncelle ama öğrenme durumunu ve tekrar tarihlerini ASLA sıfırlama.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Preview Table */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Önizleme (İlk 5 Satır)
                </span>
                <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        <th className="p-2.5">Kelime</th>
                        <th className="p-2.5">Türkçe Anlamı</th>
                        <th className="p-2.5">Tür</th>
                        <th className="p-2.5">Durum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {validRows.slice(0, 5).map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                          <td className="p-2.5 font-bold text-slate-900 dark:text-slate-100">
                            {row.word}
                          </td>
                          <td className="p-2.5">{row.meaningsTr.join(', ')}</td>
                          <td className="p-2.5 uppercase font-mono text-[10px]">
                            {row.partOfSpeech}
                          </td>
                          <td className="p-2.5">
                            {row.isDuplicate ? (
                              <span className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-medium">
                                Mevcut
                              </span>
                            ) : (
                              <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-medium">
                                Yeni
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {importDone && (
            <div className="p-8 text-center space-y-3">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                İçe Aktarma Başarıyla Tamamlandı!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>{importedSummary.added}</strong> yeni kelime eklendi,{' '}
                <strong>{importedSummary.updated}</strong> kelime güncellendi.
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Öğrenme ilerlemeleriniz ve tekrar tarihleriniz eksiksiz korundu.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {importDone ? 'Tamamla' : 'İptal'}
          </button>

          {file && !importDone && (
            <button
              onClick={handleConfirmImport}
              disabled={isProcessing || validRows.length === 0}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-50 shadow-md transition-all"
            >
              {isProcessing ? 'İşleniyor...' : 'Onayla ve İçe Aktar'}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
