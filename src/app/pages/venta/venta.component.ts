import { Component, OnInit } from '@angular/core';
import { DigitalService } from '../../services/digital.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  ventas: any[]

  constructor(private digitalService: DigitalService) { }

  ngOnInit(): void {
    this.obtenerVentas()
  }

  obtenerVentas(){
    console.log('EntroVentas');
    let api = '/api/Venta/Vent'
    this.digitalService.getProductos(api)
      .subscribe( (resp: any[]) => {
        this.ventas = resp
        // console.log('respuesta',resp);
        // console.log('this.ventas',this.ventas);
      })
  }

}
