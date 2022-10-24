import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../models/menuitem';
import { PizzaFoodService } from '../services/pizza-food.service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-pizza-home',
  templateUrl: './pizza-home.component.html',
  styleUrls: ['./pizza-home.component.css']
})
export class PizzaHomeComponent implements OnInit {
  foods: MenuItem[] = [];

  constructor(private foodService: PizzaFoodService, private router: Router) { }

  ngOnInit(): void {
    this.foodService.getDPizzaMenu()
      .subscribe(resp => {
        this.foods = resp;
      });;
  }

  createPizza(): void {
    this.router.navigateByUrl('/createpizza')
  }
}
