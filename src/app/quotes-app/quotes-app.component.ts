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
  quotes: any;

    toggleDetails(index: string | number){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
  
  



  ngOnInit(): void{}
  

  constructor( ) { }


}
