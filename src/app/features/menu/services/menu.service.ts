import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MenuItem } from "../models/menu-item.model";
import { MenuType } from "../models/menu-type.model";


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

    getMenuTypes(): Observable<MenuType[]>{
        const url = `${this.baseUrl}/menu-types`;
        return this.http.get<MenuType[]>(url);
    }

    addMenuItem(payload: MenuType): Observable<string> {
        const url = `${this.baseUrl}/add`;
        return this.http.post<string>(url, payload);
    }
}