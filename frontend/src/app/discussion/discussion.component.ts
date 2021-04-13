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
    this.discussions = [];
    this.service.getAllDiscussions().subscribe((discussions: Discussion[]) => {
      discussions.forEach(d => {
        if (this.loggedUser == 'startup') {          
          if (d.visibility == 'Everyone' || d.visibility == 'All startups') this.discussions.push(d);
        }
        else if (this.loggedUser == 'investor') {
          if (d.visibility == 'Everyone') this.discussions.push(d);
        }
        else if (this.loggedUser == 'admin') {
          this.discussions = discussions;
        }
        else {
          if (d.visibility == 'Everyone') this.discussions.push(d);
        }
      });
    });
  }

  archive(discussion: Discussion) {
    this.service.archiveDiscussion(discussion.title).subscribe(() => {
      this.getAllDiscussions();
    });
  }

  remove(discussion: Discussion) {
    this.service.removeDiscussion(discussion.title).subscribe(() => {
      this.getAllDiscussions();
    });
  }

  delete(discussion: Discussion) {
    this.service.deleteDiscussion(discussion.title).subscribe(() => {
      this.getAllDiscussions();
    });
  }

  deleteReplay(discussion: Discussion, index: number) {
    this.service.deleteDiscussionReplay(discussion.title, discussion.replays[index].replay).subscribe(() => {
      this.getAllDiscussions();
    });
  }

  addReplay(discussion: Discussion) {
    let date = new Date();
    let time = "" + ("00" + date.getHours()).slice(-2) + ":" + ("00" + date.getMinutes()).slice(-2);
    let dateString = (date.getFullYear()) + "-" + ("00" + (date.getMonth() + 1)).slice(-2) + "-" + ("00" + date.getDate()).slice(-2);

    let replay = {
      fullName: this.loggedUserFullName,
      replay: this.replay, 
      date: dateString,
      time: time
    }

    this.service.addDiscussionReplay(discussion.title, replay).subscribe(() => {
      this.getAllDiscussions();
      this.replay = "";
    });
  }

  addDiscussion() {
    this.router.navigate(["addDiscussion"]);
  }

}
