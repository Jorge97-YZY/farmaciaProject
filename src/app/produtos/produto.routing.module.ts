import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoGuard } from './guards/produto.guard';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListarComponent } from './produto-listar/produto-listar.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';
import { ProdutoCadastrarComponent } from './produto-cadastrar/produto-cadastrar.component';

const produtoroutes: Routes = [
    {path: '', component: ProdutoComponent, canActivateChild: [ProdutoGuard], children: [
        {path: 'novo', component: ProdutoCadastrarComponent},
        {path: 'list', component: ProdutoListarComponent},
        {path: ':id/editar', component: ProdutoEditarComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(produtoroutes)],
exports: [],
    declarations: [],
    providers: [ProdutoGuard]
})
export class ProdutoRouringModule { }
