import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { Notification } from '../model/notification.model';
import { Startup } from '../model/startup.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.investor = JSON.parse(localStorage.getItem('investor'));
    this.notification = new Notification();
    this.notification.type = '';
    this.notification.sendTo = '';
    this.notification.businessType = '';
    this.selectedStartups = [];
    this.getAllStartups();
  }

  investor: Investor;
  notification: Notification;
  allStartups: Startup[];
  selectedStartups: Startup[];
  emails: string[];

  getAllStartups() {
    this.service.getAllStartups().subscribe((s: Startup[]) => {
      this.allStartups = s;
    });
  }

  create() {
    let date = new Date();
    let time = "" + date.getHours() + ":" + date.getMinutes();
    let dateString = (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear());

    if (this.notification.type == 'profile') {
      this.service.insertNotification(this.notification.title, this.notification.text, 
        dateString, time, this.investor.fullName, this.notification.type, this.notification.sendTo, 
        this.selectedStartups, this.notification.businessType).subscribe(() => {
          this.router.navigate(['notifications']);
        });
    }
    else {
      this.emails = [];
      if (this.notification.sendTo == 'all startups') {
        this.service.getAllStartups().subscribe((startups: Startup[]) => {
          startups.forEach(s => {
            this.emails.push(s.email);
          }); 
          this.sendEmails();
        });
      }
      else if (this.notification.sendTo == 'selected business type startups') {
        this.service.getAllStartups().subscribe((startups: Startup[]) => {
          startups.forEach(s => {
            if (s.businessType == this.notification.businessType) this.emails.push(s.email);
          }); 
          this.sendEmails();
        });
      }
      else if (this.notification.sendTo == 'selected startups') {
        this.selectedStartups.forEach(s => {
          this.emails.push(s.email);
        });
        this.sendEmails();        
      }
      else if (this.notification.sendTo == 'everyone') {
        this.service.getAllStartups().subscribe((startups: Startup[]) => {
          startups.forEach(s => {
            this.emails.push(s.email);
          }); 
          this.service.getAllInvestors().subscribe((investors: Investor[]) => {
            investors.forEach(i => {
              if (i.username != this.investor.username) this.emails.push(i.email);
            });
            this.sendEmails();
          });
        });
      }
    }
  }

  sendEmails() {
    let mailInfo = {
      from: this.investor.email,
      to: this.emails,
      subject: this.notification.title,
      html: this.notification.text 
    }
    this.service.sendMails(mailInfo).subscribe(() => {
      this.router.navigate(['notifications'])
    });
  }

}