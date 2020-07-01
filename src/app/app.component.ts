import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M5-TH-PetInformation';
  petName = 'puppie';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  constructor() { }

  // tslint:disable-next-line:typedef
  updateName(name) {
    this.petName = name;
  }

  // tslint:disable-next-line:typedef
  updateImage(image) {
    this.petImage = image;
  }
}
