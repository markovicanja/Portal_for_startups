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
    this.businessType = '';
    this.selectedStartups = [];
    this.getAllStartups();
  }

  investor: Investor;
  notification: Notification;
  allStartups: Startup[];
  selectedStartups: string[];
  businessType: string;

  getAllStartups() {
    this.service.getAllStartups().subscribe((s: Startup[]) => {
      this.allStartups = s;
    });
  }

  create() {
    let date = new Date();
    let time = "" + date.getHours() + ":" + date.getMinutes();
    let dateString = (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + (date.getFullYear());

    this.service.insertNotification(this.notification.title, this.notification.text, 
      dateString, time, this.investor.fullName, this.notification.type, this.notification.sendTo, 
      this.selectedStartups, this.businessType).subscribe(() => {
        this.router.navigate(['notifications']);
      });
  }

}