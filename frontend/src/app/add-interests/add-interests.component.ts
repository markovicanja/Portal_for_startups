import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Codebook } from '../model/codebook.model';
import { Startup } from '../model/startup.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-interests',
  templateUrl: './add-interests.component.html',
  styleUrls: ['./add-interests.component.css']
})
export class AddInterestsComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.formFor = localStorage.getItem("addInterests");
    this.getCodebookCategories();
    this.startup = JSON.parse(localStorage.getItem("startup"));
  }

  formFor: string;
  codebooks: Codebook[];
  interest: string;
  skill: string;
  startup: Startup;
  
  getCodebookCategories() {
    this.codebooks = [];
    this.service.getAllCodebooks().subscribe((codebooks: Codebook[]) => {
      if (this.formFor == 'interests') {
        codebooks.forEach(codebook => {
          if (codebook.category == "Area of interest") this.codebooks.push(codebook);
        })
      }
      else {
        codebooks.forEach(codebook => {
          if (codebook.category == "Professional skills") this.codebooks.push(codebook);
        })
      }
    }); 
  }

  addInterest() {
    this.service.addStartupInterest(this.startup.username, this.interest).subscribe(() => {
      let found = false;
      this.codebooks.forEach(codebook => {
        if (codebook.data == this.interest) found = true;
      });
      if (!found) {
        let date = new Date();
        let month = ("00" + (date.getMonth() + 1)).slice(-2);
        let day = ("00" + date.getDate()).slice(-2);
        let dateFrom = (date.getFullYear()) + "-" + month + "-" + day;
        let dateTo = (date.getFullYear() + 2) + "-" + month + "-" + day;
        this.service.insertCodebook(this.interest, "Area of interest", dateFrom, dateTo).subscribe(() => {
          this.service.getStartup(this.startup.username).subscribe((startup: Startup) => {
            this.startup = startup;
            localStorage.setItem("startup", JSON.stringify(this.startup));
          });
        });
      }
      this.service.getStartup(this.startup.username).subscribe((startup: Startup) => {
        this.startup = startup;
        localStorage.setItem("startup", JSON.stringify(this.startup));
      });
    }); 
  }

  addSkill() {
    this.service.addStartupSkill(this.startup.username, this.skill).subscribe(() => {
      let found = false;
      this.codebooks.forEach(codebook => {
        if (codebook.data == this.skill) found = true;
      });
      if (!found) {
        let date = new Date();
        let month = ("00" + (date.getMonth() + 1)).slice(-2);
        let day = ("00" + date.getDate()).slice(-2);
        let dateFrom = (date.getFullYear()) + "-" + month + "-" + day;
        let dateTo = (date.getFullYear() + 2) + "-" + month + "-" + day;
        this.service.insertCodebook(this.skill, "Professional skills", dateFrom, dateTo).subscribe(() => {
          this.service.getStartup(this.startup.username).subscribe((startup: Startup) => {
            this.startup = startup;
            localStorage.setItem("startup", JSON.stringify(this.startup));
          });
        });
      }
      this.service.getStartup(this.startup.username).subscribe((startup: Startup) => {
        this.startup = startup;
        localStorage.setItem("startup", JSON.stringify(this.startup));
      });
    }); 
  }

  deleteInterest(interest: string) {
    this.service.deleteStartupInterest(this.startup.username, interest).subscribe(() => {
      this.service.getStartup(this.startup.username).subscribe((startup: Startup) => {
        this.startup = startup;
        localStorage.setItem("startup", JSON.stringify(this.startup));
      });
    });
  }

  deleteSkill(skill: string) {
    this.service.deleteStartupSkill(this.startup.username, skill).subscribe(() => {
      this.service.getStartup(this.startup.username).subscribe((startup: Startup) => {
        this.startup = startup;
        localStorage.setItem("startup", JSON.stringify(this.startup));
      });
    });
  }

}
