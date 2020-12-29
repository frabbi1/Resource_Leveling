import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";
import {ChartOptions} from "../cpm-graph/cpm-graph.component";
import {DataService} from "../../services/data.service";
import {ResourceService} from "../../services/resource.service";

@Component({
  selector: 'app-burgess-diagram',
  templateUrl: './burgess-diagram.component.html',
  styleUrls: ['./burgess-diagram.component.css']
})
export class BurgessDiagramComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public projectCompletionTime = 0;
  private resTable;

  constructor(private dataService: DataService, private rService: ResourceService) { }

  ngOnInit(): void {
    this.projectCompletionTime = this.dataService.getProjectCompletionTime();
    this.resTable = this.rService.getResourceTable(this.dataService.getBurgessData());
    this.initChart();
  }
  public getData() {
    const temp = this.dataService.getBurgessData();
    temp.sort((a, b) => {
      return a.earlyFinish - b.earlyFinish;
    });
    temp.sort((a, b) => {
      return a.totalFloat - b.totalFloat;
    });
    const data = [];
    temp.forEach(element => {
      const datum = {
        x: element.code,
        y: [element.earlyStart, element.earlyFinish]
      };
      data.push(datum);
    });
    return data;
  }

  private initChart() {
    this.chartOptions = {
      series: [
        {
          name: 'Activity Timestamp',
          color: '#1e00ff',
          data: this.getData()
        }
      ],
      chart: {
        height: 600,
        type: 'rangeBar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%'
        }
      },
      xAxis: {
        title: {
          text: 'Time (Days)'
        },
        min: 0, max: this.projectCompletionTime + 2, tickAmount: this.projectCompletionTime + 2,
        axisBorder: {
          color: '#000000'
        },
        axisTicks: {
          color: '#000000',
        },
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Activity'
        },
        axisBorder: {
          color: '#000000'
        },
        axisTicks: {
          color: '#6a2e2e',
          width: 10
        }
      }
    };
  }

  public getDailyR() {
    return this.resTable.dailyR;
  }
  public getDailyRsqr() {
    return this.resTable.dailyRsqr;
  }
  public getSumR() {
    return this.resTable.sumR;
  }
  public getSumRsqr() {
    return this.resTable.sumRsqr;
  }

}
