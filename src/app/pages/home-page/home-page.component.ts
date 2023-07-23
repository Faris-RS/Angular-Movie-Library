import { Component } from '@angular/core';
import { FetchMovieDetailsService } from 'src/app/services/fetch-movie-details.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  trendingMovieResult: any[] = [];

  constructor(private service: FetchMovieDetailsService) {}

  ngOnInit(): void {
    this.trendingMovieData();
  }

  trendingMovieData() {
    this.service.fetchTrendingMovies().subscribe((result) => {
      this.trendingMovieResult = result.results;
    });
  }
}
