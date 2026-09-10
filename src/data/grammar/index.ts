export * from './topics';
import { GrammarLesson, GrammarActivity } from '../../types';
import { FOUNDATION_LESSONS } from './lessons/foundation';
import { CORE_LESSONS } from './lessons/core';
import { INTERMEDIATE_LESSONS } from './lessons/intermediate';
import { YDSGRAMMAR_LESSONS } from './lessons/ydsGrammar';

import { FOUNDATION_ACTIVITIES } from './activities/foundationActivities';
import { CORE_ACTIVITIES } from './activities/coreActivities';
import { INTERMEDIATE_ACTIVITIES } from './activities/intermediateActivities';
import { YDSGRAMMAR_ACTIVITIES } from './activities/ydsGrammarActivities';

export const ALL_GRAMMAR_LESSONS: GrammarLesson[] = [
  ...FOUNDATION_LESSONS,
  ...CORE_LESSONS,
  ...INTERMEDIATE_LESSONS,
  ...YDSGRAMMAR_LESSONS,
];

export const ALL_GRAMMAR_ACTIVITIES: GrammarActivity[] = [
  ...FOUNDATION_ACTIVITIES,
  ...CORE_ACTIVITIES,
  ...INTERMEDIATE_ACTIVITIES,
  ...YDSGRAMMAR_ACTIVITIES,
];

export const LESSONS_BY_TOPIC_ID = new Map<string, GrammarLesson>(
  ALL_GRAMMAR_LESSONS.map((l) => [l.topicId, l])
);

export const ACTIVITIES_BY_TOPIC_ID = new Map<string, GrammarActivity[]>();
ALL_GRAMMAR_ACTIVITIES.forEach((act) => {
  const list = ACTIVITIES_BY_TOPIC_ID.get(act.grammarTopicId) || [];
  list.push(act);
  ACTIVITIES_BY_TOPIC_ID.set(act.grammarTopicId, list);
});
