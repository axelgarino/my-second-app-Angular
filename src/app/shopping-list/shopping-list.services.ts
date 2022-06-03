import {Ingredients} from "../shared/ingredients.model";
import {Subject} from "rxjs";

export class ShoppingListServices{

  ingredientsChanged = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();


  private ingredients: Ingredients[] = [
    new Ingredients('Apples',5),
    new Ingredients('Tomatoes',10),
    new Ingredients('Banana',50),
  ];

  getIngredients(){
    // return this.ingredients; ESTO ANDA SIN AGREGAR EL EMIT Y ESO
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }


  onAddIngredient(ingredient: Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredients[]){
    // for (let ingredient of ingredients){
    //   this.onAddIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredients){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
