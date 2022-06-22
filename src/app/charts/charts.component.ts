import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  dataGridIcon = '../assets/data-grid-small.png';
  barChartIcon = '../assets/bar-chart-icon-small.png';
  areaChartIcon = '../assets/area-chart-icon-small.png';

//chart options
  chartOptionArea : EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mar 1','Mar 3','Mar 5','Mar 7','Mar 9','Mar 11','Mar 13'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [1000,3000,3500,1700,1700,2700,3200,3400],
        type: 'line',
      }
    ],
  }

  chartOptionBar : EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mar 1','Mar 3','Mar 5','Mar 7','Mar 9','Mar 11','Mar 13'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [1000,3000,3500,1700,1700,2700,3200],
        type: 'bar',
      }
    ],
  }
}
