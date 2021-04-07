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
    let mailInfo = {
      from: this.email,
      to: ['markovicanja98@gmail.com'],
      subject: this.subject,
      html: this.message + "<br><br> Sent from: " + this.name + ", email: " + this.email
    }
    this.service.sendMails(mailInfo).subscribe(() => {
      this.msg = 'You have successfully sent a message!';
    });    
  }

}
