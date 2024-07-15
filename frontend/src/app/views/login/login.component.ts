import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../../components/cadastro/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';
  perfil: any;

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

  ngOnInit(): void {
  }

  irParaApaginaEscolhida(): void {
    if (this.loginForm.valid) {
      const { nome, senha } = this.loginForm.value;
      this.loginService.login(nome, senha).subscribe(
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
