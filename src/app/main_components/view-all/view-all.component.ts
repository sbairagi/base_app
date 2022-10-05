import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit, AfterViewInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    window.scroll(0,0)  // page scroll top initialy
    
  }

  productdetail(){
    this.Router.navigate(["/productdetail/"])
  }

}
