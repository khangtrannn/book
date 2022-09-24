import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookCardComponent } from './share/components/book-card/book-card.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgTiltModule } from '@geometricpanda/angular-tilt';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgTiltModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
