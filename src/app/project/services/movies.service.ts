import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetailed, RootObject } from '../models/Movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  serverUrl: string =
    'https://cinemar-api.vercel.app';
  constructor(private httpClient: HttpClient) {}
  getMovies(): Observable<RootObject> {
    let endpoint = '/movies'
    return this.httpClient.get<RootObject>(this.serverUrl+endpoint);
  }
  getMovie(id : number) : Observable<MovieDetailed>{
    let endpoint = `/movies/${id}`
    return this.httpClient.get<MovieDetailed>(this.serverUrl+endpoint);
  }
}
