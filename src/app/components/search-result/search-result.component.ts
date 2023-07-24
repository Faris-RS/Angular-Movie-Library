import { Component, Input } from '@angular/core';
import { faBars, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FetchMovieDetailsService } from 'src/app/services/fetch-movie-details.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  constructor(
    private searchResultsService: SearchService,
    private service: FetchMovieDetailsService
  ) {}

  options = faBars;
  play = faPlay;

  @Input() items: any[] = [];

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

  get searchResult() {
    return this.searchResultsService.getSearchResult();
  }
}
