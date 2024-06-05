import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { Registro } from 'src/app/components/cadastro/criar-cadastro/cadastro.model';
import { RegistroService } from 'src/app/components/cadastro/registro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  error: string = '';
  nome: string='';
  senha: string='';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registroService: RegistroService
  ) {
    this.loginForm = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  entrar(): void {
    if (this.loginForm.valid) {
      const nome = this.loginForm.get('nome')?.value;
      const senha = this.loginForm.get('senha')?.value;
      
      this.registroService.login(nome, senha).subscribe(
        (response: any) => {
          if (response && response.token) {
            const role = this.registroService.getPerfilUsuario();
            if (role === 'admin') {
              this.router.navigate(['/pagina-administrador']);
            } else if (role === 'usuario') {
              this.router.navigate(['/pagina-usuario']);
            } else {
              this.error = 'Perfil não reconhecido.';
            }
          } else {
            this.error = 'Falha no login.';
          }
        },
        (error: any) => {
          this.error = 'Erro no servidor. Tente novamente mais tarde.';
        }
      );
    }
  }

  usuario():void{
    this.router.navigate(['/cadastro-usuario']);

}
}