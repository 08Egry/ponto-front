import { Router } from '@angular/router';
import { LoginService } from './../../components/cadastro/login.service';
import { Component } from '@angular/core';

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
  tipo: string = '';
  sucesso?: string;
  

  constructor(private loginService: LoginService, private router: Router) { }

  Usuario() {
    this.loginService.criarUsuario(this.nome, this.matricula, this.email, this.senha, this.perfil).subscribe(
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
