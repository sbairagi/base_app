import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back(); // Navigates back in the platform's history
}

}
