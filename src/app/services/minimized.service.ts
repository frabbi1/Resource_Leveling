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
    this.activityList.sort((a, b) => a.earlyFinish - b.earlyFinish);
    this.globalMinRSquare = Number.MAX_SAFE_INTEGER;
    this.globalMinState = null;
    this.pesudo();
    return this.globalMinState;
  }

  private saveMinState(aList: Activity[]) {
    const sumRSquare = this.rs.getResourceTable(aList).sumRsqr;
    const rSquare = sumRSquare[sumRSquare.length - 1];
    if (rSquare < this.globalMinRSquare) {
      this.globalMinRSquare = rSquare;
      this.globalMinState = _.cloneDeep(aList);
    }
  }
  private getNonCriticalList(aList: Activity[]) {
    return aList.filter(a => a.isCritical === false);
  }

  private pesudo() {
    const nonCritical = this.getNonCriticalList(this.activityList);
    const availableSlot = [];
    nonCritical.forEach(a => {
      if (a.isCritical === false) {
        availableSlot.push(this.makeListWithTF(a.totalFloat, a.earlyStart));
      }
    });
    const combination = this.cartesian(availableSlot);
    this.generateResult(combination);
  }

  private makeListWithTF(tf, es) {
    const l = [];
    for (let i = es; i <= es + tf; i++) {
      l.push(i);
    }
    return l;
  }
  private cartesian(args) {
    const r = [];
    const max = args.length - 1;
    const helper = (arr, i) => {
      for (let j = 0, l = args[i].length; j < l; j++) {
        const a = arr.slice(0); // clone arr
        a.push(args[i][j]);
        if (i === max){
          r.push(a);
        }
        else{
          helper(a, i + 1);
        }
      }
    }
    helper([], 0);
    return r;
  }

  private generateResult(combination: any[]) {
    const nc = this.getNonCriticalList(this.activityList);
    combination.forEach(c => {
      for (let i = 0; i < c.length; i++ ) {
        nc[i].earlyStart = c[i];
        nc[i].earlyFinish = nc[i].earlyStart + nc[i].duration;
      }
      this.cpm.countFreeFloat(this.activityList);
      if (this.isValidCombo(this.activityList)) {
        this.saveMinState(this.activityList);
      }
    });
  }

  private isValidCombo(activityList: Activity[]) {
    activityList.forEach(a => {
      if ( a.freeFloat < 0 ) {
        return false;
      }
    });
    return true;
  }
}
