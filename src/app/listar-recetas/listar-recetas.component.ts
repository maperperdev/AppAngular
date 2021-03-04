import { Component, OnInit, NgModule } from '@angular/core';
import { ApiRecetaService } from '../api.receta.service';
import { Receta } from '../model/Receta';

@Component({
  selector: 'app-listar-recetas',
  templateUrl: './listar-recetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent implements OnInit {
  public recetas: Receta[];
  error = '';
  success = '';


  constructor(private recetasService: ApiRecetaService) {
  }

  ngOnInit(): void {
    this.listarRecetas();
    console.log(this.recetas);
  }

  listarRecetas(): void {
    this.recetasService.listarRecetas().subscribe(
      (res: Receta[]) => {
        this.recetas = res;
      }, 
        (err) => {
          this.error = err;
        }
    )
  }
}
