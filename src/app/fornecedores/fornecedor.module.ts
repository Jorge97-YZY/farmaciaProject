import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ForncedorRoutingModule } from './fornecedor.routing.module';
import { FornecedorListarComponent } from './fornecedor-listar/fornecedor-listar.component';
import { FornecedorCadastroComponent } from './fornecedor-cadastro/fornecedor-cadastro.component';
import { FornecedorEditarComponent } from './fornecedor-editar/fornecedor-editar.component';
import { FornecedorService } from './fornecedor.service';
import { FornecedorComponent } from './fornecedor/fornecedor.component';


@NgModule({
  declarations: [
    FornecedorListarComponent,
    FornecedorCadastroComponent,
    FornecedorEditarComponent,
    FornecedorComponent
  ],
  imports: [
  CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ForncedorRoutingModule
  ],
  providers : [
    FornecedorService
  ]
})
export class FornecedorModule { }