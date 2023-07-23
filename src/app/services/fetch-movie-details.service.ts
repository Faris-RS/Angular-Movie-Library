import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchMovieDetailsService {
  constructor(private http: HttpClient) {}

  baseurl = 'https://api.themoviedb.org/3';
  apikey = '08cc33bd5ae3a747598ce2ad84376e66';

  // Fetch banner data

  fetchBanner(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    );
  }

  // Fetch trending movies
  fetchTrendingMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/movie/day?api_key=${this.apikey}`
    );
  }

  // Fetch action movies
  fetchActionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`
    );
  }

  // Fetch adventure movies
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`
    );
  }

  // Fetch animation movies
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`
    );
  }

  // Fetch comedy movies
  fetchComedyMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`
    );
  }

  // Fetch documentary movies
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`
    );
  }

  // Fetch science-fiction movies
  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`
    );
  }

  // Fetch thriller movies
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`
    );
  }
}
