import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Registro, Usuario } from './criar-cadastro/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
 
  private apiUrl = 'http://localhost:8080';
  

  constructor(private http: HttpClient) {}
 

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getPerfilUsuario(): string {
    return localStorage.getItem('tipo') || '';
  }

  registrarPonto(nome: string, matricula: string): Observable<Registro> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.post<Registro>(`${this.apiUrl}/funcionario/registrar-ponto`, { nome, matricula }, { headers });
  }

  getRegistros(): Observable<Registro[]> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.get<Registro[]>(`${this.apiUrl}/funcionario/registros`, { headers });
  }

  getRegistrosDoUsuario(nome: string): Observable<Registro[]> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.get<Registro[]>(`${this.apiUrl}/registros?nome=${nome}`, { headers });
  }

  criarUsuario(nome: string): Observable<Usuario> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.post<Usuario>(`${this.apiUrl}/autenticacao/criar-usuario`, { nome }, { headers });
    
  }

  verificarPontoRegistrado(nome: string): Observable<Registro> {
    return this.http.get<any>(`${this.apiUrl}/verificar-ponto?nome=${nome}`);
  }

  atualizarRegistro(registro: any, id: any): Promise<Registro | undefined> {
    return this.http.put<any>(`${this.apiUrl}/funcionario/atualizar-dados/${id}`, registro).toPromise();
  }

  verRegistro(): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.get<any>(`${this.apiUrl}/perfil`, { headers });
  }

  getRegistroById(id: number): Observable<Registro> {
    return this.http.get<Registro>(`${this.apiUrl}/${id}`);
  }
 
  excluirRegistro(id: number): Observable<any> {
    return this.http.delete<Usuario[]>(`${this.apiUrl}/funcionario/${id}`);
  }
}
