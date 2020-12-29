export interface Activity {
  code: string;
  description?: string;
  earlyStart: number;
  earlyFinish: number;
  lateStart: number;
  lateFinish: number;
  duration: number;
  totalFloat: number;
  resources: number;
  isCritical: boolean;
  predecessors: string[];
  successors: string[];
}

export let NullActivity: Activity = {
  code: 'NONE',
  predecessors: null,
  successors: null,
  resources: 0,
  totalFloat: 0,
  duration: 0,
  lateFinish: Number.MAX_SAFE_INTEGER,
  lateStart: 0,
  earlyFinish: 0,
  earlyStart: 0,
  description: undefined,
  isCritical: false
}
