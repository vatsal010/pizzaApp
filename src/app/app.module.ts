import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaHeaderComponent } from './pizza-header/pizza-header.component';
import { PizzaHomeComponent } from './pizza-home/pizza-home.component';
import { PizzaCreatorComponent } from './pizza-creator/pizza-creator.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PizzaHeaderComponent,
    PizzaHomeComponent,
    PizzaCreatorComponent,
    PizzaToppingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
