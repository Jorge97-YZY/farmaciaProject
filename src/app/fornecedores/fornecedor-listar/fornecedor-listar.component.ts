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
  constructor(
    private fornecedorService: FornecedorService,
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.fornecedorListar();
    this.fornecedores = this.fornecedorService.fornList();
  }
  /*fornecedorListar() {
    this.fornecedorService.listaFornecedor().subscribe(res => {
      this.fornecedores = res;
    });
  }*/
  cadastro() {
    this.router.navigate(['/fornecedor', 'novo']);
  }

}
