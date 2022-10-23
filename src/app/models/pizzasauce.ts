export class PizzaSauce {
    public Id: number;
    public Prize: number;
    public Name: string;
    public ImageUrl: string

    /**
     * Initilize food item
     */
    constructor(id: number, prize: number, name: string, imageurl: string) {
        this.Id = id;
        this.Prize = prize;
        this.Name = name;
        this.ImageUrl = imageurl;
    }
}