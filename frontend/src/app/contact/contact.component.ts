import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  subject: string;
  email: string;
  name: string;
  message: string;
  msg: string;

  send() {
    this.msg = '';
    alert("Email: " + this.email);
    alert("Name: " + this.name);
    alert("Subject: " + this.subject);
    alert("Message: " + this.message);
    this.msg = 'You have successfully sent a message!'
  }

}
