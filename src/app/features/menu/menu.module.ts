import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuRouterModule } from './menu-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MatIconModule } from '@angular/material/icon';
import { AddMenuItemComponent } from './components/add-menu-item/add-menu-item.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    MenuHomeComponent,
    MenuListComponent,
    MenuItemComponent,
    AddMenuItemComponent
  ],
  imports: [
    CommonModule,
    MenuRouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTooltipModule,
    SharedModule
  ]
})
export class MenuModule { }
