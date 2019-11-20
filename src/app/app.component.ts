import { Component, OnInit } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'farmacia';
  mostrarMenu = false;
  constructor(private authService: AuthService) { }
ngOnInit() {
  this.authService.mostrarMenuEmitter.subscribe(
    mostar => this.mostrarMenu = mostar
  );
}
}
