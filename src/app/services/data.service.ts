import { Injectable } from '@angular/core';
import {Activity} from "../models";
import * as _ from "lodash";
import {CpmService} from "./cpm.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cpmList: Activity[];
  private burgessList: Activity[];
  private optimalList: Activity[];

  constructor(private cpm: CpmService) { }

  public setCPM(activityList: Activity[]) {
    this.cpmList = _.cloneDeep(activityList);
  }

  public getCPM() {
    return this.cpmList;
  }

  public getProjectCompletionTime() {
    return this.cpm.getProjectCompletionTime(this.cpmList);
  }
  public setBurgessData(activityList: Activity[]) {
    this.burgessList = activityList;
  }
  public getBurgessData() {
    return this.burgessList;
  }
  public getCriticalActivities() {
    const aList = _.cloneDeep(this.cpmList);
    aList.sort((a, b) => a.earlyFinish - b.earlyFinish);
    return aList.filter(act => act.isCritical === true);
  }
}
