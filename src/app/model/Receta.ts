export class Receta {
	constructor(
		public autor: string,
		public fechaNac: Date,
		public nombreReceta: string,
		public textoReceta: string,
		public fotoReceta: string,
		public id?: number,
	) { }
}