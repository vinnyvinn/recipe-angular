import firebase from '@firebase/app';
import '@firebase/auth';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as fromApp from '../../app/store/app.reducers';
import {Store} from '@ngrx/store';


@Injectable()
export class AuthService {
  token = '';

  constructor(private router: Router, private store: Store<fromApp.AppState>) {
  }

  signUpUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            this.token = token;
            this.router.navigate(['/']);
          });
      })
      .catch(error => console.log(error));
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
      firebase.auth().currentUser.getIdToken()
        .then(token => {
          this.token = token;
          this.router.navigate(['/']);
        });
    })
      .catch(error => console.log(error));
  }

  logoutUser() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    if (!firebase.auth().currentUser) {
       this.token = null;
    } else {
       firebase.auth().currentUser.getIdToken()
        .then((token: string) => this.token = token);
    }
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
