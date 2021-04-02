import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Startup } from '../model/startup.model';
import { Survey } from '../model/survey.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css']
})
export class FillSurveyComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.survey = JSON.parse(localStorage.getItem("selectedSurvey"));
    this.answers = [];
    this.startup = JSON.parse(localStorage.getItem("startup"));
  }

  survey: Survey;
  answers: string[];
  startup: Startup;

  submitSurvey() {
    let filled = {
      startup: this.startup.fullName,
      answers: this.answers
    }

    this.survey.questions.forEach((question, index) => {
      question.answers.forEach(answer => {
        if (answer.answer == this.answers[index]) answer.counter++;
      });
    });

    this.service.setSurveyAnswers(this.survey.name, this.survey.questions, filled).subscribe(() => {
      this.router.navigate(['survey']);
    });
  }

}
