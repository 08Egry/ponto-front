import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from 'src/app/components/cadastro/criar-cadastro/cadastro.model';
import { RegistroService } from 'src/app/components/cadastro/registro.service';

@Component({
  selector: 'app-pagina-administrador',
  templateUrl: './pagina-administrador.component.html',
  styleUrls: ['./pagina-administrador.component.css']
})
export class PaginaAdministradorComponent implements OnInit {
  registros: Registro[] = [];

  constructor(private router: Router, private registroService: RegistroService) {}

  ngOnInit(): void {
    this.registroService.getRegistros().subscribe(
      (data: Registro[]) => {
        console.log('Registros recebidos:', data); 
        this.registros = data;
      },
      (error: any) => {
        console.error('Erro ao buscar registros:', error);
      }
    );
  }

  RegistrarPonto(): void {
    const nome = localStorage.getItem('nome');
    if (nome) {
      this.registroService.registrarPonto(nome).subscribe(
        (response: any) => {
          this.ngOnInit(); 
        },
        (error: any) => {
          console.error('Erro ao registrar ponto:', error);
        }
      );
    }
  }

  verRegistro(): void {
    this.router.navigate(['/pagina-administrador']);
  }

  registro(): void {
    this.router.navigate(['/pagina-administrador']);
  }

  excluirRegistro(id: number): void {
    this.registroService.excluirRegistro(id).subscribe(
      () => {
        this.carregarRegistros(); 
      },
      (error: any) => {
        console.error('Erro ao excluir registro:', error);
      }
    );
  }

  carregarRegistros(): void {
    this.registroService.getRegistros().subscribe(
      (data: Registro[]) => {
        this.registros = data;
      },
      (error: any) => {
        console.error('Erro ao buscar registros:', error);
      }
    );
  }
}
