import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ClientesGuard implements CanActivateChild {
    constructor() { }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        // console.log(route);
        // console.log(state);
        console.log('AlunosGuard: Guarda de rota Filha');

        if (state.url.includes('editar')) {
            // return false;
        }
        return true;
}
}

