import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth_components/login/login.component';
import { CheckoutComponent } from './main_components/checkout/checkout.component';
import { HomeComponent } from './main_components/home/home.component';
import { OrderDetailsComponent } from './main_components/order-details/order-details.component';
import { ShopingCartComponent } from './main_components/shoping-cart/shoping-cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
    
  {
    path: 'home',
    component: HomeComponent,
  }, 

  {
    path: 'cart',
    component: ShopingCartComponent,
  }, 
  {
    path: 'order',
    component: OrderDetailsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'seller',
  //   component: SellersComponent,
  //   children: [
  //     {
  //       path: '',
  //       canActivate: [AuthGuardService],
  //       loadChildren: () => import('./sellers/sellers.module').then( m => m.SellersModule)
  //       // loadChildren: './sellers/sellers.module#SellersModule'
  //     }
  //   ]
  // },
  {
    path: '**',
    redirectTo: '',
    // canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
