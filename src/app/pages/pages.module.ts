import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevextremeModule } from '../devextreme/devextreme/devextreme.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { InventariosComponent } from './inventarios/inventarios.component';


@NgModule({
  declarations: [

    DashboardComponent,

    ProductsComponent,

    InventariosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    PagesRoutingModule,
    DevextremeModule,
    SharedModule
  ],
  exports: [
  ]
})
export class PagesModule { }
