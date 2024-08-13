export class MenuItem {
    name!: string;
    description!: string;
    price!: number;
    type!: string;
    image!: string;
    menu_id!: number;

    constructor(data: any){
        this.name = data.name;
        this.description = data.description;
        this.price = data.price;
        this.type = data.type;
        this.image = data.image;
        this.menu_id = data.menu_id;
    }
}
