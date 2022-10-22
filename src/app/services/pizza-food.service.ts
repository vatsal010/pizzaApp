import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { PizzaSize } from '../models/pizzasize';

@Injectable({
  providedIn: 'root'
})
export class PizzaFoodService {

  constructor() { }

  getAll():Food[]{
    var foods: Food[] = [
      new Food(1, 19, 'Burger Meal', 4, '/assets/food-1.jpg'),
      new Food(2, 8, 'Veg Pizza', 4, '/assets/food-2.jpg'),
      new Food(3, 5, 'Noodles', 4, '/assets/food-3.jpg'),
      new Food(4, 10, 'Paneer Pizza', 4, '/assets/food-4.jpg')
    ];
    return foods;
  }

  getPizzaSize():PizzaSize[]{
    var foods: PizzaSize[] = [
      new PizzaSize(1, 2, 'Small (9")', '/assets/pizza-size.jpg'),
      new PizzaSize(2, 5, 'Small (11")', '/assets/pizza-size.jpg'),
      new PizzaSize(3, 7, 'Small (12")', '/assets/pizza-size.jpg')
    ];
    return foods;
  }
}
