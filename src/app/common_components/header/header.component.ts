import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleOn = false

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  gotoHome(){
    this.Router.navigate(['/home/'])
  }

  gotoCart(){
    this.Router.navigate(['/cart/']);
  }

  gotoSearch(){
    this.Router.navigate(['/search/']);
  }

  gotoProfile(){
    this.Router.navigate(['/userprofile/']);
  }

  gotoLogin(){
    this.Router.navigate(['/login/']);
  }

  // toggle(){
  //   this.hide = this.hide == 'true'? 'false': 'true';
  //   console.log(this.hide)
  // }

}
