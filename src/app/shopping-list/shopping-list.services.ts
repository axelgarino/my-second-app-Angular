import { EventEmitter } from "@angular/core";
import {Ingredients} from "../shared/ingredients.model";

export class ShoppingListServices{

  ingredientsChanged = new EventEmitter<Ingredients[]>();


  private ingredients: Ingredients[] = [
    new Ingredients('Apples',5),
    new Ingredients('Tomatoes',10),
    new Ingredients('Banana',50),
  ];

  getIngredients(){
    // return this.ingredients; ESTO ANDA SIN AGREGAR EL EMIT Y ESO
    return this.ingredients.slice();
  }


  onAddIngredient(ingredient: Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredients[]){
    // for (let ingredient of ingredients){
    //   this.onAddIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
