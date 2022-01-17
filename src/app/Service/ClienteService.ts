import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteActualizar = new Subject<Cliente[]>();
  
  constructor(private http: HttpClient) { }

  url=  'http://localhost:8080/clientes';

  listar(){ 
    return this.http.get<Cliente[]>(this.url);
  }
  eliminar(id: number){ 
    return this.http.delete(`${this.url}/${id}`);
  }

  editar(cliente: Cliente){
    return this.http.put(this.url, cliente);
  }
  registrar(cliente: Cliente){
    return this.http.post(this.url, cliente);
  }
}
