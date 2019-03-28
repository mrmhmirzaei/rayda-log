import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  activePassword(){
    document.querySelector('div.inputs').classList.add('full');
    (<HTMLInputElement>document.querySelector('input[type="password"]')).focus();
  }

  submit(){
    (<HTMLButtonElement>document.getElementById('submit')).disabled = true;
  }
}
