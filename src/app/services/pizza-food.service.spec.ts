import { TestBed } from '@angular/core/testing';

import { PizzaFoodService } from './pizza-food.service';

describe('PizzaFoodService', () => {
  let service: PizzaFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
