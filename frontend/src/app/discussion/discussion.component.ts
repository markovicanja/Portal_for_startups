import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Discussion } from '../model/discussion.model';
import { Investor } from '../model/investor.model';
import { Startup } from '../model/startup.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDiscussions();
    this.loggedUser = localStorage.getItem("user");
    if (this.loggedUser == "startup") {
      this.startup = JSON.parse(localStorage.getItem("startup"));
      this.loggedUserFullName = this.startup.fullName;
    }
    else if (this.loggedUser == "investor") {
      this.investor = JSON.parse(localStorage.getItem("investor"));
      this.loggedUserFullName = this.investor.fullName;
    }
    else if (this.loggedUser == 'admin') {
      this.loggedUserFullName = 'Admin';
    }
  }

  discussions: Discussion[];
  loggedUser: string;
  startup: Startup;
  investor: Investor;
  loggedUserFullName: string;
  replay: string;

  getAllDiscussions() {
    // DOHVATI NA OSNOVU VISIBILITIJA OD DISKUSIJE!!!
    this.service.getAllDiscussions().subscribe((d: Discussion[]) => {
      this.discussions = d;
    });
  }

  archive(discussion: Discussion) {

  }

  remove(discussion: Discussion) {

  }

  delete(discussion: Discussion) {

  }

  deleteReplay(discussion: Discussion, index: number) {

  }

  addReplay(discussion: Discussion) {

  }

  addDiscussion() {
    this.router.navigate(["addDiscussion"]);
  }

}
