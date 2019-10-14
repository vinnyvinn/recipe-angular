import {Actions, Effect, ofType} from '@ngrx/effects';
import * as RecipeActions from './store/recipe.actions';
import {map, switchMap} from 'rxjs/operators';
import {Recipe} from './recipe.model';
import {HttpClient} from '@angular/common/http';
export class RecipeEffects {
@Effect()
recipeFetch = this.actions$.pipe(
   ofType(RecipeActions.FETCH_RECIPES),
  switchMap((action: RecipeActions.FetchRecipes) => {
    return this.http.get('https://vuejs-http-9d61f.firebaseio.com/recipes.json')
      .pipe(
        map((recipes) => {
          return {
            type: RecipeActions.SET_RECIPES,
            payload: recipes
          };
        })
      );
      })
)

  constructor(private actions$: Actions, private http: HttpClient) {}
}

