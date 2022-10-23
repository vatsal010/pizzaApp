import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topping } from '../models/topping';
import { PizzaFoodService } from '../services/pizza-food.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {
  toppings: Topping[] = [];

  constructor(private foodService: PizzaFoodService, private router: Router) { }

  ngOnInit(): void {
    this.toppings = this.foodService.getPizzaToppings();
  }

  navigateToPreviousPage(): void {
    this.router.navigateByUrl('/createpizza')
  }

  placeorder(): void {
  }
}
