import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthServices} from "./auth.services";
import {Observable} from "rxjs";
import {map, take, tap} from "rxjs/operators";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthServices,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map(user => {
      // return !!user;
        const isAuth = !!user;
        if (isAuth){
         return true;
        }
        return this.router.createUrlTree(['/auth'])
    })
    // , tap(isAuth => {
    //   if (!isAuth){
    //     this.router.navigate(['/auth'])
    //   }
    // })
    );
  }
}
