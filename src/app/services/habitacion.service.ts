import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitaciones } from '../models/habitacion.models';

@Injectable({
  providedIn: 'root'
})

export class HabitacionService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }

  obtenerHabitaciones(): Observable<any> {
    return this._http.get(this.url + '/verHabitaciones', { headers: this.headersVariable });
  }


  agregarHabitacion(modeloHabitacion: Habitaciones): Observable<any> {

    let parametros = JSON.stringify(modeloHabitacion);

    return this._http.post(this.url + '/agregarHabitacion', parametros, { headers: this.headersVariable});
  }

}
