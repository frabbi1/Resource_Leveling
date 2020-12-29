import { Injectable } from '@angular/core';
import {Activity} from "../models";
import * as _ from 'lodash';
import {ResourceService} from "./resource.service";
import {CpmService} from "./cpm.service";

@Injectable({
  providedIn: 'root'
})
export class BurgessService {

  private activityList: Activity[];

  constructor(private rs: ResourceService, private cpm: CpmService) { }

  public processBurgess(activities: Activity[]) {
    this.initActivities(activities);
    this.sortByEF()
    this.doBurgess();
    return this.activityList;
  }

  private initActivities(activities: Activity[]) {
    this.activityList = _.cloneDeep(activities);
  }

  private doBurgess() {
    this.activityList.forEach((act) => {
      if (!act.isCritical) {
        const ff = act.freeFloat;
        let minRSquare = Number.MAX_SAFE_INTEGER;
        let minI = 0;
        for (let i = 0; i < ff; i++) {
          const temp = _.cloneDeep(this.activityList);
          const tAct = temp.filter(a => a.code === act.code)[0];
          tAct.earlyStart = tAct.earlyStart + i + 1;
          tAct.earlyFinish = tAct.earlyStart + tAct.duration;
          const sumRSquare = this.rs.getResourceTable(temp).sumRsqr;
          const rSquare = sumRSquare[sumRSquare.length - 1];
          if (rSquare < minRSquare) {
            minRSquare = rSquare;
            minI = i;
          }
        }
        act.earlyStart = act.earlyStart + minI + 1;
        act.earlyFinish = act.earlyStart + act.duration;
        this.cpm.countFreeFloat(this.activityList);
      }
    });
  }

  private sortByEF() {
    this.activityList.sort((a, b) => b.earlyFinish - a.earlyFinish);
  }
}
