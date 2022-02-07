import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { AppComponent } from '../app.component';
import { QuoteDetailComponent } from '../quote-detail/quote-detail.component';

@Component({
  selector: 'app-quotes-app',
  templateUrl: './quotes-app.component.html',
  styleUrls: ['./quotes-app.component.css']
})
export class QuotesAppComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,'Life is what happens when you are busy making other plans','Take a moment to enjoy life'),
    new Quotes(2,'Turn your wounds into wisdom','emerge fearless out of a situation'),
    new Quotes(3, 'Life is like reading a bicycle.To keep your balance,you must keep moving','dont ever give up')

  ]



  ngOnInit(): void{}
  

  constructor( ) { }


}
