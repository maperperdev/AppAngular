import { Component, OnInit } from '@angular/core';
import { ApiRecetaService } from '../api.receta.service';
import { Receta } from '../model/Receta';

@Component({
  selector: 'receta-component',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetaComponent implements OnInit {
  nuevaReceta: Receta = {
    id: null, autor: '', nombreReceta: '', textoReceta: '',
    fotoReceta: '', fechaNac: null 
  };
  constructor(private apiUserService: ApiRecetaService) { }

  ngOnInit(): void {
  }

  crearReceta(form) {
    form.value.id = this.nuevaReceta.id;
    form.value.autor = this.nuevaReceta.autor;
    form.value.nombreReceta =  this.nuevaReceta.nombreReceta;
    form.value.textoReceta = this.nuevaReceta.textoReceta;
    form.value.fechaNac = this.nuevaReceta.fechaNac;
    form.value.fotoReceta = this.nuevaReceta.fotoReceta;
    this.apiUserService.crearReceta(form.value);
  }
}