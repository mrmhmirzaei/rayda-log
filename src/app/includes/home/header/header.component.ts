import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user:Object = {
    firstname: 'نام',
    lastname: 'نام خانوادگی',
    picture: null
  };
  
  public online:Boolean = false;
  public info:Boolean = false;
  constructor() { }

  ngOnInit() {
    this.OnlineEvent();
  }

  OnlineEvent(){
    window.onload = ()=>{
      if (navigator.onLine) {
        this.online = true;
      } else {
        this.online = false;
      }
    }

    window.ononline = ()=> this.online = true;
    window.onoffline = ()=> this.online = false;
  }
}
