import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Codebook } from '../model/codebook.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-codebook',
  templateUrl: './codebook.component.html',
  styleUrls: ['./codebook.component.css']
})
export class CodebookComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCodebooks();
  }

  codebooks: Codebook[][];

  getAllCodebooks() {
    this.service.getAllCodebooks().subscribe((c: Codebook[]) => {
      this.codebooks = [];
      if (c.length == 0) return;
      let category = c[0].category;
      while (true) { 
        let categoryArray = [];
        c.forEach(codebook => {
          if (codebook.category == category) categoryArray.push(codebook);
        });
        c = c.filter(obj => obj.category !== category);
        this.codebooks.push(categoryArray);
        if (c.length == 0) break;
        category = c[0].category;
      }
    });
  }

  addValue(category: string) {
    localStorage.setItem("addCodebookCategory", category);
    this.router.navigate(['addCodebook']);
  }

  edit(codebook: Codebook) {
    localStorage.setItem("editCodebook", JSON.stringify(codebook));
    this.router.navigate(['editCodebook']);
  }

  delete(codebook: Codebook) {
    this.service.deleteCodebook(codebook.data, codebook.category).subscribe(() => {
      this.getAllCodebooks();
    });
  }
}
