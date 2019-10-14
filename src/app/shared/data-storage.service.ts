import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
// import {AuthService} from '../auth/auth.service';
import {Recipe} from '../recipes/recipe.model';


@Injectable()
export class DataStorageService {
constructor(private http: HttpClient, private recipeService: RecipeService){}
storeRecipes() {
 //  const token = this.authService.geToken();
   return this.http.put('https://vuejs-http-9d61f.firebaseio.com/recipes.json', this.recipeService.getRecipes());
   }
   getRecipes() {
  // const token = this.authService.geToken();
  return this.http.get('https://vuejs-http-9d61f.firebaseio.com/recipes.json')
      .subscribe(
        (recipes: Recipe[]) => {
         this.recipeService.setRecipes(recipes);
        }
      );
  }
}
