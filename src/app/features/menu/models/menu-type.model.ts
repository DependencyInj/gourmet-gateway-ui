export class MenuType {
    name: string;
    code: string;
    description: string;

    constructor(data: MenuType){
        this.name = data.name;
        this.code = data.code;
        this.description = data.description;
    }
}