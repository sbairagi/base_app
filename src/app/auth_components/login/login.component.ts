import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLoginForm:string = 'show active';
  showSignupForm:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  gotoSignup(){
    this.showLoginForm = '';
    this.showSignupForm = 'show active';
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  gotoLogin(){
    this.showLoginForm = 'show active';
    this.showSignupForm = '';
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

}
