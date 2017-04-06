import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-gallery',
  host: {'(window:keydown)':'hotkeys($event)'},
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  selectedImage;
  @Input() images;
  constructor() { }

  ngOnInit() {
  }

  hotkeys(event) {
    if(this.selectedImage) {
     switch (event.keyCode) {
       case 37: {
         this.navigate(false);
         break;
       }
       case 39: {
         this.navigate(true);
         break;
       }
     }

    }
  }

  setSelectedImage(image) {
    this.selectedImage = image;
  }
  navigate(forward: boolean) {
    let index = this.images.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (index >= 0 && index < this.images.length) {
      this.selectedImage = this.images[index];  
    }
  }

}
