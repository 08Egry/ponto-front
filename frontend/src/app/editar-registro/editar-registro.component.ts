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
  registro: any;
  sucesso: any;

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
    this.registroService.atualizarRegistro(this.registro).subscribe(
      () => {
        this.router.navigate(['cadastro/pagina-administrador']);
        this.sucesso = 'Dados atualizados com sucesso';
      },
      (error: any) => {
        console.error('Erro ao salvar edição:', error);
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['/cadastro/pagina-administrador']);
  }
}
