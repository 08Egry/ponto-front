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
  mostrarModalJustificativa: boolean = false;
  mostrarModalJustificativaEdicao: boolean = false;
  
  justificativas : string[] = ['errp','ausencia','outro'];
  justiEdicao: string[] = ['com','mat','outros'];
  justificativa: string = '';
  justificarEdicao: string= '';
  idRegistroParaExcluir: number | null = null;
  registroParaEditar: number | null = null;

  constructor(private router: Router, private registroService: RegistroService) {}

  ngOnInit(): void {
    this.carregarRegistros();
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

  mostrarJustificativa(id: number): void {
    this.idRegistroParaExcluir = id;
    this.mostrarModalJustificativa = true;
  }

  fecharModalJustificativa(): void {
    this.mostrarModalJustificativa = false;
    this.justificativa = '';
    this.idRegistroParaExcluir = null;
  }

  confirmarExclusao(): void {
    if (this.idRegistroParaExcluir !== null && this.justificativa) {
      console.log(`Justificativa para exclusão: ${this.justificativa}`);
      this.excluirRegistro(this.idRegistroParaExcluir);
      this.fecharModalJustificativa();
    } else {
      alert('Por favor, selecione uma justificativa.');
    }
  }

  confirmarEdicap(): void {
    if (this.registroParaEditar !== null && this.justificarEdicao) {
      console.log(`Justificativa para exclusão: ${this.justificarEdicao}`);
      this.excluirRegistro(this.registroParaEditar);
      this.fecharModalJustificativa();
    } else {
      alert('Por favor, selecione uma justificativa.');
    }
  }

  mostrarJustificativaEdicao(registro: Registro): void {
    this.registroParaEditar ;
    this.mostrarModalJustificativaEdicao = true;
  }

  fecharModalJustificativaEdicao(): void {
    this.mostrarModalJustificativaEdicao = false;
    this.justificarEdicao = '';
    this.registroParaEditar = null;
  }


  excluirRegistro(idRegistroParaExcluir: number) {
    throw new Error('Method not implemented.');
  }

  editarRegistro(id: number): void {
    this.router.navigate([`/editar-registro/${id}`]);
  }
}
