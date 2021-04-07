import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl = 'http://localhost:5000/api';

  constructor(
    private http: HttpClient, private authService: AuthenticationService) {
      
    }

    getMovies(): Observable<Movie[]> {
      return this.http.get<Movie[]>(this.apiUrl + '/movies')
    }

    getRecommendedMoviesByIdAndType(id: number, type: string): Observable<Movie[]> {
      return this.http.get<Movie[]>(this.apiUrl + '/recommended/' + id+ '?type=' + type)
    }

    getRandomImageForMovie(): Observable<any> {
      return this.http.get<any>('https://source.unsplash.com/random/800x600')
    }

    retrainModel(): Observable<any> {
      return this.http.get<any>(this.apiUrl + '/retrain')
    }

    getGroupsByUserId(id: number) {
      return this.http.get<any>(this.apiUrl + '/groups/user/' + id);
    }
}
