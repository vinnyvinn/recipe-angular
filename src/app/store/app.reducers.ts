import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  shoppingList: fromShoppingList.State;
  }

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.ShoppingListReducers
  }
