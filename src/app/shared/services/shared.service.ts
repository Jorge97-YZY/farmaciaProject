import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getSexo() {
    return [
      { valor: 'M', desc: 'Masculino' },
      { valor: 'F', desc: 'Femenino' }
    ];
  }
}
