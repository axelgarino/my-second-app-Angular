import {EventEmitter, Injectable} from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import {Recipe} from "./recipe.model";
import {ShoppingListServices} from "../shopping-list/shopping-list.services";

@Injectable()
export class RecipeServices{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a simply test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      [
        new Ingredients('Meat',1),
        new Ingredients('French Fries',20)
      ]),
    new Recipe(
      'A test Recipe 2',
      'This is a simply test 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      [
        new Ingredients('Spaghetti',20),
        new Ingredients('French Fries',20)
      ])
  ];

  constructor(private shoppingListService: ShoppingListServices ) {
  }
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
