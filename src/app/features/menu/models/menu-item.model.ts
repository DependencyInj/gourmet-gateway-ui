export class MenuItem {
    name!: string;
    description!: string;
    price!: number;
    type!: string;
    image!: string;

    constructor(data: any){
        this.name = data.name;
        this.description = data.description;
        this.price = data.price;
        this.type = data.type;
        this.image = data.image;
    }
}
