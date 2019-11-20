import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FornecedorListarComponent } from './fornecedor-listar/fornecedor-listar.component';
import { FornecedorCadastroComponent } from './fornecedor-cadastro/fornecedor-cadastro.component';
import { FornecedorEditarComponent } from './fornecedor-editar/fornecedor-editar.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedoresGuard } from './guards/fornecedores.guard';

const fornecedorroutes: Routes = [
   {path: '', component: FornecedorComponent, canActivateChild: [FornecedoresGuard], children: [
        {path: 'novo', component: FornecedorCadastroComponent},
        {path: 'list', component: FornecedorListarComponent},
        {path: ':id/editar', component: FornecedorEditarComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(fornecedorroutes)],
exports: [RouterModule],
    declarations: [],
    providers: [FornecedoresGuard]
})
export class ForncedorRoutingModule { }
