import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  menuList: MenuItem[] = [];

  constructor(private menuService: MenuService){

  }
  ngOnInit(){
    this.getMenuList();
  }

  getMenuList(){
    this.menuService.getMenus().subscribe({
      next: (resp) => {
        this.menuList = resp;
      }
    });
  }
}
