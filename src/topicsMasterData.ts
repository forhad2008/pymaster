// Master topics dataset for PyMaster Academy Topics Explorer
export interface MasterSubtopic {
  name: string;
  desc: string;
  code?: string;
}

export interface MasterTopic {
  id: string;
  num: number;
  title: string;
  category: "beginner" | "intermediate" | "advanced" | "applied" | "projects";
  categoryLabel: string;
  icon: string;
  summary: string;
  conceptSimple: string;
  conceptTechnical: string;
  exampleCode: string;
  expectedOutput: string;
  practiceTask: string;
  subtopics: MasterSubtopic[];
}

import { TOPICS_DATA } from './topicsDataGenerated';
export const MASTER_TOPICS: MasterTopic[] = TOPICS_DATA;
