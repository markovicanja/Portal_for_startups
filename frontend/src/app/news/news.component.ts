import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../model/news.model';
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
    this.getAllNews();
  }

  news: News[];
  loggedUser: string;

  getAllNews() {
    this.service.getAllNews().subscribe((news: News[]) => {
      this.news = news;
    });
  }

  createNews() {
    this.router.navigate(['createNews']);
  }
}
