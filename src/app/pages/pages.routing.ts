import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { InventariosComponent } from './inventarios/inventarios.component';



const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
              path: 'products',
              component: ProductsComponent
          },
          {
            path: 'inventarios',
            component: InventariosComponent
        },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
