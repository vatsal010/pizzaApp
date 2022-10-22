import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaHeaderComponent } from './pizza-header/pizza-header.component';
import { PizzaHomeComponent } from './pizza-home/pizza-home.component';
import { PizzaCreatorComponent } from './pizza-creator/pizza-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaHeaderComponent,
    PizzaHomeComponent,
    PizzaCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
