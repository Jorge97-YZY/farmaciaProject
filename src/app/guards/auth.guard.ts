import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log('AuthGuard');

    if (this.authService.utilizadorEstaAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);

    return false;
  }
  private verificarAcesso() {
    if (this.authService.utilizadorEstaAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);

    return false;
  }
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    console.log('CanLoad: Verificando se o Usuario Pode Carregar o code Modulo');

    return this.verificarAcesso();
  }
}
