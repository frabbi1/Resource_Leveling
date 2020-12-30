import { Injectable } from '@angular/core';
import {Activity, ListNode} from "../models";
import {DataService} from "./data.service";
import * as _ from "lodash";
import {CpmService} from "./cpm.service";
import {ResourceService} from "./resource.service";

@Injectable({
  providedIn: 'root'
})
export class MinimizedService {

  private activityList: Activity[];
  private globalMinRSquare: number;
  private globalMinState: Activity[];

  constructor(private ds: DataService, private cpm: CpmService, private rs: ResourceService) { }

  public processMinimized() {
    this.activityList = _.cloneDeep(this.ds.getCPM());
    this.activityList.sort((a, b) => b.earlyFinish - a.earlyFinish);
    this.globalMinRSquare = Number.MAX_SAFE_INTEGER;
    this.globalMinState = null;
    this.runProcess();
  }

  private runProcess() {
    const clonedActivities = _.cloneDeep(this.activityList);
    const nonCriticalList = clonedActivities.filter(a => a.isCritical === false);
    this.recursiveProcess(nonCriticalList, nonCriticalList.length - 1);
  }

  private recursiveProcess(nonCriticalList: Activity[], idx: number) {
    const clonedNonCriticalList = _.cloneDeep(nonCriticalList);
    if (idx === 0 && clonedNonCriticalList[idx].freeFloat === 0) {
      return;
    } else {
      const limit = clonedNonCriticalList.length - 1; // need clone
      let activity: Activity;
      if (idx >= limit) {
        activity = clonedNonCriticalList[limit];
        idx = limit;
      } else {
        activity = clonedNonCriticalList[idx];
      }
      if (activity.freeFloat > 0) {
        activity.earlyFinish = activity.earlyStart + 1;
        activity.earlyFinish = activity.earlyStart + activity.duration;
        const aList = this.makeFullListWithCritical(clonedNonCriticalList);
        this.saveMinState(aList);
        this.cpm.countFreeFloat(clonedNonCriticalList);
        this.recursiveProcess(clonedNonCriticalList, idx + 1);
      } else {
        this.recursiveProcess(clonedNonCriticalList, idx - 1);
      }
    }
  }

  private makeFullListWithCritical(ncList: Activity[]) {
    const alList = this.activityList.filter(a => a.isCritical === true);
    ncList.forEach(el => {
      alList.push(el);
    });
    return alList;
  }

  private saveMinState(aList: Activity[]) {
    const sumRSquare = this.rs.getResourceTable(aList).sumRsqr;
    const rSquare = sumRSquare[sumRSquare.length - 1];
    if (rSquare < this.globalMinRSquare) {
      this.globalMinRSquare = rSquare;
      this.globalMinState = aList;
    }
  }
}
