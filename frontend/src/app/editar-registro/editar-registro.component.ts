import { Registro } from './../components/cadastro/criar-cadastro/cadastro.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroService } from 'src/app/components/cadastro/registro.service';

@Component({
  selector: 'app-editar-registro',
  templateUrl: './editar-registro.component.html',
  styleUrls: ['./editar-registro.component.css']
})
export class EditarRegistroComponent implements OnInit {
  registro: Registro = {
    nome: '',
    matricula: '',
    horarioChegada: '',
    horarioAlmoco: '',
    horarioRetorno: '',
    horarioSaida: '',
    id: 0,
    perfil: '',
    saidaRegistrada: '',
    retornoRegistrada: '',
    almocoRegistrado: '',
    chegadaRegistrada: ''
  };

  sucesso: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registroService: RegistroService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.registroService.getRegistroById(+id).subscribe(
        (data: Registro) => {
          this.registro = data;
        },
        (error: any) => {
          console.error('Erro ao buscar registro:', error);
        }
      );
    }
  }

  salvarEdicao(): void {
    if (this.registro) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.registroService.atualizarRegistro(this.registro, +id).then(
          (result) => {
            if (result) {
              this.sucesso = 'Dados atualizados com sucesso';
              this.router.navigate(['cadastro/pagina-administrador']);
            } else {
              console.error('Erro ao atualizar o registro');
            }
          },
          (error: any) => {
            console.error('Erro ao salvar edição:', error);
          }
        );
      } else {
        console.error('ID do registro não encontrado');
      }
    }
  }

  cancelar(): void {
    this.router.navigate(['/cadastro/pagina-administrador']);
  }
}
