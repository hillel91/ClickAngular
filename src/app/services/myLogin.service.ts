import { Injectable } from '@angular/core';
import { company } from '../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { customer } from '../models/customer';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class myLoginService {

  constructor(private httpClient: HttpClient) {
    console.log("From CTOR of myLogin.service.ts");
   }
   public loginAdmin(email: string, password:string): Observable<Message> {
    return this.httpClient.get<Message>("http://localhost:8080/ClickCouponsSystem/rest/login-manager/login?email=" + email + "&password=" + password + "&clientType=Administrator");
  }

  public loginCompany(email: string, password: string): Observable<Message> {
    return this.httpClient.get<Message>("http://localhost:8080/ClickCouponsSystem/rest/login-manager/login?email=" + email + "&password=" + password + "&clientType=Company");
  }

  public loginCustomer(email: string, password: string): Observable<Message> {
    return this.httpClient.get<Message>("http://localhost:8080/ClickCouponsSystem/rest/login-manager/login?email=" + email + "&password=" + password + "&clientType=Customer");
  }

  public logout(): Observable<Message> {
    return this.httpClient.get<Message> ("http://localhost:8080/ClickCouponsSystem/rest/login-manager/logout");
  }

  
}
