import { Injectable } from '@angular/core';
import { PizzaSauce } from '../models/pizzasauce';
import { PizzaSize } from '../models/pizzasize';
import { List } from 'linqts';
import { Topping } from '../models/topping';

@Injectable({
  providedIn: 'root'
})
export class SharedService {  
  private _selectedPizzaSize!: PizzaSize;

  public get SelectedPizzaSize() : PizzaSize {
    return this._selectedPizzaSize;
  }
  public set SelectedPizzaSize(pizzaSize : PizzaSize) {
    this._selectedPizzaSize = pizzaSize;
  }

  private _isExtraCheeseAdded!: boolean;

  public get IsExtraCheeseAdded() : boolean {
    return this._isExtraCheeseAdded;
  }
  public set IsExtraCheeseAdded(pizzaSize : boolean) {
    this._isExtraCheeseAdded = pizzaSize;
  }

  private _selectedPizzaSauce!: PizzaSauce;

  public get SelectedPizzaSauce() : PizzaSauce {
    return this._selectedPizzaSauce;
  }
  public set SelectedPizzaSauce(pizzaSauce : PizzaSauce) {
    this._selectedPizzaSauce = pizzaSauce;
  }
  
  private _selectedToppings: List<Topping> = new List<Topping>();

  public get SelectedToppings() : Topping[] {
    return this._selectedToppings.ToArray();
  }  
  public AddTopping(pizzaSauce : Topping) {
    let isExisting = this._selectedToppings.Where(x => x?.id == pizzaSauce.id).Any();
    if (!isExisting) {
      this._selectedToppings.Add(pizzaSauce);
    }
  }

  constructor() { }
}
