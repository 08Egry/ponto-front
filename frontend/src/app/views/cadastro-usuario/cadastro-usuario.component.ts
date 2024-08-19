import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../components/cadastro/login.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  nome: string = '';
  matricula!: number;
  email: string = '';
  senha: string = '';
  perfil: string = 'Usuario';
  sucesso?: string;

  constructor(private loginService: LoginService, private router: Router) { }

  Usuario() {
    this.loginService.criarUsuario(this.nome, this.matricula, this.email, this.senha, this.perfil).then(
      () => {
        this.sucesso = `Cadastro realizado com sucesso`;
      },
      error => {
        console.error(`Erro ao registrar `, error);
      }
    );
  }

  Voltar(){
    this.router.navigate(['/'])
  }
}
