import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaCreatorComponent } from './pizza-creator/pizza-creator.component';
import { PizzaHomeComponent } from './pizza-home/pizza-home.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

const routes: Routes = [
  {path:'', component: PizzaHomeComponent},
  {path:'createpizza', component: PizzaCreatorComponent},
  {path:'toppings', component: PizzaToppingsComponent},
  {path:'pizzahome', component: PizzaHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
