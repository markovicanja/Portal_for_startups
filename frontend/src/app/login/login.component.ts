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
    if (localStorage.getItem("user") != "") this.router.navigate(["profile"]);
    this.username = "";
    this.password = "";
  }

  username: string;
  password: string;
  msg: string;
  newPassword: string;
  logged: boolean;
  resetPass: boolean;

  login() {
    this.msg = "";
    if (this.username == "" || this.password == "") {
      this.msg = "Please fill in all the fields.";
      return;
    }
    if (this.resetPass) this.loginWithNewPassword();
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

  loginWithNewPassword() {
    this.service.loginWithNewPassword(this.username, this.newPassword).subscribe((user: User) => {
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
    });
  }

  resetPassword() {
    this.msg = "";
    if (this.username == "") {
      this.msg = "Please fill in the username."
      return;
    }
    this.newPassword = this.getRandomString(3);
    this.service.getStartup(this.username).subscribe((startup: Startup) => {
      if (startup == null) {
        this.service.getInvestor(this.username).subscribe((investor: Investor) => {
          if (investor == null) {
            this.msg = "Wrong credentials.";
            return;
          }
          let user = {
            name: investor.fullName,
            email: investor.email,
            newPassword: this.newPassword
          }
          this.service.resetPassword(user).subscribe(() => {
            this.resetPass = true;
            setTimeout(() => {
              this.resetPass = false;
              if (!this.logged) {
                this.msg = "Your password has expired!";
              }
            }, 10000);
          });
        });
      }
      let user = {
        name: startup.fullName,
        email: startup.email,
        newPassword: this.newPassword
      }
      this.service.resetPassword(user).subscribe(() => {
        this.resetPass = true;
        setTimeout(() => {
          this.resetPass = false;
          if (!this.logged) {
            this.msg = "Your password has expired!";
          }
        }, 10000);
      });
    });
  }

  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

}
