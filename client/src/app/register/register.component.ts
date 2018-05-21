import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidationServiceService } from '../validation-service.service';
@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '',
    isAdmin: null
  };

  constructor(private auth: AuthenticationService, private router: Router, private _flashMessagesService: FlashMessagesService,
    private validateService: ValidationServiceService) {}

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      if(!this.validateService.validateRegister(this.credentials)){
        this._flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }
      if(!this.validateService.validateEmail(this.credentials.email)){
        this._flashMessagesService.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }
      this.router.navigateByUrl('/profile');
    }, (err) => {
      this._flashMessagesService.show('failed to regeister please try again.', { cssClass: 'alert-danger', timeout: 1000 });
      console.error(err);
    });
  }

}
