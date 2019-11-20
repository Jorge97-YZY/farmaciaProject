import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../model/user.model';
import { USERS } from '../mocks/uder.mock';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = USERS;

  utilizadorAutenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }
  fazerLogin(user: User) {
    const utili = this.users.filter((el) => {
      return el.nome === user.nome;
    });
    utili.forEach((elemento) => {
      if (user.nome === elemento.nome && user.senha === elemento.senha) {
        this.utilizadorAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
      } else {
        this.utilizadorAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        alert('Usuario ou a senha Incorrecta!');
      }
    });
  }
  utilizadorEstaAutenticado() {
    return this.utilizadorAutenticado;
  }

}
