import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../models/Movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  serverUrl: string =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US';
  constructor(private httpClient: HttpClient) {}
  getMovies(): Observable<RootObject> {
    return this.httpClient.get<RootObject>(this.serverUrl);
  }
}
