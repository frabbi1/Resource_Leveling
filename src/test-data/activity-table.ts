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
}

export let activityTable = [
  {
    code: 'A',
    description: null,
    earlyStart: 0,
    earlyFinish: 3,
    lateStart: 0,
    lateFinish: 3,
    duration: 3,
    totalFloat: 0,
    resources: 3
  },

  {
    code: 'B',
    description: null,
    earlyStart: 0,
    earlyFinish: 5,
    lateStart: 4,
    lateFinish: 9,
    duration: 5,
    totalFloat: 4,
    resources: 2
  },

  {
    code: 'C',
    description: null,
    earlyStart: 3,
    earlyFinish: 9,
    lateStart: 3,
    lateFinish: 9,
    duration: 6,
    totalFloat: 0,
    resources: 3
  },

  {
    code: 'D',
    description: null,
    earlyStart: 3,
    earlyFinish: 5,
    lateStart: 8,
    lateFinish: 10,
    duration: 2,
    totalFloat: 5,
    resources: 4
  },

  {
    code: 'E',
    description: null,
    earlyStart: 5,
    earlyFinish: 8,
    lateStart: 10,
    lateFinish: 13,
    duration: 3,
    totalFloat: 5,
    resources: 2
  },

  {
    code: 'F',
    description: null,
    earlyStart: 5,
    earlyFinish: 8,
    lateStart: 10,
    lateFinish: 13,
    duration: 3,
    totalFloat: 4,
    resources: 1
  },

  {
    code: 'G',
    description: null,
    earlyStart: 5,
    earlyFinish: 9,
    lateStart: 9,
    lateFinish: 13,
    duration: 4,
    totalFloat: 4,
    resources: 3
  },

  {
    code: 'H',
    description: null,
    earlyStart: 9,
    earlyFinish: 14,
    lateStart: 13,
    lateFinish: 18,
    duration: 5,
    totalFloat: 4,
    resources: 2
  },

  {
    code: 'I',
    description: null,
    earlyStart: 9,
    earlyFinish: 13,
    lateStart: 9,
    lateFinish: 13,
    duration: 4,
    totalFloat: 0,
    resources: 3
  },

  {
    code: 'J',
    description: null,
    earlyStart: 13,
    earlyFinish: 15,
    lateStart: 13,
    lateFinish: 15,
    duration: 2,
    totalFloat: 0,
    resources: 4
  },

  {
    code: 'K',
    description: null,
    earlyStart: 15,
    earlyFinish: 18,
    lateStart: 15,
    lateFinish: 18,
    duration: 3,
    totalFloat: 0,
    resources: 5
  }
];
