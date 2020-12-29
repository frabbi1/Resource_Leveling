import {Component, OnInit, ViewChild} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexPlotOptions, ApexXAxis, ApexYAxis, ChartComponent} from 'ng-apexcharts';
import {activityTable} from '../../test-data/activity-table';
import {DataService} from "../services/data.service";
import {ResourceService} from "../services/resource.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xAxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  yAxis: ApexYAxis
};
@Component({
  selector: 'app-activity-graph',
  templateUrl: './activity-graph.component.html',
  styleUrls: ['./activity-graph.component.css']
})
export class ActivityGraphComponent implements OnInit {

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public projectCompletionTime = 0;
  private resTable;
  constructor( private dataService: DataService, private rService: ResourceService) {
    this.chartOptions = {
      series: [
        {
          name: 'Activity Timestamp',
          color: '#1e00ff',
          data: this.getData()
        },
        {
          name: 'Slack Time',
          color: '#87afff',
          data: this.getSlackTimeData()
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
        min: 0, max: 20, tickAmount: 20,
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

  public getData() {
    const temp = this.dataService.getCPM();
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

  private getSlackTimeData() {
    const temp = this.dataService.getCPM();
    temp.sort((a, b) => {
      return a.totalFloat - b.totalFloat;
    });
    const data = [];
    temp.forEach(element => {
      const datum = {
        x: element.code,
        y: [element.earlyFinish, element.earlyFinish + element.totalFloat]
      };
      data.push(datum);
    });
    return data;
  }

  ngOnInit(): void {
    this.projectCompletionTime = this.dataService.getProjectCompletionTime();
    this.resTable = this.rService.getResourceTable(this.dataService.getCPM());
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
