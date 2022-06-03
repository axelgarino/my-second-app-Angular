import {EventEmitter, Injectable} from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import {Recipe} from "./recipe.model";
import {ShoppingListServices} from "../shopping-list/shopping-list.services";
import {Subject} from "rxjs";

@Injectable()
export class RecipeServices{

  recipeSelected = new Subject<Recipe>();

  recipeChanged = new Subject<Recipe[]>()

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A test Recipe',
  //     'This is a simply test',
  //     'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
  //     [
  //       new Ingredients('Meat',1),
  //       new Ingredients('French Fries',20)
  //     ]),
  //   new Recipe(
  //     'A test Recipe 2',
  //     'This is a simply test 2',
  //     'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
  //     [
  //       new Ingredients('Spaghetti',20),
  //       new Ingredients('French Fries',20)
  //     ])
  // ];

  private recipes: Recipe[] = []

  constructor(private shoppingListService: ShoppingListServices ) {
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
