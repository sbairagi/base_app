import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  gotoCheckout(){
    this.Router.navigate(['/checkout/'])
  }

}
