import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { of } from 'rxjs/observable/of';
import { tap, catchError } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  item = {
    cat: '',
    img: '',
    name: '',
    describtion: '',
    price: null
  };
  details: UserDetails;
  Items: any ;
  message = '';
  selectedFile = null;

  constructor(private auth: AuthenticationService, private http: HttpClient, private _flashMessagesService: FlashMessagesService) {}
  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
    this.http.get('/api/profile/item' ).subscribe( data => {
      this.Items = data ;
      console.log(data);
      console.log('all items should be delivered');
            this._flashMessagesService.show('Failed to add the item !', { cssClass: 'alert-danger', timeout: 1000 });

    }, err => {
      console.log(err);
     // this.message = err.error.msg;
    });
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  enterItem() {
    console.log(this.item.name + ' ' + this.item.cat + ' ');
    this.http.post('/api/profile', this.item ).subscribe(res => {
      console.log(res);
      console.log('item sent to server successfully');
      this._flashMessagesService.show('Item added', { cssClass: 'alert-success', timeout: 1000 });

    }, err => {
      console.log(err);
      this._flashMessagesService.show('Failed to add the item !', { cssClass: 'alert-danger', timeout: 1000 });

     // this.message = err.error.msg;
    });
  }

}
