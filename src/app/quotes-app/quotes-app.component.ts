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
    {id:1, name:'Life is what happens when you are busy making other plans',description:'Take a moment to enjoy life'},
    {id:2, name:'Turn your wounds into wisdom',description:'emerge fearless out of a situation'},
    {id:3, name:'Life is like reading a bicycle.To keep your balance,you must keep moving',description:'dont ever give up'}

  ]



  ngOnInit(): void{}
  

  constructor( ) { }


}
