import { Injectable } from '@angular/core';
import {Activity} from "../models";
import {DataService} from "./data.service";
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class MinimizedService {

  private activityList: Activity[];

  constructor(private ds: DataService) { }

  public processMinimized() {
    this.activityList = _.cloneDeep(this.ds.getCPM());
    this.activityList.sort((a, b) => b.earlyFinish - a.earlyFinish);
    this.runProcess();
  }

  private runProcess() {
    const len = this.activityList.length;
    for (let i = 0; i < len; i++) {
      const clonedActivities = _.cloneDeep(this.activityList);
      const selected = clonedActivities[i];
    }
  }
}
