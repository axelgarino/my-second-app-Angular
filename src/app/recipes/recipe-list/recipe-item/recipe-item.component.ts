import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeServices} from "../../recipe.services";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeServices) { }

  ngOnInit(): void {
  }

  showInDetails(recipe){
    this.recipeService.recipeSelected.emit(this.recipe)
    // this.recipeSelected.emit();
  }

}
