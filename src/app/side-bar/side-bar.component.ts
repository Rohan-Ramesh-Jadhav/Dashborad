import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
// image urls
  dashboardImg: string = '../assets/dashboard-small.png';
  layoutImg: string = '../assets/layout-small.png';
  pagesImg: string = '../assets/pages-small.png';
  areaImg: string = '../assets/chart-gray-small.png';
  tablesImg: string = '../assets/table-gray-small.png';
  arrowRight: string= '../assets/small-arrow-right.png';
}
