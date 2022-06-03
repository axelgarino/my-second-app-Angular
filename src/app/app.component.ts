import {Component, OnInit} from '@angular/core';
import {AuthServices} from "./auth/auth.services";
import {LoggingServices} from "./logging.services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthServices,
              private loggingService: LoggingServices) {
  }
  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printLog('Hello from AppComponent ngOnInit')
  }

  // title = 'my-second-app';
  //
  // loadedFeeature = 'Recipe';
  //
  // show(feature: string){
  //   this.loadedFeeature = feature;
  // }
}
