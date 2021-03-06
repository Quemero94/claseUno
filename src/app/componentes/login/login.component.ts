import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  Ingresar() {
    console.log(this.usuario);

    if (this.usuario.email === 'admin@mail.com' && this.usuario.pass === '1234') {
      //tiene que llevar al home
      this.route.navigate(['home']);
    } else {
      //tiene que llevar al Error
      this.route.navigate(['error']);
    }
  }
}
