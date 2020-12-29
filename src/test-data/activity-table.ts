import {Activity} from "../app/models";

export let activityTable: Activity[] = [
  {
    code: 'D',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 2,
    totalFloat: 0,
    resources: 4,
    successors: null,
    predecessors: ['A'],
    isCritical: false
  },
  {
    code: 'A',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 3,
    totalFloat: 0,
    resources: 3,
    successors: null,
    predecessors: ['NONE'],
    isCritical: false
  },

  {
    code: 'B',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 5,
    totalFloat: 0,
    resources: 2,
    successors: null,
    predecessors: ['NONE'],
    isCritical: false
  },

  {
    code: 'C',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 6,
    totalFloat: 0,
    resources: 3,
    successors: null,
    predecessors: ['A'],
    isCritical: false
  },



  {
    code: 'E',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 3,
    totalFloat: 0,
    resources: 2,
    successors: null,
    predecessors: ['D'],
    isCritical: false
  },

  {
    code: 'F',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 3,
    totalFloat: 0,
    resources: 1,
    successors: null,
    predecessors: ['D'],
    isCritical: false
  },

  {
    code: 'G',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 4,
    totalFloat: 0,
    resources: 3,
    successors: null,
    predecessors: ['B'],
    isCritical: false
  },

  {
    code: 'H',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 5,
    totalFloat: 0,
    resources: 2,
    successors: null,
    predecessors: ['F', 'G'],
    isCritical: false
  },

  {
    code: 'I',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 4,
    totalFloat: 0,
    resources: 3,
    successors: null,
    predecessors: ['C'],
    isCritical: false
  },

  {
    code: 'J',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 2,
    totalFloat: 0,
    resources: 4,
    successors: null,
    predecessors: ['E', 'I'],
    isCritical: false
  },

  {
    code: 'K',
    description: null,
    earlyStart: 0,
    earlyFinish: 0,
    lateStart: 0,
    lateFinish: Number.MAX_SAFE_INTEGER,
    duration: 3,
    totalFloat: 0,
    resources: 5,
    successors: null,
    predecessors: ['J'],
    isCritical: false
  }
];
