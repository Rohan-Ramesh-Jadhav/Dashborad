import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent{
// image links
  tableIcon = '../assets/data-grid-small.png';

// table variables
  showRow = true;
  rowPerPage = 5;
  tmpRowCount = this.rowPerPage;

//table matrix [array] data
  tableDataArr = [
    ['Tiger Nixon','System Architect','Edinburgh','61','2011/04/25','$320,800'],
    ['Garrett Winters','Accountant','Tokyo','63','2011/07/25','$170,750'],
    ['Ashton Cox','Junior Technical Author','San Francisco','66','2009/01/12','$86,000'],
    ['Cedric Kelly','Senior Javascript Developer','Edinburgh','22','2012/03/29','$433,060'],
    ['Airi Satou','Accountant','Edinburgh','61','2011/04/25','$320,800'],
    ['Tiger Nixon','System Architect','Edinburgh','61','2011/04/25','$320,800'],
    ['Garrett Winters','Accountant','Tokyo','63','2011/07/25','$170,750'],
    ['Ashton Cox','Junior Technical Author','San Francisco','66','2009/01/12','$86,000'],
    ['Cedric Kelly','Senior Javascript Developer','Edinburgh','22','2012/03/29','$433,060'],
    ['Airi Satou','Accountant','Edinburgh','61','2011/04/25','$320,800'],
    ['Tiger Nixon','System Architect','Edinburgh','61','2011/04/25','$320,800'],
    ['Garrett Winters','Accountant','Tokyo','63','2011/07/25','$170,750'],
    ['Ashton Cox','Junior Technical Author','San Francisco','66','2009/01/12','$86,000'],
    ['Cedric Kelly','Senior Javascript Developer','Edinburgh','22','2012/03/29','$433,060'],
    ['Airi Satou','Accountant','Edinburgh','61','2011/04/25','$320,800'],
    ['Tiger Nixon','System Architect','Edinburgh','61','2011/04/25','$320,800'],
    ['Garrett Winters','Accountant','Tokyo','63','2011/07/25','$170,750'],
    ['Ashton Cox','Junior Technical Author','San Francisco','66','2009/01/12','$86,000'],
    ['Cedric Kelly','Senior Javascript Developer','Edinburgh','22','2012/03/29','$433,060'],
    ['Airi Satou','Accountant','Edinburgh','61','2011/04/25','$320,800']
  ];

// functions
  checkCount(index: number){
    if(this.rowPerPage==index)
    {
      this.showRow = !this.showRow;
      return this.showRow;
    }
    else
    {
      return this.showRow;
    }
  }
  
  changeEntryPerPage(e : any){
    this.rowPerPage = parseInt((e.target as HTMLSelectElement).value);
  }
}
