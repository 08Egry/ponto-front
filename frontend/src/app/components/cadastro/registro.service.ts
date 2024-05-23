import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registro } from './criar-cadastro/cadastro.model';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:8080/api/funcionario'; 

  constructor(private http: HttpClient) {}

  registrarPonto(registro: Registro): Observable<Registro> {
    return this.http.post<Registro>(`${this.apiUrl}/registrar-ponto`, registro);
  }

  getRegistros(): Observable<Registro[]> {
    
    return this.http.get<Registro[]>(`${this.apiUrl}/registros`);

  }
}
