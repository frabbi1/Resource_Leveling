import { Component, OnInit } from '@angular/core';
import {Activity} from "../../models";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-allinfo-table',
  templateUrl: './allinfo-table.component.html',
  styleUrls: ['./allinfo-table.component.css']
})
export class AllinfoTableComponent implements OnInit {
  activityList: Activity[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.activityList = this.dataService.getCPM();
  }
  getList() {
    return this.activityList;
  }

}
