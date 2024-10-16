import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Objeto que contiene los valores de login
  formLogin = {
    rut: "", // Aquí lo puedes renombrar si prefieres a algo como 'nombre' en lugar de 'rut'
    password: ""
  }

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  async iniciarSesion() {
    // Llamamos al método de validación
    if (this.validarDatos()) {
      console.log("Nombre: " + this.formLogin.rut);
      console.log("Contraseña: " + this.formLogin.password);

      // Creamos los datos que queremos enviar
      let datosEnviar: NavigationExtras = {
        queryParams: {
          rutUsuario: this.formLogin.rut, // Aquí podrías cambiar 'rutUsuario' a 'nombreUsuario' si lo prefieres
          edad: 24 // Puedes añadir más datos si es necesario
        }
      }

      // Redirigimos al usuario al home si la validación es correcta
      this.router.navigate(['/home'], datosEnviar);
    }
  }

  validarDatos(): boolean {
    const { rut, password } = this.formLogin;

    // Validar que el nombre y la contraseña no estén vacíos
    if (!rut || !password) {
      this.presentAlert('Error', 'Por favor, ingrese su nombre y contraseña.');
      return false;
    }

    // Validar que el nombre solo contenga letras y espacios
    const nombreRegex = /^[a-zA-Z\s]+$/;
    if (!nombreRegex.test(rut)) {
      this.presentAlert('Error', 'El nombre solo debe contener letras.');
      return false;
    }

    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.length < 6) {
      this.presentAlert('Error', 'La contraseña debe tener al menos 6 caracteres.');
      return false;
    }

    return true; // Retorna true si todos los datos son válidos
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
