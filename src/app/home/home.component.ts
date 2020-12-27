import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Activity} from '../models';
import {FormArray, FormBuilder} from "@angular/forms";

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

  constructor(private router: Router, private fb: FormBuilder) { }

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
    console.log(this.formActivities);
    // this.router.navigate(['activity-graph'], {}).then();
  }

  private createActivities(numOfActivities) {
    const activityList: Activity[] = [];
    for (let i = 0; i < numOfActivities; i++) {
      const tempActivity: Activity = {
        code: 'A' + (i + 1).toString(),
        predecessors: null,
        resources: 0,
        totalFloat: 0,
        duration: 0,
        lateFinish: 0,
        lateStart: 0,
        earlyFinish: 0,
        earlyStart: 0,
        description: undefined,
        isCritical: false
      };
      activityList.push(tempActivity);
    }
    return activityList;
  }

  getOtherActivities(selfActivity: Activity) {
    return this.activities.filter(a => a.code !== selfActivity.code);
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
      predecessors: [null],
      resources: [0],
      totalFloat: [0],
      duration: [0],
      lateFinish: [0],
      lateStart: [0],
      earlyFinish: [0],
      earlyStart: [0],
      description: [undefined],
      isCritical: [false]
    });
  }
}
