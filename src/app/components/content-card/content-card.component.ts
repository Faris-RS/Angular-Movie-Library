import { Component, Input, OnInit } from '@angular/core';
import { faBars, faPlay } from '@fortawesome/free-solid-svg-icons';
import { TruncateTextDirective } from 'src/app/directives/truncate-text.directive';
import { FetchMovieDetailsService } from 'src/app/services/fetch-movie-details.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
  providers: [TruncateTextDirective],
})
export class ContentCardComponent implements OnInit {
  options = faBars;
  play = faPlay;

  @Input() items: any[] = [];

  constructor(private service: FetchMovieDetailsService) {}

  ngOnInit(): void {}

  getTrailer(id: any) {
    this.service.fetchMovieTrailer(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          window.location.href = `https://www.themoviedb.org/video/play?key=${element.key}`;
        }
      });
    });
  }
}
