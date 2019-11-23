import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Fornecedor } from '../model/fornecedor.model';
import { FORNECEDORES } from './../mocks/fornecedor.mock';



@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  fornecedores: Fornecedor[] = FORNECEDORES;


    private urlFornecedoresListar = 'http://localhost:8080/fornecedor/listar/todos';
    private urlFornecedoresListarId = 'http://localhost:8080/fornecedor/listar';
    private urlFornecedoresGuardar = 'http://localhost:8080/fornecedor/guardar';
    private urlFornecedoresEditar = 'http://localhost:8080/fornecedor/editar';
    private urlFornecedoresApagar = 'http://localhost:8080/fornecedor/apagar';


    constructor(
        private http: HttpClient
    ) { }
    public listaFornecedor(): Observable<any> {
        return this.http.get(`${this.urlFornecedoresListar}`);
      }
      public listarFornecedorPorId(id: number): Observable<Object> {
        return this.http.get(`${this.urlFornecedoresListarId}/${id}`);
      }
      public guardarFornecedor(fornecedor: Object): Observable<Object> {
        return this.http.post(`${this.urlFornecedoresGuardar}`, fornecedor);
      }
      editarFornecedor( fornecedor: Object): Observable<Object> {
        return this.http.put(`${this.urlFornecedoresEditar}`, fornecedor);
      }
      apagarFornecedor(id: number): Observable<any> {
        return this.http.delete(`${this.urlFornecedoresApagar}/${id}`, { responseType: 'text' });
      }

       fornList() {
        return this.fornecedores;
      }
      listId(id: number) {
        for (let i = 0; i < this.fornecedores.length; i++) {
          const fornecedor = this.fornecedores[i];
          if (fornecedor.id === id) {
            return fornecedor;
          }
        }
        return null;
      }
      }
