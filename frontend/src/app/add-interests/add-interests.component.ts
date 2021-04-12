import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-interests',
  templateUrl: './add-interests.component.html',
  styleUrls: ['./add-interests.component.css']
})
export class AddInterestsComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.formFor = localStorage.getItem("addInterests");
  }

  formFor: string;

}
