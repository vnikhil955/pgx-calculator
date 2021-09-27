import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PgxCalculatorModule } from './pgx-calculator/pgx-calculator.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PgxCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
