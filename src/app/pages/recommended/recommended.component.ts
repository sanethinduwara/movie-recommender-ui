import {Component, OnInit} from '@angular/core';
import {Movie} from 'src/app/model/movie.model';
import {AuthenticationService} from 'src/app/service/authentication.service';
import {MovieService} from 'src/app/service/movie.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  movies: Movie[] = [];
  movieService: MovieService;
  groups: any[] = [];
  isGroup = false;
  currentUser: any = null;
  loading = false;

  constructor(movieService: MovieService, private authService: AuthenticationService) {
    this.movieService = movieService;
    this.authService.currentUser.subscribe(u => {
      this.currentUser = u;
    });

  }

  ngOnInit(): void {
    this.isGroup = false;
    this.loadMoviesByIdAndType(this.currentUser.id, 'user');
    this.loadGroupsForUser(this.currentUser.id);
  }

  loadMoviesByIdAndType(id: number, type: string): void {
    this.loading = true;
    this.movieService.getRecommendedMoviesByIdAndType(id, type).subscribe(res => {
      this.movies = res;
      this.movies.forEach(element => {
        element.imageUrl = this.getRandomImageForMovie();
      });
      this.loading = false;
    });
  }

  loadGroupsForUser(id: number): void {
    this.movieService.getGroupsByUserId(id).subscribe((res: any) => {
      this.groups = res;
    });
  }

  onToggleClick(): void {
    this.isGroup = !this.isGroup;
    if (this.isGroup) {
      this.loadMoviesByIdAndType(this.groups[0].groupId, 'group');
    } else {
      this.loadMoviesByIdAndType(this.currentUser.id, 'user');
    }

  }

  onGroupChange(event: any): void {
    this.loadMoviesByIdAndType(event.value, 'group');
  }

  getCategories(movie: any): any[] {
    return movie.genre.split('|');
  }

  getRandomImageForMovie(): string {
    return '../../../assets/images/' + (Math.floor(Math.random() * (40)) + 1) + '.jpeg';
  }

}
