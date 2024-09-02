import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from 'src/app/components/cadastro/criar-cadastro/cadastro.model';
import { RegistroService } from 'src/app/components/cadastro/registro.service';

@Component({
  selector: 'app-ver-ponto',
  templateUrl: './ver-ponto.component.html',
  styleUrls: ['./ver-ponto.component.css']
})
export class VerPontoComponent {
  registros: Registro[] = [];
  

  constructor(private router: Router, private registroService: RegistroService) {}


  ngOnInit(): void {
    this.registroService.getRegistros().subscribe(
      (data: Registro[]) => {
        this.registros = data.filter(registro => registro.matricula);
      },
      (error: any) => {
        console.error('Erro ao buscar registros:', error);
      }
    );
  }

  Voltar(): void {
    this.router.navigate(['/cadastro/pagina-usuario']);
  }
}
