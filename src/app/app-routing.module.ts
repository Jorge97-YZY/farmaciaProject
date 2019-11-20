import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cliente', loadChildren: './clientes/cliente.module#ClienteModule', canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'fornecedor', loadChildren: './fornecedores/fornecedor.module#FornecedorModule', canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'funcionario', loadChildren: './funcionarios/funcionario.module#FuncionarioModule', canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'produto', loadChildren: './produtos/produtos.module#ProdutosModule', canActivate: [AuthGuard], canLoad: [AuthGuard] }

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
