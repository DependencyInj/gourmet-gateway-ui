import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuRouterModule } from './menu-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    MenuHomeComponent,
    MenuListComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MenuRouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MenuModule { }
