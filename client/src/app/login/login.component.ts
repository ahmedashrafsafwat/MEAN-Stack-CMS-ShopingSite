import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: '',
    isAdmin: false
  };

  constructor(private auth: AuthenticationService, private router: Router, private _flashMessagesService: FlashMessagesService) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      this._flashMessagesService.show('Please enter a valid email and password', { cssClass: 'alert-danger', timeout: 1000 });

      console.error(err);
    });
  }
}
