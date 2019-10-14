import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as shoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../../app/store/app.reducers';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private slService: ShoppingListService, private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    }
  onEdit(index: number) {
    this.store.dispatch(new shoppingListActions.StartEdit(index));
  }
}
