import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-one-customer',
  templateUrl: './get-one-customer.component.html',
  styleUrls: ['./get-one-customer.component.css']
})
export class GetOneCustomerComponent implements OnInit {
  public customer: customer;
  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCustomersAsyc().subscribe(customers=>{
      const id=this.activatedRoute.snapshot.params.id;
      this.customer=customers.find(cust=>cust.id==id);
    }, err=>{
      alert("Error " + err);
    });
  }

}
