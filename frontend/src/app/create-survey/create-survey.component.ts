import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})

export class CreateSurveyComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.investor = JSON.parse(localStorage.getItem("investor"));
  }

  investor: Investor;
  name: string;
  public: boolean;
  numberOfQuestions: number;
  numberOfAnswers: number[];
  questions: any[] = [{
    question: '',
    answers: [{
      answer: '',
      counter: 0
    }]
  }];

  addQuestion() {
    this.questions.push({
      question: '',
      answers: [{
        answer: '',
        counter: 0
      }]
    });
  }

  removeQuestion(i: number) {
    this.questions.splice(i, 1);
  }

  addAnswer(i) {
    let answer = {
      answer: '',
      counter: 0
    }
    this.questions[i].answers.push(answer);
  }

  removeAnswer(i: number, j: number) {
    this.questions[i].answers.splice(j, 1);
  }

  create() {
    this.service.insertSurvey(this.name, this.investor.fullName, this.public, this.questions).subscribe(() => {
      this.router.navigate(['survey']);
    })
  }
}
