import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaCreatorComponent } from './pizza-creator/pizza-creator.component';
import { PizzaHomeComponent } from './pizza-home/pizza-home.component';

const routes: Routes = [
  {path:'', component: PizzaHomeComponent},
  {path:'createpizza', component: PizzaCreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
