import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FetchMovieDetailsService } from 'src/app/services/fetch-movie-details.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  constructor(
    private service: FetchMovieDetailsService,
    private searchResultsService: SearchService
  ) {}

  searchResult: any;
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    this.service.searchMovie(this.searchForm.value).subscribe((result) => {
      this.searchResultsService.setSearchResult(result.results);
      console.log(result.results, 'submitForm#');
    });
  }
}
