import { UsuarioService } from './../../components/cadastro/Usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm: FormGroup;
  error: string = '';
  perfil: any;

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


  irParaApaginaEscolhida(): void {
    if (this.loginForm.valid) {
      const { nome, senha } = this.loginForm.value;
      this.UsuarioService.login(nome, senha).then(
        (response: any) => {
          const perfil = response.perfil; 
          this.direcionarPagina(perfil);
        },
        (error) => {
          this.error = 'Falha ao executar login';
          console.error(error); 
        }
      );
    }
  }

  direcionarPagina(perfil: string): void {
    switch (perfil) {
      case 'ADMIN':
        this.router.navigate(['/cadastro']);
        break;
      case 'USER':
        this.router.navigate(['/cadastro/pagina-usuario']);
        break;
    }
  }
}
