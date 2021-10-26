import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customer=new customer();

  constructor(private adminService:AdminService) { }

  public addCustomer():void{
    console.log(`
    customer first name: ${this.customer.firstName}
    customer last name: ${this.customer.lastName}
    customer email: ${this.customer.email}
    customer password: ${this.customer.password}
    `);

    this.adminService.addCustomer(this.customer).subscribe(custom=>{
      //alert("Customer with id " + custom.id + " added successfuly");
      alert(JSON.stringify(this.customer)+" added");
    },err=>{
      alert("Error " + err);
    });
  }

  ngOnInit() {
  }

}
