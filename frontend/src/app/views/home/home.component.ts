import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/components/cadastro/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';
  nome: string = '';
  senha: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  entrar() {
      const nome = this.loginForm.get('nome')?.value;
      const senha = this.loginForm.get('senha')?.value;

      this.loginService.login(nome, senha).subscribe(
        (response: any) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            const role = this.loginService.getPerfilUsuario();
            if (role === 'admin') {
              this.router.navigate(['/cadastro/pagina-administrador']);
            } else if (role === 'usuario') {
              this.router.navigate(['/cadastro/pagina-usuario']);
            } else {
              this.error = 'Perfil não reconhecido.';
            }
          } else {
            this.error = 'Falha no login.';
          }
        },
        () => {
          this.error = 'Usuario não encontrado. Tente novamente mais tarde.';
        }
      );

    
    }
  

  criarUsuario(): void {
    this.router.navigate(['/cadastro-usuario']);
  }

  alterarSenha(): void {
    this.router.navigate(['/cadastro/alterar-senha']);
  }
}
