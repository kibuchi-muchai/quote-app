import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { AppComponent } from '../app.component';
import { QuoteDetailComponent } from '../quote-detail/quote-detail.component';
import { FormsModule } from '@angular/forms';
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-quotes-app',
  templateUrl: './quotes-app.component.html',
  styleUrls: ['./quotes-app.component.css']
})
export class QuotesAppComponent implements OnInit {
  ngOnInit(): void {
      
  }
  quotes: any;

    toggleDetails(index: string | number){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    deleteQuote(isComplete: any, index: any){
      if (isComplete) {
        let toDelete = confirm('Are you sure you want to delete ${this.quotes[index].name}?')

        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
    }
  
  



  ngOnInit(); void{}
  

  constructor( ) 



function ngOnInit() {
  throw new Error('Function not implemented.');
}

function constructor() {
  throw new Error('Function not implemented.');
}

