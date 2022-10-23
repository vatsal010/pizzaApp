import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuitem';
import { PizzaSauce } from '../models/pizzasauce';
import { PizzaSize } from '../models/pizzasize';
import { Topping } from '../models/topping';

@Injectable({
  providedIn: 'root'
})
export class PizzaFoodService {

  constructor() { }

  getDPizzaMenu(): MenuItem[] {
    var foods: MenuItem[] = [
      new MenuItem(1, 19, 'Burger Meal', 4, '/assets/food-1.jpg'),
      new MenuItem(2, 8, 'Veg Pizza', 4, '/assets/food-2.jpg'),
      new MenuItem(3, 5, 'Noodles', 4, '/assets/food-3.jpg'),
      new MenuItem(4, 10, 'Paneer Pizza', 4, '/assets/food-4.jpg')
    ];
    return foods;
  }

  getPizzaSize(): PizzaSize[] {
    var foods: PizzaSize[] = [
      new PizzaSize(1, 2, 'Small (9")', '/assets/pizza-size.jpg'),
      new PizzaSize(2, 5, 'Medium (11")', '/assets/pizza-size.jpg'),
      new PizzaSize(3, 7, 'Large (13")', '/assets/pizza-size.jpg')
    ];
    return foods;
  }

  getPizzaToppings(): Topping[] {
    var foods: Topping[] = [
      new Topping(1, 2, 'anchovy', '/assets/toppings/anchovy.svg'),
      new Topping(2, 2, 'bacon', '/assets/toppings/bacon.svg'),
      new Topping(3, 2, 'basil', '/assets/toppings/basil.svg'),
      new Topping(4, 2, 'chili', '/assets/toppings/chili.svg'),
      new Topping(5, 2, 'mozzarella', '/assets/toppings/mozzarella.svg'),
      new Topping(6, 2, 'mushroom', '/assets/toppings/mushroom.svg'),
      new Topping(7, 2, 'olive', '/assets/toppings/olive.svg'),
      new Topping(8, 2, 'onion', '/assets/toppings/onion.svg'),
      new Topping(9, 2, 'pepper', '/assets/toppings/pepper.svg'),
      new Topping(10, 2, 'pepperoni', '/assets/toppings/pepperoni.svg'),
      new Topping(11, 2, 'sweetcorn', '/assets/toppings/sweetcorn.svg'),
      new Topping(12, 2, 'tomato', '/assets/toppings/tomato.svg')
    ];
    return foods;
  }

  getPizzaSauces(): Topping[] {
    var foods: PizzaSauce[] = [
      new PizzaSauce(1, 2, 'marinara', '/assets/sauces/sauce-1.jfif'),
      new PizzaSauce(2, 5, 'cheese', '/assets/sauces/sauce-2.jfif'),
      new PizzaSauce(3, 7, 'ranch', '/assets/sauces/sauce-3.jfif')
    ];
    return foods;
  }
}
