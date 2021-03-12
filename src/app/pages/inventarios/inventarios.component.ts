import { Component, OnInit } from '@angular/core';
import { DigitalService } from '../../services/digital.service';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.css']
})
export class InventariosComponent implements OnInit {

  inventario: any

  constructor(private digitalService: DigitalService) { }

  ngOnInit(): void {
    this.obtenerInventarios()
  }

  obtenerInventarios(){
    console.log('EntroInv');
    let api = '/api/Inventario/Inven'
    this.digitalService.getInventarios(api)
      .subscribe( (resp: any[]) => {
        this.inventario = resp
        // console.log('respuesta',resp);
        console.log('this.inventario',this.inventario);
      })
  }

}
