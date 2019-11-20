import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private urlFuncionarioListar = 'http://localhost:8080/funcionario/listar/todos';
  private urlFuncionarioListarId = 'http://localhost:8080/funcionario/listar';
  private urlFuncionarioGuardar = 'http://localhost:8080/funcionario/guardar';
  private urlFuncionarioEditar = 'http://localhost:8080/funcionario/editar';
  private urlFuncionarioApagar = 'http://localhost:8080/funcionario/apagar';

  constructor( private http: HttpClient) { }
  public listarFuncionario(): Observable<any> {
    return this.http.get(`${this.urlFuncionarioListar}`);
  }
  public listarFuncionarioPorId(id: number): Observable<Object> {
    return this.http.get(`${this.urlFuncionarioListarId}/${id}`);
  }
  public guardarFuncionario(funcionario: Object): Observable<Object> {
    return this.http.post(`${this.urlFuncionarioGuardar}`, funcionario);
  }
  editarFuncionario( funcionario: Object): Observable<Object> {
    return this.http.put(`${this.urlFuncionarioEditar}`, funcionario);
  }
  apagarFuncionario(id: number): Observable<any> {
    return this.http.delete(`${this.urlFuncionarioApagar}/${id}`, { responseType: 'text' });
  }

}


