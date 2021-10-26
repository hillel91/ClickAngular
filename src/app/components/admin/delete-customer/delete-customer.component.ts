import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  public id: number;

  constructor(private adminService: AdminService) { }

  public deleteCustomer(): void{
    this.adminService.deleteCustomer(this.id).subscribe(m=>{
      this.id=this.id;
    },err=>{
      alert("Error " + err)
      console.log(err);
    });
  }
  ngOnInit() {
    
  }
}
