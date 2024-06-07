import { LoginService } from './../../components/cadastro/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegistroService } from 'src/app/components/cadastro/registro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';
  sucesso: string=''

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private LoginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { nome, senha } = this.loginForm.value;
      this.LoginService.login(nome, senha).subscribe(
        () => {
        
          this.router.navigate(['/pagina-administrador']);
        },
        () => {
          this.error = 'Falha ao executar login';
        }
      );
    }
  }
  
  
}
