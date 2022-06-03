import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Recipe} from "./recipe.model";
import {DataStorageServices} from "../shared/data-storage.services";
import {RecipeServices} from "./recipe.services";

@Injectable({providedIn: 'root'})
export class RecipeResolverServices implements Resolve<Recipe[]>{

  constructor(private dataStorageService: DataStorageServices,
              private recipeService: RecipeServices) {
  }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    const recipe = this.recipeService.getRecipes()

    if(recipe.length === 0){
      return this.dataStorageService.fetchRecipes()
    }else{
      return recipe
    }
  }

}
