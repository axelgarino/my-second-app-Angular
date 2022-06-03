import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, Input, OnDestroy} from '@angular/core';
import {Ingredients} from "../../shared/ingredients.model";
import {ShoppingListServices} from "../shopping-list.services";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{

  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();
  // @Input() ingredientArray: any;

  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;


  constructor(private shoppingListService: ShoppingListServices) { }

  ngOnInit(){
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      )
  }

  onSubmit(form: NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    console.log(form.value)
    const value = form.value;
    const newIngredient = new Ingredients(value.name,value.amount);
    if (!this.editMode){
      this.shoppingListService.onAddIngredient(newIngredient);
    }else{
      this.shoppingListService.updateIngredient(this.editedItemIndex ,newIngredient)
    }
    this.editMode = false;
    form.reset();

    // this.ingredientAdded.emit(newIngredient);
  }

  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
