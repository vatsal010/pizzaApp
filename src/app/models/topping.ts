export class Topping {
    public id: number;
    public prize: number;
    public name: string;
    public imageUrl: string

    /**
     * Initilize food item
     */
    constructor(id: number, prize: number, name: string, imageurl: string) {
        this.id = id;
        this.prize = prize;
        this.name = name;
        this.imageUrl = imageurl;
    }
}