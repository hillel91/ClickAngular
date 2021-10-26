import { Component, OnInit } from '@angular/core';
import { company } from 'src/app/models/company';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-one-company',
  templateUrl: './get-one-company.component.html',
  styleUrls: ['./get-one-company.component.css']
})
export class GetOneCompanyComponent implements OnInit {
  public company: company;
  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCompaniesAsyc().subscribe(company=>{
      const id=this.activatedRoute.snapshot.params.id;
      this.company=company.find(company=>company.id==id);
    }, err=>{
      alert("Error " + err);
    });
  }

}
