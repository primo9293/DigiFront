import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxDrawerModule, DxListModule, DxRadioGroupModule, 
         DxToolbarModule,  DxDataGridModule, DxTemplateModule,
         DxLoadIndicatorModule } from 'devextreme-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxButtonModule,
    DxDrawerModule, 
    DxListModule, 
    DxRadioGroupModule, 
    DxToolbarModule,
    DxDataGridModule,
    DxTemplateModule,
    DxLoadIndicatorModule
  ],
  exports: [
    DxButtonModule,
    DxDrawerModule, 
    DxListModule, 
    DxRadioGroupModule, 
    DxToolbarModule,
    DxDataGridModule,
    DxTemplateModule,
    DxLoadIndicatorModule
  ]
})
export class DevextremeModule { }
