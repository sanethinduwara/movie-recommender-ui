import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  movieService : MovieService;
  currentUser: any = null;

  groups:any[] = []

  constructor(movieService : MovieService, private authService: AuthenticationService) {
    this.movieService = movieService;
    this.authService.currentUser.subscribe(u => this.currentUser = u);
    
  }

  ngOnInit(): void {
    this.movieService.getGroupsByUserId(this.currentUser.id).subscribe(res => {
      this.groups = res;
    })
  }

  // abc(a:any){
  //   return a.users.split(',');
  // }

}
