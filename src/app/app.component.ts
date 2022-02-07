import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';
import { QuotesAppComponent } from './quotes-app/quotes-app.component'
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  quote: Quotes[] = [
    {id:1, name:'Life is what happens when you are busy making other plans'},
    {id:2, name:'Turn your wounds into wisdom'},
    {id:3, name:'Life is like reading a bicycle.To keep your balance,you must keep moving'}
  ]
    
      
  
  
}