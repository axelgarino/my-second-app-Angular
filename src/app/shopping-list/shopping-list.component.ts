import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredients} from "../shared/ingredients.model";
import {ShoppingListServices} from "./shopping-list.services";
import {Subscription} from "rxjs";
import {LoggingServices} from "../logging.services";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{

  ingredients: Ingredients[];
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListServices,
              private loggingService: LoggingServices) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit')
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe()
  }


}
