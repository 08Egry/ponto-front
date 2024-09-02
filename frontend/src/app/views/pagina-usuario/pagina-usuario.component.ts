


import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/components/cadastro/criar-cadastro/cadastro.model';
import { RegistroService } from './../../components/cadastro/registro.service';
import { Router } from '@angular/router';
import { UsuarioService } from './../../components/cadastro/Usuario.service';



@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent implements OnInit {
  registros: Registro[] = [];
  nome: string= '';
  email: string='';
  mensagem: string = '';
  


  constructor(private registroService: RegistroService, usuarioService: UsuarioService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.obterRegistrosUsuario();
    
  }


  obterRegistrosUsuario():void{


    this.registroService.getRegistros().subscribe(
      (registros: Registro[] )=>{
        this.registros = registros.filter(registro => registro.nome === this.email);
      },
    (erro: any)=>{
      console.error('Erro ao obter registro',erro)
    })
  }
criarUsuario(): void {


  if (this.nome) {
    this.registroService.criarUsuario(this.nome).subscribe(
      () => {
        console.log('Usuário criado com sucesso:');
        this.obterRegistrosUsuario();
        this.registros.push(); 
      },
      (error: any) => {
        console.error('Erro ao criar usuário:', error);
      }
    );
  }
}

RegistrarPonto(): void {
  this.router.navigate(['/cadastro/criar-cadastro']);
}

verRegistro(): void {
  this.router.navigate(['/cadastro/ver-ponto']);
}

PontosCadastrados(): void {

  const role = this.obterRegistrosUsuario();

  // if(usuar = "usuario"){
  //   this.mensagem = 'Você não pode acessar essa página. Só os administradores podem ter acesso.';
  // }

  this.router.navigate(['/cadastro/pagina-adninistrador']);
}

}