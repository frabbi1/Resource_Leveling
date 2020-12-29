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
    isCritical: false,
    freeFloat: 0
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
    isCritical: false,
    freeFloat: 0
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
    isCritical: false,
    freeFloat: 0
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
    isCritical: false,
    freeFloat: 0
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
    isCritical: false,
    freeFloat: 0
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
    isCritical: false,
    freeFloat: 0
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
    isCritical: false,
    freeFloat: 0
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
    isCritical: false,
    freeFloat: 0
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
    isCritical: false,
    freeFloat: 0
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
    isCritical: false,
    freeFloat: 0
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
    isCritical: false,
    freeFloat: 0
  }
];
