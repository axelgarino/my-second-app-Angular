import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeServices} from "../recipe.services";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe[];

  constructor(private recipeService: RecipeServices) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipes();
  }

}
