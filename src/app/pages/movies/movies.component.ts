import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieService } from 'src/app/service/movie.service';

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

  ngOnInit(){
    let img = '';
    this.movieService.getRandomImageForMovie().subscribe(z => {
    }, (err) => {
      img = err.url;
      this.movieService.getMovies().subscribe(res => {
        this.movies = res;
        this.movies.forEach(element => {
          element.imageUrl = img
        });
        this.allMovies = this.movies;
      })
    });
    
  }

  filterMoviesByName(event: any) {
    this.movies = this.allMovies.filter(m => m.movieTitle.toLowerCase().includes(event.target.value.toString().toLowerCase()))
  }

  getCategories(movie : any){
    let arr:string[] = []
    Object.getOwnPropertyNames(movie).forEach(key => {
      if(!['movieId'].includes(key)) {
        if (movie[key] === 1) {
          arr.push(key);
        }
      }
      
  });
  return arr;
  }

 

}
