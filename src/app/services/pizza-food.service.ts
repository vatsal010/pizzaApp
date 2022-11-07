import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuitem';
import { PizzaSauce } from '../models/pizzasauce';
import { PizzaSize } from '../models/pizzasize';
import { Topping } from '../models/topping';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { OrderRequest } from '../models/orderrequest';

@Injectable({
  providedIn: 'root'
})
export class PizzaFoodService {
  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': 'true'
  });

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  getDPizzaMenu(): Observable<MenuItem[]> {
    // API Call
    return this.http.get<MenuItem[]>('https://localhost:44363/dpizza/Getdpizzamenu', {
      headers: this.headers
    });
  }

  getPizzaSize(): Observable<PizzaSize[]> {
    return this.http.get<MenuItem[]>('https://localhost:44363/dpizza/getpizzasize', {
      headers: this.headers
    });
  }

  getPizzaToppings(): Observable<Topping[]> {
    return this.http.get<MenuItem[]>('https://localhost:44363/dpizza/getpizzatoppings', {
      headers: this.headers
    });
  }

  getPizzaSauces(): Observable<PizzaSauce[]> {
    return this.http.get<MenuItem[]>('https://localhost:44363/dpizza/getpizzasauces', {
      headers: this.headers
    });
  }

  PlaceOrder(): Observable<OrderRequest> {
    let order = new OrderRequest('', 0, this.sharedService.SelectedPizzaSize, this.sharedService.SelectedPizzaSauce, this.sharedService.SelectedToppings, this.sharedService.IsExtraCheeseAdded);
    return this.http.post<OrderRequest>('https://localhost:44363/orders', order, {
      headers: this.headers
    });
  }
}
