import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { MenuService } from '../../services/menu.service';
import { finalize } from 'rxjs';
import { LoaderBarService } from 'src/app/features/shared/services/loader-bar.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() menuItem!: MenuItem;

  constructor(private menuService: MenuService,
    private loaderService: LoaderBarService) {

  }

  deleteMenuItem() {
    this.loaderService.show();
    this.menuService.removeItem(this.menuItem.menu_id)
      .pipe(finalize(() => {
        this.loaderService.hide();
      }))
      .subscribe({
        next: (resp) => {

        }
      })
  }
}
