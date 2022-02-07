import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';
import { Quotes } from './quotes';
import { QuotesAppComponent } from './quotes-app/quotes-app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  quote: Quotes[] = [
    new Quotes(1,'Life is what happens when you are busy making other plans','Take a moment to enjoy life'),
    new Quotes(2,'Turn your wounds into wisdom','emerge fearless out of a situation'),
    new Quotes(3, 'Life is like reading a bicycle.To keep your balance,you must keep moving','dont ever give up')


  ]
    
      
  
  
}