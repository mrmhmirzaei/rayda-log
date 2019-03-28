import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public selected:Boolean = false;
  @Input() set onSelected(selected: Boolean){
    this.selected = selected;
    if(selected == true){
      setInterval(()=>{
        let date = new Date();
        this.logs.unshift({
          content: 'متن لاگ',
          type: this.reandomType(),
          function: 'نام تابع',
          time: {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
          }
        });
      }, 1000);
    }
  }
  public logs: Object[] = [];
  constructor() { }

  ngOnInit() {
    
  }

  selectApp(){
    if(window.innerWidth > 850){
      document.documentElement.style.setProperty('--appbar_width', '50vw');
    } else {
      document.querySelector('app-bar').classList.add('toggle')
    }
  }

  reandomType(){
    var min=0; 
    var max=4;
    var random =Math.floor(Math.random() * (+max - +min)) + +min; 
    
    if(random == 0) return 'success';
    else if(random == 1) return 'warning';
    else if(random == 2) return 'error';
    else return '';
  }
}
