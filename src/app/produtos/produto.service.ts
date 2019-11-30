import { Injectable } from '@angular/core';

import { Produto } from './../model/produto.model';
import { PRODUTO } from './../mocks/produto.mock';
import { FornecedorService } from '../fornecedores/fornecedor.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = PRODUTO;

  constructor(  ) { }
  list() {
    return this.produtos;
  }


}
