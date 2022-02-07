import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesAppComponent } from './quotes-app/quotes-app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesAppComponent,
    QuotesComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
