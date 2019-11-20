import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioListarComponent } from './funcionario-listar/funcionario-listar.component';
import { FuncionarioEditarComponent } from './funcionario-editar/funcionario-editar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FuncionarioCadastroComponent, FuncionarioListarComponent, FuncionarioEditarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FuncionarioModule { }
