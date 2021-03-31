import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { Startup } from '../model/startup.model';
import { User } from '../model/user.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.userType = localStorage.getItem("edit");
    if (this.userType == 'startup') {
      this.startup = JSON.parse(localStorage.getItem("editStartup"));
      this.service.getUser(this.startup.username).subscribe((user: User) => {
        this.startupPassword = user.password;
        this.startupUsername = user.username;
      });
    }
    else if (this.userType == 'investor') {
      this.investor = JSON.parse(localStorage.getItem("editInvestor"));
      this.service.getUser(this.investor.username).subscribe((user: User) => {
        this.investorPassword = user.password;
        this.investorUsername = user.username;
      });
    }
    else {
      this.admin = JSON.parse(localStorage.getItem("editAdmin"));
      this.adminUsername = this.admin.username;
    }
  }

  userType: string;
  startup: Startup;
  investor: Investor;
  admin: User;
  startupPassword: string;
  investorPassword: string;
  startupUsername: string;
  investorUsername: string;
  adminUsername: string;
  user: User;
  
  updateStartup() {
    this.service.updateStartup(this.startupUsername, this.startup.username, this.startupPassword, this.startup.fullName,
      this.startup.taxId, this.startup.address, this.startup.municipality, this.startup.phoneNumber, this.startup.email, 
      this.startup.website, this.startup.businessType, this.startup.projectProposal, this.startup.amount, this.startup.ipStatus, 
      this.startup.patentInfo).subscribe(() => {
        this.router.navigate(["profile"]);
    });
  }

  updateInvestor() {
    this.service.updateInvestor(this.investorUsername, this.investor.username, this.investorPassword, this.investor.fullName, 
      this.investor.taxId, this.investor.address, this.investor.municipality, this.investor.phoneNumber, 
      this.investor.email, this.investor.website, this.investor.businessType).subscribe(() => {
        this.router.navigate(["profile"]);   
    });
  }

  updateAdmin() {
    this.service.updateUser(this.adminUsername, this.admin.username, this.admin.password).subscribe(() => {
      this.router.navigate(['profile']);
    })
  }

}
