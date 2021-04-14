import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { Startup } from '../model/startup.model';
import { User } from '../model/user.model';
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
      this.startupUsername = this.startup.username;
      this.user = JSON.parse(localStorage.getItem("userObject"));
      this.startupPassword = this.user.password;
    }
    else if (this.userType == 'investor') {
      this.investor = JSON.parse(localStorage.getItem("investor"));
      this.investorUsername = this.investor.username;
      this.user = JSON.parse(localStorage.getItem("userObject"));
      this.investorPassword = this.user.password;
    }
    this.getAllStartups();
    this.getAllInvestors();
    this.getAllAdmins();
  }

  userType: string;
  user: User;
  startup: Startup;
  investor: Investor;
  investorUsername: string;
  startupUsername: string;
  investorPassword: string;
  startupPassword: string;
  allStartups: Startup[];
  allInvestors: Investor[];
  allAdmins: User[];

  updateStartup() {
    this.service.updateStartup(this.startupUsername, this.startup.username, this.startupPassword, this.startup.fullName,
      this.startup.taxId, this.startup.address, this.startup.municipality, this.startup.phoneNumber, this.startup.email, 
      this.startup.website, this.startup.businessType, this.startup.projectProposal, this.startup.amount, this.startup.ipStatus, 
      this.startup.patentInfo, this.startup.usernameVisibility, this.startup.fullNameVisibility, this.startup.establishmentDateVisibility, 
      this.startup.registrationNumberVisibility, this.startup.taxIdVisibility, this.startup.nameVisibility,
      this.startup.addressVisibility, this.startup.municipalityVisibility, this.startup.cityVisibility, 
      this.startup.countryVisibility, this.startup.phoneNumberVisibility, this.startup.emailVisibility, this.startup.websiteVisibility, 
      this.startup.socialNetworksVisibility, this.startup.businessTypeVisibility, this.startup.employeeNumberVisibility, this.startup.phaseVisibility, 
      this.startup.incomeVisibility, this.startup.profitVisibility, this.startup.projectProposalVisibility, this.startup.amountVisibility, 
      this.startup.ipStatusVisibility, this.startup.patentInfoVisibility).subscribe(() => {
        this.service.getStartup(this.startup.username).subscribe((stup: Startup) => {
          this.startupUsername = this.startup.username;
          this.user.password = this.startupPassword;
          localStorage.setItem("userObject", JSON.stringify(this.user));
          localStorage.setItem("startup", JSON.stringify(stup));
          this.startup = stup;
        })    
    });
  }

  updateInvestor() {
    this.service.updateInvestor(this.investorUsername, this.investor.username, this.investorPassword, this.investor.fullName, 
      this.investor.taxId, this.investor.address, this.investor.municipality, this.investor.phoneNumber, 
      this.investor.email, this.investor.website, this.investor.businessType).subscribe(() => {
        this.service.getInvestor(this.investor.username).subscribe((inv: Investor) => {
          this.investorUsername = this.investor.username;
          this.user.password = this.investorPassword;
          localStorage.setItem("userObject", JSON.stringify(this.user));
          localStorage.setItem("investor", JSON.stringify(inv));
          this.investor = inv;
        })        
    });
  }

  getAllStartups() {
    this.service.getAllStartups().subscribe((startups: Startup[]) => {
      this.allStartups = startups;
    })
  }

  getAllInvestors() {
    this.service.getAllInvestors().subscribe((investors: Investor[]) => {
      this.allInvestors = investors;
    })
  }

  getAllAdmins() {
    this.allAdmins = [];
    this.service.getAllUsers().subscribe((user: User[]) => {
      user.forEach(u => {
        if (u.type == 'admin') this.allAdmins.push(u);
      })
    })
  }

  editStartup(startup: Startup) {
    localStorage.setItem("edit", "startup");
    localStorage.setItem("editStartup", JSON.stringify(startup));
    this.router.navigate(["editUser"]);
  }

  editInvestor(investor: Investor) {
    localStorage.setItem("edit", "investor");
    localStorage.setItem("editInvestor", JSON.stringify(investor));
    this.router.navigate(["editUser"]);
  }

  editAdmin(admin: User) {
    localStorage.setItem("edit", "admin");
    localStorage.setItem("editAdmin", JSON.stringify(admin));
    this.router.navigate(["editUser"]);
  }

  addUser() {
    this.router.navigate(['addUser']);
  }

  interests() {
    localStorage.setItem("addInterests", "interests");
    this.router.navigate(['interestsAndSkills']);
  }

  skills() {
    localStorage.setItem("addInterests", "skills");
    this.router.navigate(['interestsAndSkills']);
  }

}
