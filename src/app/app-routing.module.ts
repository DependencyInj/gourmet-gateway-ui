import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'gourmet', pathMatch:'full'
  },
  {
    path: 'gourmet',
    children:[
      {
        path:'',
        loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
