import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../models/food';
import { PizzaFoodService } from '../services/pizza-food.service';

@Component({
  selector: 'app-pizza-home',
  templateUrl: './pizza-home.component.html',
  styleUrls: ['./pizza-home.component.css']
})
export class PizzaHomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: PizzaFoodService, private router: Router) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

  addPizza(): void {
    this.router.navigateByUrl('/createpizza')
  }
}
