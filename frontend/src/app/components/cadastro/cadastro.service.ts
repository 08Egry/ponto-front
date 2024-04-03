import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Registro } from './criar-cadastro/cadastro.model';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  apiUrl = 'http://localhost:8080/cadastro';

  constructor(private snackBar: MatSnackBar, private Http: HttpClient) { }

  showMessege(msg:string):void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    })
  }
  
  
  criarCadastro(cadastro:Registro):Observable<Registro>{
    const headers = new HttpHeaders().set('Content-type', 'application/json')
    return this.Http.post<Registro>(`${this.apiUrl}/cadastro`,cadastro,{headers})

  }

  lerdados():Observable<Registro[]>{
    return this.Http.get<Registro[]>(this.apiUrl)

  }

  adcionarRegistro(registro:string):Observable<any>{
    const headers = new HttpHeaders().set('Authorization', 'Bearen'+Token);
    return this.Http.post(this.apiUrl,{registro});
  }

  obterRegistro():Observable<string[]>{
    return this.Http.get<string[]>(this.apiUrl)
  }
}