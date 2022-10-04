import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {IvyCarouselModule} from 'angular-responsive-carousel2';
import { HeaderComponent } from './common_components/header/header.component';
import { FooterComponent } from './common_components/footer/footer.component';
import { LoginComponent } from './auth_components/login/login.component';
import { SignupComponent } from './auth_components/signup/signup.component';
import { ForgotPasswordComponent } from './auth_components/forgot-password/forgot-password.component';
import { HomeComponent } from './main_components/home/home.component';
import { ContactUsComponent } from './main_components/contact-us/contact-us.component';
import { AboutUsComponent } from './main_components/about-us/about-us.component';
import { PrivacyPolicyComponent } from './main_components/privacy-policy/privacy-policy.component';
import { ProductViewComponent } from './main_components/product-view/product-view.component';
import { CheckoutComponent } from './main_components/checkout/checkout.component';
import { ShopingCartComponent } from './main_components/shoping-cart/shoping-cart.component';
import { SearchComponent } from './main_components/search/search.component';
import { AlertDialogComponent } from './shared/components/alert-dialog/alert-dialog.component';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import { LoadingScreenDialogComponent } from './shared/components/loading-screen-dialog/loading-screen-dialog.component';
import { AngularMaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './main_components/order-details/order-details.component';
import { ViewAllComponent } from './main_components/view-all/view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    ProductViewComponent,
    CheckoutComponent,
    ShopingCartComponent,
    SearchComponent,
    AlertDialogComponent,
    ConfirmationDialogComponent,
    LoadingScreenDialogComponent,
    OrderDetailsComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
