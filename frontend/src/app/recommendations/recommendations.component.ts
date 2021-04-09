import { Component, OnInit } from '@angular/core';
import { Recommendation } from '../model/recommendation.model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.loggedUser = localStorage.getItem("user");
    this.getAllRecommendations();
  }

  loggedUser: string;
  recommendations: Recommendation[];

  getAllRecommendations() {
    this.service.getAllRecommendations().subscribe((rec: Recommendation[]) => {
      this.recommendations = rec;
    });
  }

  delete(recommendation: Recommendation) {
    this.service.deleteRecommendation(recommendation.title).subscribe(() => {
      this.getAllRecommendations();
    });
  }

}
