import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { company } from 'src/app/models/company';
import { CompileNgModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  showImage(imageSource: string){
    alert("user clicked on image " + imageSource);
  }

  public companies: company[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    //this.companies=this.adminService.getCompanies();

    //הטכניקה השלישית
    //this.adminService.getAllCompanies().subscribe(companies=>{
      //this.companies=companies;
    //},err =>{
      //alert("error " + err.message);
    //});

    this.adminService.getAllCompaniesAsyc().subscribe(companies=>{
      this.companies=companies;
      console.log(companies);
    },err =>{
      alert("error " + err.message);
    });
  }

}
