import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/components/cadastro/registro.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
AlterarSenha() {
throw new Error('Method not implemented.');
}
  loginForm: FormGroup;
  error: string = '';
  nome: string='';
  senha: string='';
  LoginService: any;
  role: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: RegistroService
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
      
      this.LoginService.login(this.nome, this.senha).subscribe(
        (response: any) => {
          if (response && response.token) {
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
        (error: any) => {
          this.error = 'Erro no servidor. Tente novamente mais tarde.';
        }
      );
    }
  }

  CriarUsuario():void{
    this.router.navigate(['/cadastro-usuario']);
  
  }

  alterarSenha(): void{
    this.router.navigate(['/alterar-senha'])
  }
}