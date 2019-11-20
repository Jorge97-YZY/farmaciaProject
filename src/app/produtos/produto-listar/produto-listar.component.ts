import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {

  produtos: any[];
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtos = this.produtoService.list();
  }

}
