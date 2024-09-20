import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario, Usuario } from './criar-cadastro/cadastro.model';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService  {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient,
){ }


login(usuario: IUsuario): Promise<IUsuario | undefined> {
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });

  return this.http.post<IUsuario>(`${this.apiUrl}/autenticacao/login`, usuario, { headers })
    .toPromise().then(response => {
      if (response) {
        return response;  
      }
      return undefined; 
    })
    .catch(error => {
      console.error('Erro ao fazer login', error);
      return undefined; 
    });
}

logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('nome');
  }

  criarUsuario(nome: string, matricula:number, email: string, senha: string, perfil: string):Promise<Usuario | undefined> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.getToken()}` });
    return this.http.post<Usuario>(`${this.apiUrl}/autenticacao/criar-usuario`, { nome, matricula,  email, senha, perfil }, { headers }).toPromise();
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

  getPerfilUsuario(): string | null {
   return localStorage.getItem('perfil');

  }

  AlterarSenha(id: number, novaSenha: string): Promise<any> {
    const headers = { 'Authorization': `Bearer ${this.getToken()}` };
    return this.http.put(`${this.apiUrl}/autenticacao/atualizar-dados${id}`, { novaSenha }, { headers }).toPromise();
  }
  
}

