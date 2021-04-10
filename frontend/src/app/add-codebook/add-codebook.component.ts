import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Codebook } from '../model/codebook.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-codebook',
  templateUrl: './add-codebook.component.html',
  styleUrls: ['./add-codebook.component.css']
})
export class AddCodebookComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.codebook = new Codebook();
    this.codebook.category = localStorage.getItem("addCodebookCategory");
  }

  codebook: Codebook;

  add() {
    this.service.insertCodebook(this.codebook.data, this.codebook.category, this.codebook.dateFrom, this.codebook.dateTo).subscribe(() => {
      this.router.navigate(['codebooks']);
    });
  }

}
