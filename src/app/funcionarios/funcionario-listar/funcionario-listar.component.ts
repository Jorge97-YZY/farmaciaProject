import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../../model/funcionario.model';

@Component({
  selector: 'app-funcionario-listar',
  templateUrl: './funcionario-listar.component.html',
  styleUrls: ['./funcionario-listar.component.css']
})
export class FuncionarioListarComponent implements OnInit {
funcionarios: Funcionario[];

  constructor( private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarioListar();
  }
  funcionarioListar() {
    this.funcionarioService.listarFuncionario().subscribe(res => {
      this.funcionarios = res;
    });
  }
}
