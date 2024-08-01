import { Component, inject } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { AddMenuItemComponent } from '../add-menu-item/add-menu-item.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  menuList: MenuItem[] = [];
  readonly dialog = inject(MatDialog);

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


  openDialog() {
    const dialogRef = this.dialog.open(AddMenuItemComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getMenuList();
    });
  }
}
