import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private auth: AuthenticationService,
     private router: Router, private _flashMessagesService: FlashMessagesService) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      this._flashMessagesService.show('Please enter a valid email and password', { cssClass: 'alert-danger', timeout: 4000 });

      console.error(err);
    });
  }

  //loginFacebook() {
    // console.log('I am pressed!');
    // this.http.get('/api/auth/facebook/').subscribe(data => {
    //   console.log('facebook button sent a get request with data: ' + data);
    // }, (err) => {
    //   this._flashMessagesService.show('There was an error with facebook login request', { cssClass: 'alert-danger', timeout: 4000 });

    //   console.error(err);
    // });
  
 // }
}
