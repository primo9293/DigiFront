import { Component, OnInit } from '@angular/core';
import { DigitalService } from '../../services/digital.service';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Producto[]

  constructor(private digitalService: DigitalService) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos(){
    console.log('Entro');
    let api = '/api/Producto/Produc'
    this.digitalService.getProductos(api)
      .subscribe( (resp: Producto[]) => {
        this.product = resp
        // console.log('respuesta',resp);
        // console.log('this.product',this.product);
      })
  }

}
