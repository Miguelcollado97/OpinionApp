import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  email: string = '';            // Inicializa las propiedades
  newPassword: string = '';       // Inicializa las propiedades
  confirmPassword: string = '';   // Inicializa las propiedades

  constructor(private router: Router) {}

  // Nueva función restablecerContrasena en lugar de onSubmit
  restablecerContrasena() {
    if (!this.email || !this.newPassword || !this.confirmPassword) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Aquí deberías agregar la lógica para restablecer la contraseña
    alert('Contraseña restablecida con éxito');
    this.router.navigate(['/home']);  // Redirige a la página de inicio
  }
}
