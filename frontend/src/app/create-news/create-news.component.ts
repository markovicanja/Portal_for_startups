import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { News } from '../model/news.model';
import { Startup } from '../model/startup.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  constructor(private service: ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getAllStartups();
    this.getAllInvestors();
    this.createdNews = new News();
    this.createdNews.visibility = '';
    this.selectedStartups = [];
    this.selectedInvestors = [];
    if (localStorage.getItem("user")=='investor'){
      let investor = JSON.parse(localStorage.getItem("investor"));
      this.loggedUserName = investor.fullName;
    }  
    else {
      let startup = JSON.parse(localStorage.getItem("startup"));
      this.loggedUserName = startup.fullName;
    }
  }

  createdNews: News;
  allStartups: Startup[];
  selectedStartups: Startup[];
  allInvestors: Investor[];
  selectedInvestors: Investor[];
  loggedUserName: string;

  getAllStartups() {
    this.service.getAllStartups().subscribe((startups: Startup[]) => {
      this.allStartups = startups;
    });
  }

  getAllInvestors() {
    this.service.getAllInvestors().subscribe((investors: Investor[]) => {
      this.allInvestors = investors;
    });
  }

  createNews() {
    let date = new Date();
    let time = "" + date.getHours() + ":" + date.getMinutes();
    let dateString = (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear());
    let user = JSON.parse(localStorage.getItem("userObject"));

    this.service.insertNews(this.createdNews.name, this.createdNews.text, this.createdNews.category, 
      dateString, time, this.loggedUserName, this.createdNews.visibility, this.selectedStartups, this.selectedInvestors).subscribe(() => {
        this.router.navigate(['news']);
      });
  }

}
