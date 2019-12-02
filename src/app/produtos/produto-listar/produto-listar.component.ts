import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {

  produtos: any[];
  filtro: string;
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.obterProduto();
  }
  obterProduto() {
    this.produtos = this.produtoService.list();
    if (this.produtos.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.produtos;
    }
    return this.produtos.filter((v) => {
      if (v.descricao.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

}
