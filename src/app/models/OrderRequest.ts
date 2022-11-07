import { List } from "linqts";
import { PizzaSauce } from "./pizzasauce";
import { PizzaSize } from "./pizzasize";
import { Topping } from "./topping";

export class OrderRequest {
    public Id: string = '';
    public Prize: number = 0;
    public PizzaSize!: PizzaSize;
    public PizzaSauce!: PizzaSauce;
    public Toppings!: Topping[];
    public AddExtraCheese: boolean;

    /**
     * Initilize food item
     */
    constructor(id: string, prize: number, pizzaSize: PizzaSize, pizzaSauce: PizzaSauce, toppings: Topping[], addExtraCheese: boolean) {
        this.Id = id;
        this.Prize = prize;
        this.PizzaSize = pizzaSize;
        this.PizzaSauce = pizzaSauce;
        this.Toppings = toppings;
        this.AddExtraCheese = addExtraCheese;
    }
}
