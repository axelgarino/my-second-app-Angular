import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-app';

  loadedFeeature = 'Recipe';

  show(feature: string){
    this.loadedFeeature = feature;
  }
}
