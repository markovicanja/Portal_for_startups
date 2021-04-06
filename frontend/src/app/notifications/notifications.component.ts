import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { Notification } from '../model/notification.model';
import { Startup } from '../model/startup.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

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
    this.getAllNotifications();
  }

  loggedUser: string;
  loggedUserFullName: string;
  startup: Startup;
  investor: Investor;
  notifications: Notification[];

  getAllNotifications() {
    this.notifications = [];
    this.service.getAllNotifications().subscribe((notifications: Notification[]) => {
      if (this.loggedUser == 'admin') this.notifications = notifications;
      else if (this.loggedUser == 'startup') {

      }
      else if (this.loggedUser == 'investor') {
        notifications.forEach(n => {
          if (n.author == this.loggedUserFullName || (n.sendTo == 'everyone' && n.archived == false && n.deleted == false)) 
            this.notifications.push(n);
        });
      }
    });
  }

  archive(notification: Notification) {
    this.service.archiveNotification(notification.title).subscribe(() => {
      this.getAllNotifications();
    })
  }

  remove(notification: Notification) {
    this.service.removeNotification(notification.title).subscribe(() => {
      this.getAllNotifications();
    })
  }

  delete(notification: Notification) {
    this.service.deleteNotification(notification.title).subscribe(() => {
      this.getAllNotifications();
    })
  }

  sendNotification() {
    this.router.navigate(['sendNotification']);
  }

}
