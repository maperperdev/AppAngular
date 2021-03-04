import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RecetaComponent } from './recetas/recetas.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { AgregarRecetaComponent } from './agregar-receta/agregar-receta.component';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AcercaDeComponent,
    AgregarRecetaComponent,
    ListarRecetasComponent,
    PrincipalComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }