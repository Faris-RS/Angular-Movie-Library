import { TestBed } from '@angular/core/testing';

import { FetchMovieDetailsService } from './fetch-movie-details.service';

describe('FetchMovieDetailsService', () => {
  let service: FetchMovieDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchMovieDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
