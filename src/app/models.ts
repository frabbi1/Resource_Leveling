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
  predecessors: Activity[];
}
