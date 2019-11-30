import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListarComponent } from './produto-listar/produto-listar.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';
import { ProdutoCadastrarComponent } from './produto-cadastrar/produto-cadastrar.component';
import { ProdutoRouringModule } from './produto.routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoListarComponent,
    ProdutoEditarComponent,
    ProdutoCadastrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    ProdutoRouringModule
  ]
})
export class ProdutosModule { }
