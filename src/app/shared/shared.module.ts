import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidevarComponent } from './components/sidevar/sidevar.component';
import { DevextremeModule } from '../devextreme/devextreme/devextreme.module';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [
    SidevarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    DevextremeModule,
    RouterModule
  ],
  exports: [
    SidevarComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }
