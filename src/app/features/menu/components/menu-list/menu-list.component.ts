import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  menuList: MenuItem[] = [];

  ngOnInit(){
    let menuItem = new MenuItem();
    menuItem.name = "Biriyani";
    menuItem.description = "Biriyani from the heart of kerala, calidut. The authentic taste of calicut biriyani, is something that you shouldn't miss out";
    menuItem.price = 180;
    menuItem.type = "Mughal";
    
    this.menuList = [menuItem, menuItem, menuItem];
  }
}
