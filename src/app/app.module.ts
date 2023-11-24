// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';  // Agrega esta línea

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioPage } from './formulario/formulario.page';

@NgModule({
  declarations: [AppComponent, FormularioPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],  // Agrega FormsModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

