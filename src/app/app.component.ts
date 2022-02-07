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
    {id:1, name:'Life is what happens when you are busy making other plans', description:'Take a moment to enjoy life'},
    {id:2, name:'Turn your wounds into wisdom',description:'emerge fearless out of a situation'},
    {id:3, name:'Life is like reading a bicycle.To keep your balance,you must keep moving',description:'dont ever give up'}

  ]
    
      
  
  
}