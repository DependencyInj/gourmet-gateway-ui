import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuType } from '../../models/menu-type.model';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent {
  value = '';
  selectedValue: any;

  menuTypes: MenuType[] = [];

  constructor(private menuService: MenuService){

  }

  ngOnInit(){
    this,this.getMenuTypes();
  }

  getMenuTypes(){
    this.menuService.getMenuTypes().subscribe({
      next: (resp) => {
        this.menuTypes = resp;
      }
    });
  }
}
