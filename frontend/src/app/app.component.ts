import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("user") == "")
      this.sessionValid = false;
    else this.sessionValid = true;
  }    

  sessionValid: boolean;

  logout() {
    localStorage.setItem("user", "");
    localStorage.setItem("admin", null);
    localStorage.setItem("startup", null);
    localStorage.setItem("investor", null);
    this.sessionValid = false;
    this.router.navigate(["home"]);
  }
}
