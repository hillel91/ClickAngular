import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

  public customers: customer[]
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCustomersAsyc().subscribe(customers=>{
      this.customers=customers;
      console.log(customers);
    },err =>{
      alert("error " + err.message);
    });
  }

}
