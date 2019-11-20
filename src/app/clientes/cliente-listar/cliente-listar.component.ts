import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/cliente.model';
import { Observable } from 'rxjs';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  clientes: any[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    // this.clienteListar();
    this.clientes = this.clienteService.listaCli();
  }
  /*clienteListar() {
    this.clienteService.listarCliente().subscribe(res => {
      this.clientes = res;
    });
  }*/


}
