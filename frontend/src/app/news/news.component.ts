import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { News } from '../model/news.model';
import { Startup } from '../model/startup.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("user");
    if (this.loggedUser == 'startup') {
      this.startup = JSON.parse(localStorage.getItem('startup'));
      this.loggedUserFullName = this.startup.fullName;
    }
    else if (this.loggedUser == 'investor') {
      this.investor = JSON.parse(localStorage.getItem('investor'));
      this.loggedUserFullName = this.investor.fullName;
    }
    this.getAllNews();
  }

  news: News[];
  loggedUser: string;
  startup: Startup;
  investor: Investor;
  loggedUserFullName: string;

  getAllNews() {
    this.news = [];
    this.service.getAllNews().subscribe((news: News[]) => {
      news.forEach(n => {
        if (this.loggedUser == 'startup') {          
          if (n.visibility == 'Everyone' || n.visibility == 'All startups') this.news.push(n);
          else if (n.visibility == 'Selected startups') {
            n.selectedStartups.forEach(ss => {
              if (ss.username == this.startup.username) this.news.push(n);
            });
          }
          else if (n.visibility == 'Archived' && n.author == this.startup.fullName) this.news.push(n);
        }
        else if (this.loggedUser == 'investor') {
          if (n.visibility == 'Everyone' || n.visibility == 'All investors') this.news.push(n);
          else if (n.visibility == 'Selected investors') {
            n.selectedInvestors.forEach(ss => {
              if (ss.username == this.investor.username) this.news.push(n);
            });
          }
          else if (n.visibility == 'Archived' && n.author == this.investor.fullName) this.news.push(n);
        }
        else if (this.loggedUser == 'admin') {
          this.news = news;
        }
        else {
          if (n.visibility == 'Everyone') this.news.push(n);
        }
      });
    });
  }

  createNews() {
    this.router.navigate(['createNews']);
  }

  archive(news: News) {
    this.service.archiveNews(news.name).subscribe(() => {
      this.getAllNews();
    })
  }

  remove(news: News) {
    this.service.removeNews(news.name).subscribe(() => {
      this.getAllNews();
    })
  }

  delete(news: News) {
    this.service.deleteNews(news.name).subscribe(() => {
      this.getAllNews();
    })
  }

}
