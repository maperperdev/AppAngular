import { Injectable } from '@angular/core';
import { Receta } from './model/Receta';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ApiRecetaService {
	PHP_API_SERVER = "http://localhost/AppAngular/receta";

	constructor(private httpClient: HttpClient) { }

	public crearReceta(receta: Receta): void {
		console.log(receta);
		this.httpClient.post(`${this.PHP_API_SERVER}/crear_receta.php`, receta, {responseType: 'text'}).subscribe();
	}

	public listarRecetas() {
		return this.httpClient.get(`${this.PHP_API_SERVER}/listarRecetas.php`).pipe(retry(3), catchError(this.handleError));
	}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}