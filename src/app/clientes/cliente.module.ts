import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteRoutingModule } from './cliente.routing.module';

@NgModule({
  declarations: [
    ClienteListarComponent,
    ClienteEditarComponent,
    ClienteCadastroComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
