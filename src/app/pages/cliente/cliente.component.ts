import { Component, OnInit } from '@angular/core';
import { DigitalService } from '../../services/digital.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: any

  constructor(private digitalService: DigitalService) { }

  ngOnInit(): void {
    this.obtenerClientes()
  }

  obtenerClientes(){
    console.log('EntroCl');
    let api = '/api/Cliente/Clien'
    this.digitalService.getClientes(api)
      .subscribe( (resp: any[]) => {
        this.clientes = resp
        // console.log('respuesta',resp);
        console.log('this.clientes',this.clientes);
      })
  }

}
