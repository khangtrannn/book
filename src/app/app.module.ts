import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookCardComponent } from './share/components/book-card/book-card.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgTiltModule } from '@geometricpanda/angular-tilt';
import { BookListComponent } from './share/components/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookListComponent,
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
