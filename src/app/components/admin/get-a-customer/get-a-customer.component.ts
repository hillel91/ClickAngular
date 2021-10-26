import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer';
import { RouterLink } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Button } from 'protractor';

@Component({
  selector: 'app-get-a-customer',
  templateUrl: './get-a-customer.component.html',
  styleUrls: ['./get-a-customer.component.css'],

})
export class GetACustomerComponent implements OnInit {

  public customer: customer;
  public id:number;
  constructor(private adminService: AdminService) { }

  public getCustomer(): void{
    //this.id=this.customer.id;
    //alert(id);
    this.adminService.getACustomer(this.id).subscribe(customer=>{
      alert(this.id);
      console.log(customer);
    },err =>{
      alert("error " + err.message);
    });
  }
  ngOnInit() {
   
  }

}
