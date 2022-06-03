import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {DataStorageServices} from "../shared/data-storage.services";
import {AuthServices} from "../auth/auth.services";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() featureSelected = new EventEmitter<string>();

  collapsed = true;

  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageServices,
              private authService: AuthServices) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe( user =>{
      this.isAuthenticated = !!user; //es los mismo que usar => user ? false : true
    });
  }

  onLogout(){
    this.authService.logout();
  }

  onSaveData(){
    this.dataStorageService.storeRecipes()
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }

  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
