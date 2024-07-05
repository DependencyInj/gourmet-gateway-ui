import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'gourmet/home', pathMatch:'full'
  },
  {
    path: 'gourmet',
    children:[
      {
        path:'home',
        loadChildren: () => import('./features/table-home/table-home.module').then(m => m.TableHomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
