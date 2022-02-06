import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote :string[];

  constructor(){
    this.quote = ['The way to get started is to quit talking and begin doing', 'Life is what happens when you are busy making other plans', 'Whoever is happy will make others happy too']
  }
}
