import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from '../model/investor.model';
import { Startup } from '../model/startup.model';
import { User } from '../model/user.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("user") != "") this.router.navigate(["home"]);
    this.username = "";
    this.password = "";
  }

  username: string;
  password: string;
  msg: string;

  login() {
    this.msg = "";
    if (this.username == "" || this.password == "") {
      this.msg = "Please fill in all the fields.";
      return;
    }
    this.service.login(this.username).subscribe((user: User) => {
      if (user) {        
        if (user.password == this.password) {
          localStorage.setItem('user', user.type);
          localStorage.setItem('userObject', JSON.stringify(user));
          if (user.type == "admin") {
            localStorage.setItem('admin', JSON.stringify(user));
            window.location.reload();
          }
          else if (user.type == "startup") {
            this.service.getStartup(this.username).subscribe((startup: Startup) => {
              localStorage.setItem('startup', JSON.stringify(startup));
              window.location.reload();
            })
          }
          else if (user.type == "investor") {
            this.service.getInvestor(this.username).subscribe((investor: Investor) => {
              localStorage.setItem('investor', JSON.stringify(investor));
              window.location.reload();
            })
          }
        }
        else {
          this.msg = "Wrong password.";
        }
      }
      else {
        this.msg = "Wrong credentials.";
      }
    });
  }

}
