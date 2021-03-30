import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { Startup } from '../model/startup.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.userType = localStorage.getItem("user");
    if (this.userType == 'startup') {
      this.startup = JSON.parse(localStorage.getItem("startup"));
    }
    else if (this.userType == 'investor') {
      this.investor = JSON.parse(localStorage.getItem("investor"));
    }
  }

  userType: string;
  startup: Startup;
  investor: Investor;
  msgStartup: string;

  updateStartup() {
    this.service.updateStartup(this.startup.username, this.startup.fullName, this.startup.establishmentDate, this.startup.registrationNumber, 
      this.startup.taxId, this.startup.firstName, this.startup.middleName, this.startup.lastName, this.startup.address,
      this.startup.municipality, this.startup.city, this.startup.country, this.startup.phoneNumber, this.startup.email, 
      this.startup.website, this.startup.socialNetworks, this.startup.businessType, this.startup.employeeNumber, this.startup.phase, 
      this.startup.income1, this.startup.income2, this.startup.income3, this.startup.profit1, this.startup.profit2, this.startup.profit3, 
      this.startup.projectProposal, this.startup.amount, this.startup.ipStatus, this.startup.patentInfo).subscribe(() => {
        this.service.getStartup(this.startup.username).subscribe((stup: Startup) => {
          localStorage.setItem("startup", JSON.stringify(stup));
          this.startup = stup;
        })    
    });
  }

  updateInvestor() {
    this.service.updateInvestor(this.investor.username, this.investor.fullName, this.investor.establishmentDate, this.investor.registrationNumber, 
      this.investor.taxId, this.investor.firstName, this.investor.middleName, this.investor.lastName, this.investor.address,
      this.investor.municipality, this.investor.city, this.investor.country, this.investor.phoneNumber, this.investor.email, 
      this.investor.website, this.investor.socialNetworks, this.investor.businessType, this.investor.employeeNumber,
      this.investor.income1, this.investor.income2, this.investor.income3, this.investor.profit1, this.investor.profit2, this.investor.profit3, 
      this.investor.investorType, this.investor.servicesType, this.investor.investFrom, this.investor.investTo).subscribe(() => {
        this.service.getInvestor(this.investor.username).subscribe((inv: Investor) => {
          localStorage.setItem("investor", JSON.stringify(inv));
          this.investor = inv;
        })        
    });
  }

}
