import { Router } from '@angular/router';
import { LoginService } from './../../components/cadastro/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {

  usuario: any
  matricula: any;
  email: any;
  senha: any;
  sucesso: any;
  console: any;

  constructor(
   private LoginService: LoginService,
   private router: Router
  ){}


AlterarSenha(): void {
  this.LoginService.AlterarSenha(this.usuario).subscribe(
    ()=>{
      this.console.log('Dados alterados com sucesso!');
    }, 
    (error: any)=>{
      this.console.error('erro ao atualizar dados');
    }
  )
}


Voltar() {
  this.router.navigate(['/']);
}

}
