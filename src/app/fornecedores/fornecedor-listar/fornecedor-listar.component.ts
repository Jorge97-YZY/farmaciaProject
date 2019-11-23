import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../model/fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-listar',
  templateUrl: './fornecedor-listar.component.html',
  styleUrls: ['./fornecedor-listar.component.css']
})
export class FornecedorListarComponent implements OnInit {
  fornecedores: any[];
  filtro: string;
  id: number;
  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.fornecedorListar();
    // this.fornecedores = this.fornecedorService.fornList();
    this.obterFornecedor();
  }
  /*fornecedorListar() {
    this.fornecedorService.listaFornecedor().subscribe(res => {
      this.fornecedores = res;
    });
  }*/
  cadastro() {
    this.router.navigate(['/fornecedor', 'novo']);
  }
  obterFornecedor() {
    this.fornecedores = this.fornecedorService.fornList();
    if (this.fornecedores.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.fornecedores;
    }
    return this.fornecedores.filter((v) => {
      if (v.nome.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }
}
