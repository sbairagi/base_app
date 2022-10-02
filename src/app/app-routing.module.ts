import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main_components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/',
    pathMatch: 'full',
  },
    
  {
    path: 'home/',
    component: HomeComponent,
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
