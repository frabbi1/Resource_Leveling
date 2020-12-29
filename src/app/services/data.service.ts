import { Injectable } from '@angular/core';
import {Activity} from "../models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cpmList: Activity[];
  private burgessList: Activity[];
  private optimalList: Activity[];

  constructor() { }

  public setCPM(activityList: Activity[]) {
    this.cpmList = activityList;
  }

  public getCPM() {
    return this.cpmList;
  }

  public getProjectCompletionTime() {
    let max = 0;
    this.cpmList.forEach(act => {
      if(act.isCritical === true) {
        max = Math.max(act.lateFinish, max);
      }
    });

    return max;
  }
}
