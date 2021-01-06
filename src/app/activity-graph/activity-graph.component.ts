import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../services/data.service";
import {ResourceService} from "../services/resource.service";
import {Router} from "@angular/router";
import {MinimizedService} from "../services/minimized.service";

@Component({
  selector: 'app-activity-graph',
  templateUrl: './activity-graph.component.html',
  styleUrls: ['./activity-graph.component.css']
})
export class ActivityGraphComponent implements OnInit {

  constructor( private router: Router, private miniService: MinimizedService, private ds: DataService) {
  }
  ngOnInit(): void {}
  gotoCPM() {
    this.router.navigate(['activity-graph/cpm']).then();
  }
  gotoBurgess() {
    this.router.navigate(['activity-graph/burgess']).then();
  }
  gotoMinimized() {
    this.ds.setMinimizedData(this.miniService.processMinimized());
    this.router.navigate(['activity-graph/minimized']).then();
  }

  showTable() {
    this.router.navigate(['activity-graph/show-table']).then();
  }

  gotoBurgessV2() {
    this.router.navigate(['activity-graph/burgess-v2']).then();
  }
}
