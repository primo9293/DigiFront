import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages.routing';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [

    DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    PagesRoutingModule
  ],
  exports: [
  ]
})
export class PagesModule { }
