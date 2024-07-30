import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuType } from '../../models/menu-type.model';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent {
  readonly dialogRef = inject(MatDialogRef<AddMenuItemComponent>);
  menuItemForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    desciption: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    url: new FormControl('', [Validators.required])
  });


  value = '';
  selectedValue: any;

  menuTypes: MenuType[] = [];

  constructor(private menuService: MenuService) {

  }

  ngOnInit() {
    this, this.getMenuTypes();
  }

  getMenuTypes() {
    this.menuService.getMenuTypes().subscribe({
      next: (resp) => {
        this.menuTypes = resp;
      }
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  submit(){
    console.log(this.menuItemForm.getRawValue());
  }
}
