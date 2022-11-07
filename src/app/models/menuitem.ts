export class MenuItem {
    public id: number;
    public prize: number;
    public name: string;
    public rating: number = 0;
    public imageUrl: string

    /**
     * Initilize food item
     */
    constructor(id: number, prize: number, name: string, rating: number, imageurl: string) {
        this.id = id;
        this.prize = prize;
        this.name = name;
        this.rating = rating;
        this.imageUrl = imageurl;
    }
}

