import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { Startup } from '../model/startup.model';
import { Survey } from '../model/survey.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("user");
    if (this.loggedUser == 'startup') {
      this.startup = JSON.parse(localStorage.getItem('startup'));
      this.getAllStartupSurveys();
    }
    else if (this.loggedUser == 'investor') {
      this.investor = JSON.parse(localStorage.getItem('investor'));
    }
    
  }

  loggedUser: string;
  startup: Startup;
  investor: Investor;
  filledSurveys: Survey[];
  unfilledSurveys: Survey[];

  getAllStartupSurveys() {
    this.filledSurveys = [];
    this.unfilledSurveys = [];
    this.service.getAllSurveys().subscribe((surveys: Survey[]) => {
      surveys.forEach(s => {
        let found = false;
        s.filled.forEach(filled => {
          if (filled.startup == this.startup.fullName && filled.answers != null) {
            this.filledSurveys.push(s);
            found = true;
          }
          else if (filled.startup == this.startup.fullName && filled.answers == null) {
            found = true;
          }
        })
        if (!found) this.unfilledSurveys.push(s);
      })
    });
  }

  statistics(survey: Survey) {
    localStorage.setItem("selectedSurvey", JSON.stringify(survey));
    this.router.navigate(['surveyStatistics']);
  }
  
  fill(survey: Survey) {
    localStorage.setItem("selectedSurvey", JSON.stringify(survey));
    this.router.navigate(['fillSurvey']);
  }
  
  remove(survey: Survey) {
    this.service.removeSurveyForStartup(survey.name, this.startup.fullName).subscribe(() => {
      this.getAllStartupSurveys();
    })
  }

}

