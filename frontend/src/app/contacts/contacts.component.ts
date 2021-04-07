import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { Startup } from '../model/startup.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllStartups();
    this.getAllInvestors();
  }

  allStartups: Startup[];
  allInvestors: Investor[];

  getAllStartups() {
    this.service.getAllStartups().subscribe((startups: Startup[]) => {
      this.allStartups = startups;
    })
  }

  getAllInvestors() {
    this.service.getAllInvestors().subscribe((investors: Investor[]) => {
      this.allInvestors = investors;
    })
  }

}
