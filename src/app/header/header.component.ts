import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../../app/store/app.reducers';
import {AuthService} from '../auth/auth.service';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorage: DataStorageService, private store: Store<fromApp.AppState>, private authService: AuthService) {}
  ngOnInit() {
    console.log(this.authService.getToken());
  }

  onSaveData() {
 this.dataStorage.storeRecipes()
   .subscribe(
     (response) => console.log(response)
   );
  }
  onFetchData() {
    this.dataStorage.getRecipes();
  }
  onLogout() {
    this.authService.logoutUser();
  }
}
