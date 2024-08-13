import { HttpClient, HttpHeaders } from "@angular/common/http";
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
        let header = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('access_token')}`);
        const url = `${this.baseUrl}/menus`;
        return this.http.get<MenuItem[]>(url, { headers: header});
    }

    getMenuTypes(): Observable<MenuType[]>{
        const url = `${this.baseUrl}/menu-types`;
        return this.http.get<MenuType[]>(url);
    }

    addMenuItem(payload: MenuItem): Observable<string> {
        const url = `${this.baseUrl}/add`;
        return this.http.post<string>(url, payload);
    }

    removeItem(menuItemId: number){
        const url = `${this.baseUrl}/delete?menuItemId=${menuItemId}`;
        return this.http.get<boolean>(url);
    }
}