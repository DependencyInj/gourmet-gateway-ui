import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MenuHomeComponent } from "./components/menu-home/menu-home.component";
import { MenuListComponent } from "./components/menu-list/menu-list.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'prefix'
    },
    {
        path: 'menu',
        component: MenuHomeComponent,
        children: [
            {
                path:'list',
                component: MenuListComponent
            }
        ]
    }
];


@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})

export class MenuRouterModule {}