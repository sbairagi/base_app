import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth_components/login/login.component';
import { CheckoutComponent } from './main_components/checkout/checkout.component';
import { HomeComponent } from './main_components/home/home.component';
import { OrderDetailsComponent } from './main_components/order-details/order-details.component';
import { ProductViewComponent } from './main_components/product-view/product-view.component';
import { SearchComponent } from './main_components/search/search.component';
import { ShopingCartComponent } from './main_components/shoping-cart/shoping-cart.component';
import { UserProfileComponent } from './main_components/user-profile/user-profile.component';
import { ViewAllComponent } from './main_components/view-all/view-all.component';

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
  {
    path: 'viewall',
    component: ViewAllComponent,
  },
  {
    path: 'productdetail',
    component: ProductViewComponent,
  },
  {
    path: 'userprofile',
    component: UserProfileComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
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
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
