import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, Input} from '@angular/core';
import {Ingredients} from "../../shared/ingredients.model";
import {ShoppingListServices} from "../shopping-list.services";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();
  // @Input() ingredientArray: any;


  constructor(private shoppingListService: ShoppingListServices) { }

  ngOnInit(){
  }

  onAddIng(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName,ingAmount);
    this.shoppingListService.onAddIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }

}
