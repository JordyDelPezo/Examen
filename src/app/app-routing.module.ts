import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPage } from './formulario/formulario.page';

const routes: Routes = [
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
  { path: 'formulario', component: FormularioPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
