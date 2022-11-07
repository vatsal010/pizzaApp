import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaSauce } from '../models/pizzasauce';
import { PizzaSize } from '../models/pizzasize';
import { PizzaFoodService } from '../services/pizza-food.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.css']
})
export class PizzaCreatorComponent implements OnInit {
  pizzaSizes: PizzaSize[] = [];
  pizzaSauces: PizzaSauce[] = [];

  constructor(private pizzaService: PizzaFoodService, private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.pizzaService.getPizzaSize().subscribe(resp => {
      this.pizzaSizes = resp;
    });
    this.pizzaService.getPizzaSauces().subscribe(resp => {
      this.pizzaSauces = resp;
    });
  }

  selectPizzaSize(pizzaSize: PizzaSize): void {
    this.sharedService.SelectedPizzaSize = pizzaSize;
    console.log("in selectPizzaSize()");
  }

  addExtraCheese(isExtraCheeseAdded: boolean): void {
    this.sharedService.IsExtraCheeseAdded = isExtraCheeseAdded;
    console.log("in extraCheese()");
  }

  selectPizzaSauce(pizzaSauce: PizzaSauce) {
    this.sharedService.SelectedPizzaSauce = pizzaSauce;
    console.log("in selectPizzaSauce()");
  }

  navigateToPreviousPage(): void {
    this.router.navigateByUrl('/pizzahome')
  }

  navigateToToppings(): void {
    this.router.navigateByUrl('/toppings');
  }
}
