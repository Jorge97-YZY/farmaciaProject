import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioListarComponent } from './funcionario-listar/funcionario-listar.component';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioEditarComponent } from './funcionario-editar/funcionario-editar.component';
import { FuncionariosGuard } from './guards/funcionarios.guard';


const funcionarioroutes: Routes = [
    {path: '', component: FuncionarioListarComponent, canActivateChild: [FuncionariosGuard], children: [
        {path: 'novo', component: FuncionarioCadastroComponent},
        {path: ':id/editar', component: FuncionarioEditarComponent}
    ] }
];

@NgModule({
    imports: [RouterModule.forChild(funcionarioroutes)],
exports: [RouterModule],
    declarations: [],
    providers: [FuncionariosGuard]
})
export class FuncionarioRouterModule { }
