import { Injectable } from '@angular/core';
import { company } from '../models/company';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) {
    console.log("From CTOR of company.service.ts");
   }

  public getCompanies(): company[]{
    const arr: company[]=[];
    arr.push(new company(3001, "cheshvan3001", "cheshvan3001@com", "cheshvan3001"));
    arr.push(new company(3002, "cheshvan3002", "cheshvan3002@com", "cheshvan3002"));
    arr.push(new company(3003, "cheshvan3003", "cheshvan3003@com", "cheshvan3003"));
    return arr;
  }

  public getAllCompanies(): Observable<company[]>{
    return Observable.create(observer=>{
      setTimeout(function(){
        try{
          const arr: company[]=[];
          arr.push(new company(3001, "cheshvan3001", "cheshvan3001@com", "cheshvan3001"));
          arr.push(new company(3002, "cheshvan3002", "cheshvan3002@com", "cheshvan3002"));
          arr.push(new company(3003, "cheshvan3003", "cheshvan3003@com", "cheshvan3003"));
          observer.next(arr);
        }catch(err){
          observer.error(err);
        }
      },10);
    });
  }

  public getAllCompaniesAsyc(): Observable<company[]>{
    return this.httpClient.get<company[]>("http://localhost:8080/ClickCouponsSystem/rest/sec/adminService/get-All-Companies", {withCredentials: true });
  console.log(company);
  }
   
  public getAllCustomersAsyc(): Observable<customer[]>{
    return this.httpClient.get<customer[]>("http://localhost:8080/ClickCouponsSystem/rest/sec/adminService/get-all-customers", {withCredentials: true });
  console.log(customer);
  }

  public getACustomers(): Observable<customer[]>{
    return this.httpClient.get<customer[]>("http://localhost:8080/ClickCouponsSystem/rest/sec/adminService/get-one-customer", {withCredentials: true });
  console.log(customer);
  }

  public addCustomer(customer: customer): Observable<customer>{
    //return this.httpClient.post<customer>("http://cors-anywhere.herokuapp.com/http://localhost:8080/ClickCouponsSystem/rest/sec/adminService/add-customer",customer);
    return this.httpClient.post<customer>("http://localhost:8080/ClickCouponsSystem/rest/sec/adminService/add-customer",customer, {withCredentials: true });
  }

  public deleteCustomer(id: number): Observable<number>{
    const url=`${'http://localhost:8080/ClickCouponsSystem/rest/sec/adminService/delete-customer'}?id=${id}`;
    return this.httpClient.delete<number>(url, {withCredentials: true });

    //return this.httpClient.delete(url,{withCredentials:true});
    //return this.http.delete(url,{withCredentials:true});
    //const url = `${'http://localhost:8080/CouponSystemManagment/rest/sec/Admin-service/delete-company'}?companyId=${id}`;
//    return this.httpClient.delete<number>("http://localhost:8080/ClickCouponsSystem/rest/sec/adminService/delete-customer/" + id, {withCredentials: true });
  }

  public updateCustomer(customer:customer): Observable<customer>{
    return this.httpClient.put<customer>("http://localhost:8080/ClickCouponsSystem/rest/sec/adminService/update-customer", customer, {withCredentials: true });
  }

  
}
