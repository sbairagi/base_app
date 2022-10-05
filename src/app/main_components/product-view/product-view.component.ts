import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, AfterViewInit{

  constructor(private location: Location, private Router: Router) {

   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
   }

  goBack() {
    this.location.back(); // Navigates back in the platform's history
  }

  gotoProductDetail(){
    this.Router.navigate(['/productdetail'])
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

}
