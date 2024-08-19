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
  justificativas: string[] = ['Erro', 'Ausência', 'Outros'];
  justiEdicao: string[] = ['com', 'mat', 'outros'];
  justificativa: string = '';
  justificarEdicao: string = '';
  idRegistroParaExcluir: number | null = null;
  registroParaEditar: number | null = null;
  sucesso!: string;

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

  excluirRegistro(id: number): void {
    this.registroService.excluirRegistro(id).subscribe(
      () => {
        this.carregarRegistros();
        this.sucesso =` Registro ${id} excluído com sucesso`;
      },
      (error: any) => {
        console.error('Erro ao excluir registro', error);
        this.sucesso = `erro ao tentar excluir ${id}`
      }
    );
  }

  mostrarJustificativaEdicao(registro: Registro): void {
    this.registroParaEditar = registro.id;
    this.mostrarModalJustificativaEdicao = true;
  }

  fecharModalJustificativaEdicao(): void {
    this.mostrarModalJustificativaEdicao = false;
    this.justificarEdicao = '';
    this.registroParaEditar = null;
  }

  editarRegistro(id: number): void {
    this.router.navigate([`/editar-registro/${id}`]);
  }

  confirmarEdicao(): void {
    if (this.registroParaEditar !== null && this.justificarEdicao) {
      console.log(`Justificativa para edição: ${this.justificarEdicao}`);
      this.editarRegistro(this.registroParaEditar);
      this.fecharModalJustificativaEdicao();
    } else {
      alert('Por favor, selecione uma justificativa.');
    }
  }

  excluirSelecionados(): void {
    const registrosParaExcluir = this.registros.filter(registro => registro.selecionado);

    if (registrosParaExcluir.length > 0) {
      registrosParaExcluir.forEach(registro => {
        this.excluirRegistro(registro.id);
      });
    } else {
      alert('Por favor, selecione pelo menos um registro para excluir.');
    }
  }
}
