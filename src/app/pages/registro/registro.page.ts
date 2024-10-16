import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Aquí puedes agregar la lógica para el registro
    console.log('Usuario:', this.username);
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);

    // Redirige al usuario a la página de inicio de sesión, por ejemplo
    this.router.navigate(['/login']);
  }
}
