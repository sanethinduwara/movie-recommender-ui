import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authService: AuthenticationService;
  router: Router;

  constructor(authService: AuthenticationService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  loginToDashboard(value: any): void {
    console.log('please wait...');
    console.log(value);
    this.authService.login(value.username, '');
    this.router.navigate(['/']);
  }


}
