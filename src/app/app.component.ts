import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';
import { Quotes } from './quotes';
import { QuotesAppComponent } from './quotes-app/quotes-app.component';
import { FormsModule } from '@angular/forms';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  quote: Quotes[] = [
    new Quotes(1,'Life is what happens when you are busy making other plans','Take a moment to enjoy life', new Date(2021,4,4)),
    new Quotes(2,'Turn your wounds into wisdom','emerge fearless out of a situation', new Date(2021,5,6)),
    new Quotes(3, 'Life is like reading a bicycle.To keep your balance,you must keep moving','dont ever give up', new Date(2021,7,8))


  ];
  quotes: any;
  addNewQuote(quote: { id: number;  name:string; showDescription:boolean; description:string ; completeDate:Date}){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    this.quotes.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
    
      
  
  
}