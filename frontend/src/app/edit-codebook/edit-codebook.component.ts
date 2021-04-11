import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Codebook } from '../model/codebook.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-codebook',
  templateUrl: './edit-codebook.component.html',
  styleUrls: ['./edit-codebook.component.css']
})
export class EditCodebookComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.codebook = JSON.parse(localStorage.getItem("editCodebook"));
    this.oldCodebook = this.codebook;
  }

  codebook: Codebook;
  oldCodebook: Codebook;

  update() {
    this.service.updateCodebook(this.oldCodebook.data, this.codebook.data, this.oldCodebook.category, this.codebook.dateFrom, this.codebook.dateTo).subscribe(() => {
      this.router.navigate(['codebooks']);
    });
  }

}
