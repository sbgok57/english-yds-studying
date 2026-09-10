import { VocabularyItem } from '../types/vocabulary';

export class QuizletImporter {
  /**
   * Parses Quizlet export formats:
   * 1. Tab separated: "Term\tDefinition"
   * 2. Comma separated: "Term,Definition"
   * 3. Custom delimiter
   */
  public static parseQuizletText(rawText: string, defaultDayName = 'Custom Import'): VocabularyItem[] {
    const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
    const items: VocabularyItem[] = [];

    lines.forEach((line, idx) => {
      let term = '';
      let definition = '';

      if (line.includes('\t')) {
        const parts = line.split('\t');
        term = parts[0].trim();
        definition = parts.slice(1).join(' ').trim();
      } else if (line.includes(' - ')) {
        const parts = line.split(' - ');
        term = parts[0].trim();
        definition = parts.slice(1).join(' ').trim();
      } else if (line.includes(':')) {
        const parts = line.split(':');
        term = parts[0].trim();
        definition = parts.slice(1).join(' ').trim();
      } else if (line.includes(',')) {
        const parts = line.split(',');
        term = parts[0].trim();
        definition = parts.slice(1).join(',').trim();
      }

      if (term) {
        items.push({
          id: `custom-import-${Date.now()}-${idx + 1}`,
          word: term.charAt(0).toUpperCase() + term.slice(1),
          meaningsTr: [definition],
          partOfSpeech: 'adverb',
          definitionEn: definition,
          example: `This is a sample sentence illustrating how to use "${term}" in professional YDS contexts.`,
          exampleTr: `Bu örnek "${term}" kelimesinin profesyonel YDS bağlamındaki kullanımını gösterir.`,
          synonyms: [],
          antonyms: [],
          collocations: [],
          relatedWords: [],
          visualMnemonic: {
            description: `Visual context card for ${term}`,
            clue: `${definition} bağlamı`,
            iconName: 'BookOpen',
            badgeCategory: 'Quizlet Import'
          },
          difficulty: 'YDS_CORE',
          source: 'Quizlet Custom Import',
          day: defaultDayName
        });
      }
    });

    return items;
  }
}
