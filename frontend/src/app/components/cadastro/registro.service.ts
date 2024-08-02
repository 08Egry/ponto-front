import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Registro, Usuario } from './criar-cadastro/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  login(nome: any, senha: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/funcionario';
  private apiUrl2 = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // login(nome: string, senha: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl2}autenticacao/login`, { nome, senha })
  //     .pipe(
  //       map((response: { token: string; role: string }) => {
  //         this.token = response.token;
  //         localStorage.setItem('token', this.token);
  //         localStorage.setItem('role', response.role);
  //         localStorage.setItem('nome', nome); 
  //         return response;
  //       })
  //     );
  // }

 

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getPerfilUsuario(): string {
    return localStorage.getItem('tipo') || '';
  }

  registrarPonto(nome: string): Observable<Registro> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.post<Registro>(`${this.apiUrl}/registrar-ponto`, { nome }, { headers });
  }

  getRegistros(): Observable<Registro[]> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.get<Registro[]>(`${this.apiUrl}/registros`, { headers });
  }

  getRegistrosDoUsuario(nome: string): Observable<Registro[]> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.get<Registro[]>(`${this.apiUrl}/registros?nome=${nome}`, { headers });
  }

  criarUsuario(nome: string): Observable<Usuario> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.post<Usuario>(`${this.apiUrl}/autenticacao/criar-usuario`, { nome }, { headers });
    
  }

  atualizarRegistro(registro: Registro): Observable<void> {
    return this.http.put<void>(`${this.apiUrl2}/funcionario/atualizar-dados${registro.id}`, registro);
  }

  verRegistro(): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.get<any>(`${this.apiUrl2}/perfil`, { headers });
  }

  getRegistroById(id: number): Observable<Registro> {
    return this.http.get<Registro>(`${this.apiUrl}/${id}`);
  }
 
  excluirRegistro(id: number): Observable<any> {
    return this.http.delete<Usuario[]>(`${this.apiUrl}/${id}`);
  }
}
