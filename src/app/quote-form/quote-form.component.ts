import { Quote } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import  {EventEmitter} from 'events';
import { AppComponent } from '../app.component';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  name!: string;
  description!: string;
  completeDate!: Date;
  
  newQuote = new QuoteFormComponent();
  @Output() addQuote = new EventEmitter ();eventemitter: any
  
  newQuotes!: string | symbol;

  submitQuote(){
    this.addQuote.emit('this.newQuotes');
  }

  constructor() { }

  ngOnInit(){
  }

}
