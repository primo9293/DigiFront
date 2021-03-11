import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule } from 'devextreme-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxButtonModule,
    DxDrawerModule, 
    DxListModule, 
    DxRadioGroupModule, 
    DxToolbarModule
  ],
  exports: [
    DxButtonModule,
    DxDrawerModule, 
    DxListModule, 
    DxRadioGroupModule, 
    DxToolbarModule
  ]
})
export class DevextremeModule { }
