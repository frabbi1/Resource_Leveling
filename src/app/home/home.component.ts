import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Activity, NullActivity} from '../models';
import {FormArray, FormBuilder} from "@angular/forms";
import {DataService} from "../services/data.service";
import {CpmService} from "../services/cpm.service";
import {activityTable} from "../../test-data/activity-table";
import {BurgessService} from "../services/burgess.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isActivityNumberGiven = false;
  activityNumber = 0;
  activities: Activity[];
  formActivities;
  formItems: FormArray;

  constructor(private router: Router, private fb: FormBuilder, private cpm: CpmService, private ds: DataService, private bg: BurgessService) { }

  ngOnInit(): void {
  }

  onClickOk() {
    if (this.activityNumber > 0) {
      this.isActivityNumberGiven = true;
      this.activities = this.createActivities(this.activityNumber);
      this.createForm(this.activityNumber);
    } else {
      this.isActivityNumberGiven = false;
    }
  }

  onProcess() {
    const activityList: Activity[] = this.formActivities.value.activities;
    // const activityList: Activity[] = activityTable;
    this.setSuccessors(activityList);
    const processedActivities: Activity[] = this.cpm.getCpmTable(activityList);
    this.ds.setCPM(processedActivities);
    const burgessData = this.bg.processBurgess(processedActivities);
    this.ds.setBurgessData(burgessData);
    this.router.navigate(['activity-graph/cpm']).then();
  }

  private createActivities(numOfActivities) {
    const activityList: Activity[] = [];
    for (let i = 0; i < numOfActivities; i++) {
      const tempActivity: Activity = {
        code: 'A' + (i + 1).toString(),
        predecessors: [],
        successors: [],
        resources: 0,
        totalFloat: 0,
        duration: 0,
        lateFinish: Number.MAX_SAFE_INTEGER,
        lateStart: 0,
        earlyFinish: 0,
        earlyStart: 0,
        description: undefined,
        isCritical: false,
        freeFloat: 0
      };
      activityList.push(tempActivity);
    }
    return activityList;
  }

  getOtherActivities(selfActivity: Activity) {
    const tempActivities = this.formActivities.get('activities').value;
    const x: Activity[] =  tempActivities.filter(a => a.code !== selfActivity.code);
    x.unshift(NullActivity);
    return x;
  }

  private createForm(fgs) {
    this.formActivities = this.fb.group({
      activities: this.fb.array([]),
    });

    this.formItems = this.formActivities.get('activities') as FormArray;
    for (let x = 0; x < fgs; x++) {
      this.formItems.push(this.createActivityForm(x + 1));
    }
  }

  private createActivityForm(serial) {
    return this.fb.group({
      code: ['A' + serial],
      predecessors: null,
      successors: null,
      resources: [0],
      totalFloat: [0],
      duration: [0],
      lateFinish: [Number.MAX_SAFE_INTEGER],
      lateStart: [0],
      earlyFinish: [0],
      earlyStart: [0],
      description: [undefined],
      isCritical: [false],
      freeFloat: 0
    });
  }


  private setSuccessors(activityList: Activity[]) {
    activityList.forEach(activity => {
      const predList = activity.predecessors;
      predList.forEach((p) => {
        if (p === 'NONE') {}
        else {
          const targetActivity = activityList.filter( a => a.code === p)[0];
          if (targetActivity !== null) {
            if ( targetActivity.successors === null ) {
              targetActivity.successors = [];
            }
            targetActivity.successors.push(activity.code);
          }
        }
      });
    });
  }
}
