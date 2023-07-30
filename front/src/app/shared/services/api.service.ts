import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/login'; // Reemplaza esta URL con la URL de tu API

  constructor(private http: HttpClient) { }

    // Método para hacer una llamada GET a la API y obtener datos
    getData({ username, password }: { username: string; password: string }): Observable<any> {
      return this.http.post<any>(this.apiUrl,{
        "username":username,
        "password":password
    });
    }
}
