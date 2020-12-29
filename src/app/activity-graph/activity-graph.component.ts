import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../services/data.service";
import {ResourceService} from "../services/resource.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activity-graph',
  templateUrl: './activity-graph.component.html',
  styleUrls: ['./activity-graph.component.css']
})
export class ActivityGraphComponent implements OnInit {

  constructor( private router: Router) {
  }
  ngOnInit(): void {}
  gotoCPM() {
    this.router.navigate(['activity-graph/cpm']).then();
  }
  gotoBurgess() {
    this.router.navigate(['activity-graph/burgess']).then();
  }
  gotoMinimized() {
  }
}
