import {Component, OnInit} from '@angular/core';

import firebase from '@firebase/app';
import '@firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  onNavigation(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB_Jdm4kAZf4fFNnGhJgYuMjEWjW0JdLeE",
      authDomain: "vuejs-http-9d61f.firebaseapp.com",
    });
  }
}
