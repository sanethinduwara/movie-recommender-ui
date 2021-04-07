import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  
  movies: Movie[] = [];
  movieService: MovieService;
  groups = [{groupId: 1}, {groupId: 2}, {groupId: 3}, {groupId: 4}, {groupId: 5}]
  isGroup:boolean = false;
  currentUser: any = null;

  constructor(movieService: MovieService, private authService:AuthenticationService) {
    this.movieService = movieService;
    this.authService.currentUser.subscribe(u => {this.currentUser = u});

  }

  ngOnInit(){
    this.isGroup = false;
    this.loadMoviesByIdAndType(this.currentUser.id, 'user');
  }

  loadMoviesByIdAndType(id: number, type: string){
    this.movieService.getRecommendedMoviesByIdAndType(id, type).subscribe(res => {
      this.movies = res;
      this.movies.forEach(element => {
        this.movieService.getRandomImageForMovie().subscribe(z => {
        }, (err) => {
          element.imageUrl = err.url;
        });
      });
    })
  }

  onToggleClick(){
    this.isGroup = !this.isGroup;
    if(this.isGroup) {
      this.loadMoviesByIdAndType(this.groups[0].groupId, 'group');
    } else {
      this.loadMoviesByIdAndType(this.currentUser.id, 'user');
    }
    
  }

  onGroupChange(event: any){
    console.log(event.value)
    this.loadMoviesByIdAndType(event.value, 'group');
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
  roundRating(rating: number){
    // return Math.round(rating).toFixed();
  }
}
