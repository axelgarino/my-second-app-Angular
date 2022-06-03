import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeServices} from "../recipe.services";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipe: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeServices,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subscription =  this.recipeService.recipeChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipe = recipes;
        }
      )
    this.recipe = this.recipeService.getRecipes();
  }

  toNewMode(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
