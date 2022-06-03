import {NgModule} from "@angular/core";
import {ShoppingListServices} from "./shopping-list/shopping-list.services";
import {RecipeServices} from "./recipes/recipe.services";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorServices} from "./auth/auth-interceptor.services";

@NgModule({
  providers: [ShoppingListServices, RecipeServices,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorServices, multi: true}]
})
export class CoreModule{}
