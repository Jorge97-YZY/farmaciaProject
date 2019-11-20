import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListarComponent } from './cliente-listar/cliente-listar.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClientesGuard } from './guards/clientes.guard';
import { ClienteComponent } from './cliente/cliente.component';

const clienteroutes: Routes = [
    {path: '', component: ClienteComponent, canActivateChild: [ClientesGuard], children: [
        {path: 'novo', component: ClienteCadastroComponent},
        {path: 'list', component: ClienteListarComponent},
        {path: ':id/editar', component: ClienteEditarComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(clienteroutes)],
exports: [RouterModule],
    declarations: [],
    providers: [ClientesGuard]
})
export class ClienteRoutingModule { }
