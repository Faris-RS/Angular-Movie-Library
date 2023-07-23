import { Component } from '@angular/core';
import { FetchMovieDetailsService } from 'src/app/services/fetch-movie-details.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  trendingMovieResult: any[] = [];
  actionMovieResult: any[] = [];
  adventureMovieResult: any[] = [];
  animationMovieResult: any[] = [];
  comedyMovieResult: any[] = [];
  documentaryMovieResult: any[] = [];
  fictionMovieResult: any[] = [];
  thrillerMovieResult: any[] = [];

  constructor(private service: FetchMovieDetailsService) {}

  ngOnInit(): void {
    this.trendingMovieData();
    this.actionMovieData();
    this.adventureMovieData();
    this.animationMovieData();
    this.comedyMovieData();
    this.documentaryMovieData();
    this.fictionMovieData();
    this.thrillerMovieData();
  }

  trendingMovieData() {
    this.service.fetchTrendingMovies().subscribe((result) => {
      this.trendingMovieResult = result.results;
    });
  }

  actionMovieData() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  adventureMovieData() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }

  animationMovieData() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

  comedyMovieData() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  documentaryMovieData() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }

  fictionMovieData() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.fictionMovieResult = result.results;
    });
  }

  thrillerMovieData() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}
