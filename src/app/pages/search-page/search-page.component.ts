import { Component } from '@angular/core';
import { SearchInputComponent } from 'src/app/components/search-input/search-input.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  showSearchModal = false;

  openSearchModal() {
    this.showSearchModal = true;
  }

  closeSearchModal() {
    this.showSearchModal = false;
  }
}
