import {Component, OnInit} from '@angular/core';
import {Movie} from 'src/app/model/movie.model';
import {MovieService} from 'src/app/service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  allMovies: Movie[] = [];
  movieService: MovieService;

  constructor(movieService: MovieService) {
    this.movieService = movieService;
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res => {
      this.movies = res;
      this.movies.forEach(element => {
        element.imageUrl = this.getRandomImageForMovie();
      });
      this.allMovies = this.movies;
    });
  }

  filterMoviesByName(event: any): void {
    this.movies = this.allMovies.filter(m => m.movieTitle.toLowerCase()
      .includes(event.target.value.toString().toLowerCase()));
  }


  getCategories(movie: any): any[] {
    return movie.genre.split('|');
  }

  getRandomImageForMovie(): string {
    return '../../../assets/images/' + (Math.floor(Math.random() * (40)) + 1) + '.jpeg';
  }


}
