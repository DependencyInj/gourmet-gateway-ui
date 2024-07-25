import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './components/drawer/drawer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    DrawerComponent
  ]
})
export class SharedModule { }
