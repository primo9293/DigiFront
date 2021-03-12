import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DigitalService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getUrl(data: string) {
    return `${this.url}${data}`
  }

  getProductos(point: string){
    let base_url = this.getUrl(point)
    return this.http.get(base_url)
  }

  getInventarios(point: string){
    let base_url = this.getUrl(point)
    return this.http.get(base_url)
  }

  getClientes(point: string){
    let base_url = this.getUrl(point)
    return this.http.get(base_url)
  }

   getVenta(point: string){
    let base_url = this.getUrl(point)
    return this.http.get(base_url)
  }
}
