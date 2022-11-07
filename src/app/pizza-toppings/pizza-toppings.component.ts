import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Topping } from '../models/topping';
import { PizzaFoodService } from '../services/pizza-food.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {
  toppings: Topping[] = [];

  constructor(private foodService: PizzaFoodService, private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.foodService.getPizzaToppings().subscribe(resp => {
      this.toppings = resp;
    });
  }

  navigateToPreviousPage(): void {
    this.router.navigateByUrl('/createpizza')
  }

  addTopping(topping: Topping) {
    this.sharedService.AddTopping(topping);
    console.log("in addTopping()");
  }

  placeorder(): void {
    this.foodService.PlaceOrder().subscribe(resp => {
      console.log(`Order placed ${resp.Id}}`);
      console.log(`Total prize ${resp.Prize}}`);
    });
  }
}
