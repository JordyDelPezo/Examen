import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage {
  nombre: string= '';
  email: string= '';
  telefono: string= '';
  fechaNacimiento: string= '';

  mostrarDatos() {
    if (this.validarFormulario()) {
      console.log('Nombre:', this.nombre);
      console.log('Correo Electrónico:', this.email);
      console.log('Teléfono:', this.telefono);
      console.log('Fecha de Nacimiento:', this.fechaNacimiento);
    } else {
      console.log('Por favor, complete todos los campos del formulario.');
    }
  }

  validarFormulario(): boolean {
    return !!this.nombre && !!this.email && !!this.telefono && !!this.fechaNacimiento;
  }
  validarNumero() {
    // Eliminar caracteres no numéricos
    let numeroLimpio = this.telefono.replace(/\D/g, '');

    // Verificar si hay exactamente 10 números
    if (numeroLimpio.length === 10) {
      console.log('Número válido:', numeroLimpio);
    } else {
      console.log('Número inválido. Debe contener 10 números.');
    }
  }
}
