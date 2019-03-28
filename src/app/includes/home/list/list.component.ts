import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() onChange = new EventEmitter();
  public items: Object[] = [
    {
      name: 'نام برنامه',
      description: 'توضیحات برنامه',
      logs: 0
    },
    {
      name: 'نام برنامه',
      description: 'توضیحات برنامه',
      logs: 0
    },
  ]
  constructor() { }
  ngOnInit() {
  }

  selectApp(event){
    if(window.innerWidth > 850){
      let width = getComputedStyle(document.documentElement).getPropertyValue('--appbar_width');
      if(width != '350px'){
        document.documentElement.style.setProperty('--appbar_width', '350px');
      }
    } else {
      document.querySelector('app-bar').classList.remove('toggle')
    }
    let self = event.currentTarget;
    if(document.querySelector('div.item.focus')){
      document.querySelector('div.item.focus').classList.remove('focus');
    }
    self.classList.add('focus');    
    this.onChange.emit(true);
  }
}
