import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/admin/products/products.component';
import { CompanyComponent } from '../components/company/company.component';
import { AboutComponent } from '../components/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';
import { GetAllCompaniesComponent } from '../components/admin/get-all-companies/get-all-companies.component';
import { GetAllCustomersComponent } from '../components/admin/get-all-customers/get-all-customers.component';
import { GetOneCustomerComponent } from '../components/admin/get-one-customer/get-one-customer.component';
import { AddCustomerComponent } from '../components/admin/add-customer/add-customer.component';
import { Page404Component } from '../components/page404/page404.component';
import { DeleteCustomerComponent } from '../components/admin/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from '../components/admin/update-customer/update-customer.component';
import { GetOneCompanyComponent } from '../components/admin/get-one-company/get-one-company.component';
import { GetACustomerComponent } from '../components/admin/get-a-customer/get-a-customer.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "company", component: CompanyComponent},
  {path: "admin", component: AdminComponent},
  {path: "customer", component: AdminComponent},
  {path: "products", component: ProductsComponent},
  { path: 'admin/products', component: ProductsComponent },
  { path: 'admin/get-All-Companies', component: GetAllCompaniesComponent },
  { path: 'admin/get-All-Customers', component: GetAllCustomersComponent },
  { path: 'admin/get-One-Company/:id', component: GetOneCompanyComponent },
  { path: 'admin/get-One-Customer/:id', component: GetOneCustomerComponent },
  { path: 'admin/get-A-Customer', component: GetACustomerComponent },
  { path: 'admin/add-customer', component: AddCustomerComponent },
  { path: 'admin/update-customer', component: UpdateCustomerComponent },
  { path: 'admin/delete-customer', component: DeleteCustomerComponent },
  { path: '',redirectTo:"/home", pathMatch:"full" },
  { path: '**', component: Page404Component },

  
];

@NgModule({
  declarations: [],
  imports: [/*CommonModule,*/ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
