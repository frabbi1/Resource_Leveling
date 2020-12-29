import { Injectable } from '@angular/core';
import {Activity} from "../models";
import {Stack} from 'datastructures-js';

@Injectable({
  providedIn: 'root'
})
export class CpmService {

  private activityFpStack: Stack;
  private activityBpStack: Stack;
  constructor() { }

  public getCpmTable(activityList: Activity[]) {
    this.activityFpStack = new Stack();
    this.activityBpStack = new Stack();
    this.topologicalSort(activityList);
    this.doForwardPass(activityList);
    this.doBackwardPass(activityList);
    this.countSlackTime(activityList);
    console.log(activityList);
    return activityList;
  }

  private doForwardPass(activityList: Activity[]) {
    this.findStartActivities(activityList).forEach( startActivity => this.setForwardPassValue(startActivity, 0));
    while (!this.activityFpStack.isEmpty()) {
      const act = this.activityFpStack.pop();
      this.activityBpStack.push(act);
      const successorActivities = this.findSuccessorActivities(act, activityList);
      successorActivities.forEach(sAct => {
        this.setForwardPassValue(sAct, Math.max(act.earlyFinish, sAct.earlyStart));
      });
    }
  }

  private doBackwardPass(activityList: Activity[]) {
    this.setLastActivitiesLateValues(activityList);
    while (!this.activityBpStack.isEmpty()) {
      const act: Activity = this.activityBpStack.pop();
      const predecessorActivities = this.findPredecessorActivities(act, activityList);
      predecessorActivities.forEach(pAct => {
        this.setBackwardPassValue(pAct, Math.min(act.lateStart, pAct.lateFinish));
      });
    }
  }

  private findStartActivities(activityList: Activity[]) {
    return activityList.filter( act => act.predecessors.length === 1 && act.predecessors[0] === 'NONE');
  }

  private setForwardPassValue(activity: Activity, es: number) {
    activity.earlyStart = es;
    activity.earlyFinish = activity.earlyStart + activity.duration;
  }

  private findSuccessorActivities(activity: Activity, activityList: Activity[]) {
    const successorCodes = activity.successors;
    if (successorCodes === null) {
      return [];
    }
    const successors: Activity[] = [];
    successorCodes.forEach( sc => {
      const successor = activityList.filter( ac => ac.code === sc)[0];
      successors.push(successor);
    });
    return successors;
  }

  private setLastActivitiesLateValues(activityList: Activity[]) {
    const lastActivities = activityList.filter( act => act.successors === null );
    let max = -1;
    lastActivities.forEach(act => {
      max = Math.max(act.earlyFinish, max);
    });
    lastActivities.forEach(act => {
      act.lateFinish = max;
      act.lateStart = act.lateFinish - act.duration;
    });
  }

  private topologicalSort(activityList: Activity[]) {
    const len = activityList.length;
    const visited: boolean[] = new Array(len);
    visited.fill(false);

    for (let i = 0; i < len; i++) {
      if (visited[i] === false) {
        this.topoSortUtil(i, visited, activityList);
      }
    }

  }

  private topoSortUtil(v: number, visited: boolean[], activityList: Activity[]) {
    visited[v] = true;
    const successors = this.findSuccessorActivities(activityList[v], activityList);

    // tslint:disable-next-line:prefer-for-of
    for (let x = 0; x < successors.length; x++ ) {
      const idx = this.findIndex(successors[x], activityList);
      if (!visited[idx]) {
        this.topoSortUtil(idx, visited, activityList);
      }
    }
    this.activityFpStack.push(activityList[v]);
  }

  private findIndex(activity: Activity, activityList: Activity[]) {
    for (let i = 0; i < activityList.length; i++) {
      if (activityList[i].code === activity.code) {
        return i;
      }
    }
  }

  private findPredecessorActivities(activity: Activity, activityList: Activity[]) {
    const predecessorCodes = activity.predecessors;
    if (predecessorCodes[0] === 'NONE') {
      return [];
    }
    const predecessors: Activity[] = [];
    predecessorCodes.forEach( pc => {
      const predecessor = activityList.filter( ac => ac.code === pc)[0];
      predecessors.push(predecessor);
    });
    return predecessors;
  }

  private setBackwardPassValue(pAct: Activity, lf: number) {
    pAct.lateFinish = lf;
    pAct.lateStart = pAct.lateFinish - pAct.duration;
  }

  private countSlackTime(activityList: Activity[]) {
    activityList.forEach(activity => {
      activity.totalFloat = activity.lateStart - activity.earlyStart;
      if (activity.totalFloat === 0) {
        activity.isCritical = true;
      }
    });
  }
}
