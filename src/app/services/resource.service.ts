import { Injectable } from '@angular/core';
import {Activity} from "../models";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private ds: DataService) { }
  public getResourceTable(activityList: Activity[]) {
    const days = this.ds.getProjectCompletionTime();
    const dailyR = this.calculateR(activityList, days);
    const sumR = this.calculateSumR(dailyR, days);
    const dailyRsqr = dailyR.map((el) => el * el);
    const sumRsqr = this.calculateSumRsqr(dailyRsqr, days);
    return {
      dailyR,
      sumR,
      dailyRsqr,
      sumRsqr
    };
  }

  private calculateR(activityList: Activity[], days) {
    const dailyR: number[] = [];
    for (let i = 1; i <= days; i++) {
      let r = 0;
      activityList.forEach(a => {
        if ( i > a.earlyStart && i <= a.earlyFinish) {
          r = r + a.resources;
        }
      });
      dailyR.push(r);
    }
    return dailyR;
  }

  private calculateSumR(dailyR: number[], days) {
    const sumR: number[] = [];
    let x = 0;
    for (let i = 1; i <= days; i++) {
      x = x + dailyR[i - 1];
      sumR.push(x);
    }
    return sumR;
  }

  private calculateSumRsqr(dailyRsqr: number[], days) {
    const sumRsqr: number[] = [];
    let x = 0;
    for (let i = 1; i <= days; i++) {
      x = x + dailyRsqr[i - 1];
      sumRsqr.push(x);
    }
    return sumRsqr;
  }
}
