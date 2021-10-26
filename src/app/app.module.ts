import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CompanyComponent } from './components/company/company.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { GetAllCompaniesComponent } from './components/admin/get-all-companies/get-all-companies.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { GetAllCustomersComponent } from './components/admin/get-all-customers/get-all-customers.component';
import { GetOneCustomerComponent } from './components/admin/get-one-customer/get-one-customer.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DeleteCustomerComponent } from './components/admin/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { GetACustomerComponent } from './components/admin/get-a-customer/get-a-customer.component';
import { GetOneCompanyComponent } from './components/admin/get-one-company/get-one-company.component';
//import { LoginComponent } from './components/login/login.component';
//import { routes } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ProductsComponent,
    CompanyComponent,
    AboutComponent,
    AdminComponent,
    CustomerComponent,
    GetAllCompaniesComponent,
    ThumbnailComponent,
    GetAllCustomersComponent,
    GetOneCustomerComponent,
    AddCustomerComponent,
    Page404Component,
    DeleteCustomerComponent,
    UpdateCustomerComponent,
    GetACustomerComponent,
    GetOneCompanyComponent,
    //LoginComponent,
    //@NgModule[FormGroup, FormControl, Validators]
  ],
  
  imports: [
    BrowserModule,FormsModule,//FormGroup, FormControl, Validators,
    /*RouterModule,*/ AppRoutingModule, HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { 
  
}
