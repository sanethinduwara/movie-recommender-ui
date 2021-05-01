import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './service/authentication.service';

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
    this.authenticationService.currentUser.subscribe(u => {
      this.currentUser = u;
    });
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}

