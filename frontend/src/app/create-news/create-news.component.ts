import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Codebook } from '../model/codebook.model';
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
    this.getCodebookCategories();
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
  codebooks: Codebook[];

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
        let found = false;
        this.codebooks.forEach(codebook => {
          if (codebook.data == this.createdNews.category) found = true;
        });
        if (!found) {
          let month = ("00" + (date.getMonth() + 1)).slice(-2);
          let day = ("00" + date.getDate()).slice(-2);
          let dateFrom = (date.getFullYear()) + "-" + month + "-" + day;
          let dateTo = (date.getFullYear() + 2) + "-" + month + "-" + day;
          this.service.insertCodebook(this.createdNews.category, "News category", dateFrom, dateTo).subscribe(() => {
            this.router.navigate(['news']);
          });
        }
        this.router.navigate(['news']);
      });
  }

  getCodebookCategories() {
    this.codebooks = [];
    this.service.getAllCodebooks().subscribe((codebooks: Codebook[]) => {
      codebooks.forEach(codebook => {
        if (codebook.category == "News category") this.codebooks.push(codebook);
      })
    }); 
  }

}
