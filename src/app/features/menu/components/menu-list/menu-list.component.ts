import { Component, inject } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { AddMenuItemComponent } from '../add-menu-item/add-menu-item.component';
import { LoaderBarService } from 'src/app/features/shared/services/loader-bar.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  menuList: MenuItem[] = [];
  readonly dialog = inject(MatDialog);

  constructor(private menuService: MenuService,
    private loaderSvc: LoaderBarService){

  }
  ngOnInit(){
    this.getMenuList();
  }

  getMenuList(){
    this.loaderSvc.show();
    this.menuService.getMenus().subscribe({
      next: (resp) => {
        this.menuList = resp;
      },
      complete: () => {
        this.loaderSvc.hide();
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
