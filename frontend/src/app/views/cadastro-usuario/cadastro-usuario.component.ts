import { Usuario } from './../../components/cadastro/criar-cadastro/cadastro.model';
import { RegistroService } from 'src/app/components/cadastro/registro.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

    nome: string= '';
    email:string= '';
    senha: string= '';
Usuario: any;
usuario: any;


  constructor(private registroService: RegistroService) { }
  

  criarUsuario() {
    const funcionario: Usuario = { nome: this.nome, email: this.email, senha: this.senha };
    this.registroService.criarUsuario(this.nome).subscribe(
      response => {
        console.log('Usuário criado com sucesso:', response);
      },
      error => {
        console.error('Erro ao criar usuário:', error);
      }
    );
  }
}
