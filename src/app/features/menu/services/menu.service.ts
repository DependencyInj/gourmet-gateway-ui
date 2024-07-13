import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MenuItem } from "../models/menu-item.model";


@Injectable({
    providedIn: 'root'
})
export class MenuService {
    baseUrl = "https://localhost:7159/api";

    constructor(private http: HttpClient) { }

    getMenus(): Observable<MenuItem[]> {
        const url = `${this.baseUrl}/menus`
        return this.http.get<MenuItem[]>(url);
    }
}