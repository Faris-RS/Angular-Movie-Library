import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchMovieDetailsService } from 'src/app/services/fetch-movie-details.service';
import { faPlay, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  close = faTimes;
  play = faPlay;
  plus = faPlus;

  getMovieDetailResult: any = {};
  getMovieVideoResult: any = {};
  getMovieCastResult: any = [];
  rating: number = 0;
  genre: string[] = [];

  constructor(
    private service: FetchMovieDetailsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getDetails(getParamId);
    this.getCast(getParamId);
    this.getVideo(getParamId);
  }

  getDetails(id: any) {
    this.service.fetchMovieDetails(id).subscribe((result: any) => {
      console.log(result);
      this.getMovieDetailResult = result;
      this.calculateRating(this.getMovieDetailResult.vote_average);
      this.calculateGenre(this.getMovieDetailResult.genres);
    });
  }

  getCast(id: any) {
    this.service.fetchMovieCast(id).subscribe((result: any) => {
      this.getMovieCastResult = result;
    });
  }

  getVideo(id: any) {
    this.service.fetchMovieTrailer(id).subscribe((result: any) => {
      this.getMovieVideoResult = result;
    });
  }

  calculateRating(vote: any) {
    this.rating = Math.round((vote + Number.EPSILON) * 100) / 100;
  }

  calculateGenre(data: any) {
    const arr: string[] = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i].name);
    }
    this.genre = arr;
  }
}
