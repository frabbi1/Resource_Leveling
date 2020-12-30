import { Component, OnInit } from '@angular/core';
import {Activity} from "../models";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {CpmService} from "../services/cpm.service";
import {DataService} from "../services/data.service";
import {BurgessService} from "../services/burgess.service";
import {activityTable} from "../../test-data/activity-table";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private router: Router, private cpm: CpmService, private ds: DataService, private bg: BurgessService) { }

  ngOnInit(): void {
    const activityList: Activity[] = activityTable;
    this.setSuccessors(activityList);
    const processedActivities: Activity[] = this.cpm.getCpmTable(activityList);
    this.ds.setCPM(processedActivities);
    const burgessData = this.bg.processBurgess(processedActivities);
    this.ds.setBurgessData(burgessData);
    this.router.navigate(['activity-graph/cpm']).then();
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
