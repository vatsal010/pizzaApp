export class MenuItem {
    public Id: number;
    public Prize: number;
    public Name: string;
    public Rating: number = 0;
    public ImageUrl: string

    /**
     * Initilize food item
     */
    constructor(id: number, prize: number, name: string, rating: number, imageurl: string) {
        this.Id = id;
        this.Prize = prize;
        this.Name = name;
        this.Rating = rating;
        this.ImageUrl = imageurl;
    }
}