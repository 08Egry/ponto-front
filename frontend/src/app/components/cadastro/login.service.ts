import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from './criar-cadastro/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  login(nome: string, senha: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.post<Usuario>(`${this.apiUrl}autenticacao/login`, { nome, senha }, { headers });
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('nome');
  }

  criarUsuario(nome: string, matricula:number, email: string, senha: string, perfil: string): Observable<Usuario> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.post<Usuario>(`${this.apiUrl}autenticacao/criar-usuario`, { nome, matricula,  email, senha, perfil }, { headers });
  }

  verRegistro(): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.get<any>(`${this.apiUrl}/perfil`, { headers });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getPerfilUsuario(): string {
    return localStorage.getItem('tipo') || '';
  }

  AlterarSenha(usuario:Usuario): Observable<Usuario>{
    const headers = new HttpHeaders({'Autorization': `Bearen ${this.getToken()}`});
    return this.http.put<Usuario>(`${this.apiUrl}autenticacao/atualizar-dados${usuario.matricula,usuario.email,usuario.senha}`,usuario);
  }
}
