import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/components/cadastro/criar-cadastro/cadastro.model';
import { RegistroService } from './../../components/cadastro/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent implements OnInit {
  registros: Registro[] = [];
  nome: string= '';
  email: string='';


  constructor(private registroService: RegistroService,
              private router: Router
  ) {}

  ngOnInit(): void {
    
  }
criarUsuario(): void {
  if (this.nome) {
    this.registroService.criarUsuario(this.nome).subscribe(
      () => {
        console.log('Usuário criado com sucesso:');
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
  this.router.navigate(['cadastro/pagina-administrador']);
}

}