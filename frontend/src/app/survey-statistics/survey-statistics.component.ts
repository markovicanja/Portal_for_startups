import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from '../model/survey.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-survey-statistics',
  templateUrl: './survey-statistics.component.html',
  styleUrls: ['./survey-statistics.component.css']
})
export class SurveyStatisticsComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.survey = JSON.parse(localStorage.getItem("selectedSurvey"));
  }

  survey: Survey;

}
