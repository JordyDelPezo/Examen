import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  fechaNacimiento: string = '';
  edad: number = 0;

  mostrarDatos() {
    if (this.validarFormulario()) {
      console.log('Nombre:', this.nombre);
      console.log('Correo Electrónico:', this.email);
      console.log('Teléfono:', this.telefono);
      console.log('Fecha de Nacimiento:', this.fechaNacimiento);

      // Llamar a la función calcularEdad() y mostrar la edad calculada
      this.calcularEdad();
    } else {
      console.log('Por favor, complete todos los campos del formulario.');
    }
  }

  validarFormulario(): boolean {
    return (
      !!this.nombre &&
      !!this.email &&
      !!this.telefono &&
      !!this.fechaNacimiento &&
      this.validarNumero()
    );
  }

  validarNumero(): boolean {
    // Eliminar caracteres no numéricos
    let numeroLimpio = this.telefono.replace(/\D/g, '');

    // Verificar si hay exactamente 10 números y si todos los caracteres son números
    if (numeroLimpio.length === 10 && /^\d+$/.test(numeroLimpio)) {
      console.log('Número válido:', numeroLimpio);
      return true;
    } else {
      console.log('Número inválido. Debe contener 10 números y solo caracteres numéricos.');
      return false;
    }
  }

  calcularEdad() {
    const fechaNacimientoDate = new Date(this.fechaNacimiento);
    const fechaActual = new Date();

    const diferenciaAnios = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();

    if (
      fechaNacimientoDate.getMonth() > fechaActual.getMonth() ||
      (fechaNacimientoDate.getMonth() === fechaActual.getMonth() &&
        fechaNacimientoDate.getDate() > fechaActual.getDate())
    ) {
      this.edad = diferenciaAnios - 1;
      console.log('Edad calculada:', this.edad);
    } else {
      this.edad = diferenciaAnios;
      console.log('Edad calculada:', this.edad);
    }
  }
}
