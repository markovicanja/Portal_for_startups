import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Codebook } from '../model/codebook.model';
import { Discussion } from '../model/discussion.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-discussion',
  templateUrl: './add-discussion.component.html',
  styleUrls: ['./add-discussion.component.css']
})
export class AddDiscussionComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.discussion = new Discussion();
    this.discussion.visibility = '';
    this.getCodebookCategories();
    if (localStorage.getItem("user")=='investor'){
      let investor = JSON.parse(localStorage.getItem("investor"));
      this.loggedUserName = investor.fullName;
    }  
    else {
      let startup = JSON.parse(localStorage.getItem("startup"));
      this.loggedUserName = startup.fullName;
    }
  }

  discussion: Discussion;
  codebooks: Codebook[];
  loggedUserName: string;

  getCodebookCategories() {
    this.codebooks = [];
    this.service.getAllCodebooks().subscribe((codebooks: Codebook[]) => {
      codebooks.forEach(codebook => {
        if (codebook.category == "Discussion category") this.codebooks.push(codebook);
      })
    }); 
  }

  add() {
    let date = new Date();
    let time = "" + date.getHours() + ":" + date.getMinutes();
    let dateString = (date.getFullYear()) + "-" + (date.getMonth() + 1) + "-" + (date.getDate());

    this.service.insertDiscussion(this.discussion.title, this.discussion.text, this.discussion.category, dateString, time,
      this.loggedUserName, this.discussion.visibility).subscribe(() => {
        let found = false;
        this.codebooks.forEach(codebook => {
          if (codebook.data == this.discussion.category) found = true;
        });
        if (!found) {
          let month = ("00" + (date.getMonth() + 1)).slice(-2);
          let day = ("00" + date.getDate()).slice(-2);
          let dateFrom = (date.getFullYear()) + "-" + month + "-" + day;
          let dateTo = (date.getFullYear() + 2) + "-" + month + "-" + day;
          this.service.insertCodebook(this.discussion.category, "Discussion category", dateFrom, dateTo).subscribe(() => {
            this.router.navigate(['discussions']);
          });
        }
        this.router.navigate(['discussions']);
      });
  }

}
