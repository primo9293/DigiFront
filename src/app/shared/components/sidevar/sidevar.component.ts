import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxDrawerComponent } from 'devextreme-angular';

interface List {
  id: number;
  text: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-sidevar',
  templateUrl: './sidevar.component.html',
  styleUrls: ['./sidevar.component.css']
})
export class SidevarComponent implements OnInit {

  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;
  // navigation: List[];
  showSubmenuModes: string[] = ['slide', 'expand'];
  positionModes: string[] = ['left', 'right'];
  showModes: string[] = ['push', 'shrink', 'overlap'];
  text: string;
  selectedOpenMode: string = 'shrink';
  selectedPosition: string = 'left';
  selectedRevealMode: string = 'slide';
  isDrawerOpen: Boolean = true;
  elementAttr: any;

  navigation: List[] = [
    { id: 1, text: "Productos", icon: "product", url: "products" },
    { id: 2, text: "Inventarios", icon: "money", url: "inventarios" },
    { id: 3, text: "Clientes", icon: "group", url: "clientes" },
    { id: 4, text: "Ventas", icon: "card", url: "ventas" },
    { id: 5, text: "Reportes", icon: "chart", url: "" }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
        icon: 'menu',
        onClick: () => this.isDrawerOpen = !this.isDrawerOpen
    }
  }];


}
