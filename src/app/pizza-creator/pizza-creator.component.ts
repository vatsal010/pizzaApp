import { Component, OnInit } from '@angular/core';
import { PizzaSize } from '../models/pizzasize';
import { PizzaFoodService } from '../services/pizza-food.service';

@Component({
  selector: 'app-pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.css']
})
export class PizzaCreatorComponent implements OnInit {
  pizzaSizes: PizzaSize[] = [];

  constructor(private pizzaService: PizzaFoodService) { }

  ngOnInit(): void {
    this.pizzaSizes = this.pizzaService.getPizzaSize();
  }

}
