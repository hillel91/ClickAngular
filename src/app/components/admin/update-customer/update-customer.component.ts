import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  
  public customer:customer;
  public email: EmailValidator
  public password: string

  constructor(private adminService: AdminService) { }

  public updateCustomer(): void{
    this.adminService.updateCustomer(this.customer).subscribe(custom=>{
      this.customer=this.customer;
    },err=>{
      alert("Error: " +err);
      console.log(err);
    });
  }
  
  ngOnInit() {
  }

}
