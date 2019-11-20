import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';
import { CLIENTE } from './../mocks/cliente.mocks';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientes: Cliente[] = CLIENTE;

  private urlClienteListar = 'http://localhost:8080/cliente/listar/todos';
  private urlClienteListarId = 'http://localhost:8080/cliente/listar';
  private urlClienteGuardar = 'http://localhost:8080/cliente/guardar';
  private urlClienteEditar = 'http://localhost:8080/cliente/editar';
  private urlClienteApagar = 'http://localhost:8080/cliente/apagar';

  constructor(
    private http: HttpClient
  ) { }

  public listarCliente(): Observable<any> {
    return this.http.get(`${this.urlClienteListar}`);
  }
  public listarClientePorId(id: number): Observable<Object> {
    return this.http.get(`${this.urlClienteListarId}/${id}`);
  }
  public guardarCliente(cliente: Object): Observable<Object> {
    return this.http.post(`${this.urlClienteGuardar}`, cliente);
  }
  editarCliente(cliente: Object): Observable<Object> {
    return this.http.put(`${this.urlClienteEditar}`, cliente);
  }
  apagarCliente(cliente: Cliente): Observable<any> {
    return this.http.post(`${this.urlClienteApagar} `, cliente);
  }

  listaCli() {
    return this.clientes;

  }
}
