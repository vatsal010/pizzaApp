import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaSauce } from '../models/pizzasauce';
import { PizzaSize } from '../models/pizzasize';
import { PizzaFoodService } from '../services/pizza-food.service';

@Component({
  selector: 'app-pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.css']
})
export class PizzaCreatorComponent implements OnInit {
  pizzaSizes: PizzaSize[] = [];
  pizzaSauces: PizzaSauce[] = [];

  constructor(private pizzaService: PizzaFoodService, private router: Router) { }

  ngOnInit(): void {
    this.pizzaSizes = this.pizzaService.getPizzaSize();
    this.pizzaSauces = this.pizzaService.getPizzaSauces();
  }

  extraCheese(isExtraCheeseAdded: boolean): void {
  }

  navigateToPreviousPage(): void {
    this.router.navigateByUrl('/pizzahome')
  }

  navigateToToppings(): void {
    this.router.navigateByUrl('/toppings');
  }
}
