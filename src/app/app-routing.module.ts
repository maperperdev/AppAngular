import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRecetaComponent } from './agregar-receta/agregar-receta.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';
import { PrincipalComponent } from './principal/principal.component';

const routes = [
  { path: 'agregar-receta', component: AgregarRecetaComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'listar-recetas', component: ListarRecetasComponent },
  { path: 'principal', component: PrincipalComponent},
  { path: '', redirectTo: '/principal', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }