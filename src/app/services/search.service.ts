import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  private searchResult: any;

  setSearchResult(result: any) {
    this.searchResult = result;
  }

  getSearchResult() {
    return this.searchResult;
  }
}
