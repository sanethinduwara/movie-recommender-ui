import {MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from './model/movie.model';
import { User } from './model/user.model';
import { AuthenticationService } from './service/authentication.service';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  currentUser: any = null;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(u => {this.currentUser = u});
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}

