import { UsuarioService } from './../../components/cadastro/Usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { IUsuario, Usuario } from 'src/app/components/cadastro/criar-cadastro/cadastro.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formLogin!: FormGroup;
  error: string = '';
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private UsuarioService: UsuarioService,
    private snackBar: MatSnackBar  ) {
  
  }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm(){ this.formLogin = this.formBuilder.group({
    nome: ['', Validators.required],
    senha: ['', Validators.required],
    logado:[true,Validators.required]

  });

}

  entrar() {
    if (this.formLogin.invalid) return;
  
    var usuario = this.formLogin.getRawValue();
  
    this.UsuarioService.login(usuario)
      .then((response: IUsuario | undefined) => {
        if (response && response.logado) {
          localStorage.setItem('perfil', response.perfil || '');
          localStorage.setItem('nome', response.nome);
          localStorage.setItem('logado', response.logado ? 'true' : 'false');
  
          const role = response.perfil;
          if (role === 'Administrador') {
            this.router.navigate(['/cadastro/pagina-administrador']);
          } else if (role === 'Usuario') {
            this.router.navigate(['/cadastro/pagina-usuario']);
          } else {
            this.error = 'Perfil não reconhecido.';
          }
        } else {
          this.error = 'Falha no login. Usuário ou senha incorretos.';
        }
      })
      .catch(() => {
        this.error = 'Erro inesperado. Tente novamente mais tarde.';
      });
  }


criarUsuario(): void {
    this.router.navigate(['/cadastro-usuario']);
  }
  

  alterarSenha(): void {
    this.router.navigate(['/alterar-senha']);
  }
}
