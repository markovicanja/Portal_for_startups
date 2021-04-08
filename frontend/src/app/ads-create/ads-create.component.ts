import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from '../model/ad.model';
import { Investor } from '../model/investor.model';
import { Startup } from '../model/startup.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ads-create',
  templateUrl: './ads-create.component.html',
  styleUrls: ['./ads-create.component.css']
})
export class AdsCreateComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.investor = JSON.parse(localStorage.getItem('investor'));
    this.ad = new Ad();
    this.ad.sendTo = '';
    this.ad.businessType = '';
    this.selectedStartups = [];
    this.getAllStartups();
  }

  investor: Investor;
  ad: Ad;
  allStartups: Startup[];
  selectedStartups: Startup[];
  emails: string[];
  expireDate: string;

  getAllStartups() {
    this.service.getAllStartups().subscribe((s: Startup[]) => {
      this.allStartups = s;
    });
  }

  post() {
    let publishDate = new Date();
    this.ad.publishTime = "" + publishDate.getHours() + ":" + publishDate.getMinutes();
    this.ad.publishDate = (publishDate.getMonth() + 1) + "/" + (publishDate.getDate()) + "/" + (publishDate.getFullYear());

    this.ad.expireDate = this.expireDate.substr(5, 2) + "/" + this.expireDate.substr(8, 2) + "/" + this.expireDate.substr(0, 4);
    this.ad.expireTime = this.expireDate.substr(11, 5);

    this.service.insertAd(this.ad.title, this.ad.text, this.ad.publishDate, this.ad.publishTime, this.ad.expireDate, 
      this.ad.expireTime, this.investor.fullName, this.ad.sendTo, 
      this.selectedStartups, this.ad.businessType).subscribe(() => {
        this.router.navigate(['ads']);
      });
  }

}