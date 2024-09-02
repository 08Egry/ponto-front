import { UsuarioService } from './../../components/cadastro/Usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/components/cadastro/criar-cadastro/cadastro.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private UsuarioService: UsuarioService
  ) {
    this.loginForm = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  entrar() {
    this.UsuarioService.login(this.loginForm.value.nome, this.loginForm.value.senha).then(
      (response: Usuario | undefined) => {
        if (response) {
          localStorage.setItem('perfil', response.perfil);
          localStorage.setItem('nome', response.nome);
          localStorage.setItem('senha', response.senha);

          const role = this.UsuarioService.getPerfilUsuario();
  
          if (role === 'Administrador') {
            this.router.navigate(['/cadastro/pagina-administrador']);
          } else if (role === 'Usuario') {
            this.router.navigate(['/cadastro/pagina-usuario']);
          } else {
            this.error = 'Perfil não reconhecido.';
          }
        } else {
          this.error = 'Falha no login.';
        }
      },
      (error) => {
        this.error = 'Usuário não encontrado. Tente novamente mais tarde.';
      }
    ).catch(() => {
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
