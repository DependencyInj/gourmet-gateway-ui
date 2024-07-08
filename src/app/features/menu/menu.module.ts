import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuRouterModule } from './menu-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    MenuHomeComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule,
    MenuRouterModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MenuModule { }
