import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleOn = false

  constructor() { }

  ngOnInit(): void {
  }

  // toggle(){
  //   this.hide = this.hide == 'true'? 'false': 'true';
  //   console.log(this.hide)
  // }

}
