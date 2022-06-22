import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// flag variables
  sideBarVisible: boolean = false;

// icons and image urls
  searchIcon = '../assets/small-search.png';
  userIcon = '../assets/small-user.png';
  rightArrow = '../assets/small-arrow-right.png';  
// user details  
  userName: string = 'Start Bootstrap';
  initVar: boolean = false;

  // functions 
  diplaySideBar(){
    this.initVar = true;
    this.sideBarVisible = !this.sideBarVisible;
  }

  sideBarClass(){
    if(this.sideBarVisible==true)
    {
      return 'width:18%; animation-name: slider-fade-in; animation-timing-function: linear; animation-duration: 0.5s;';
    }
    else
    {
      if(this.initVar==true)
      {
        console.log('init');
        return 'animation-name: slider-fade-out; animation-timing-function: linear; animation-duration: 0.5s;';
      }
      else
      {
        return '';
      }
    }
  }
}