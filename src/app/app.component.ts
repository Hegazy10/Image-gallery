import { Component } from '@angular/core';
import { IMAGES } from './mock-images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  images;
  constructor() {
    this.images = IMAGES;
  }
}
