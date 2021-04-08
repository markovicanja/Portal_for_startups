import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from '../model/ad.model';
import { Investor } from '../model/investor.model';
import { Startup } from '../model/startup.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

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
    this.getAllAds();
  }

  loggedUser: string;
  loggedUserFullName: string;
  startup: Startup;
  investor: Investor;
  ads: Ad[];

  createAd() {
    this.router.navigate(['createAds']);
  }

  getAllAds() {
    this.ads = [];
    this.service.getAllAds().subscribe((ads: Ad[]) => {
      if (this.loggedUser == 'admin') this.ads = ads;
      else if (this.loggedUser == 'startup') {
        ads.forEach(a => {
          if (!this.expired(a.expireDate, a.expireTime) && !a.deleted) {
            if (a.sendTo == 'everyone') this.ads.push(a);
            else if (a.sendTo == 'all startups') this.ads.push(a);
            else if (a.sendTo == 'selected business type startups' && this.startup.businessType == a.businessType) this.ads.push(a);
            else if (a.sendTo == 'selected startups') {
              a.startups.forEach(startup => {
                if (this.startup.username == startup.username) this.ads.push(a);
              });
            }
          }
        })
      }
      else if (this.loggedUser == 'investor') {
        ads.forEach(a => {
          if (a.author == this.loggedUserFullName || (a.sendTo == 'everyone' && !this.expired(a.expireDate, a.expireTime) && a.deleted == false)) 
            this.ads.push(a);
        });
      }
      else {
        ads.forEach(a => {
          if (!a.deleted && a.sendTo == 'everyone' && !this.expired(a.expireDate, a.expireTime)) this.ads.push(a);
        });
      }
    });
  }

  remove(ad: Ad) {
    this.service.removeAd(ad.title).subscribe(() => {
      this.getAllAds();
    })
  }

  delete(ad: Ad) {
    this.service.deleteAd(ad.title).subscribe(() => {
      this.getAllAds();
    })
  }

  expired(dateString, timeString) {
    let dateParts = dateString.split('/');
    let timeParts = timeString.split(':');
    let date = new Date(dateParts[2], dateParts[0] - 1, dateParts[1], timeParts[0], timeParts[1]);
    let today = new Date();

    if (date.getTime() >= today.getTime()) return false;
    return true;
  }

}
