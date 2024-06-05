import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Registro } from './cadastro.model';

@Component({
  selector: 'app-registro',
  templateUrl: './criar-cadastro.component.html',
  styleUrls: ['./criar-cadastro.component.css']
})
export class RegistroComponent implements OnInit {
  nome: string = '';
  matricula: string = '';
  sucesso?: string;
  horarioChegada?: string;
  horarioAlmoco?: string;
  horarioRetorno?: string;
  horarioSaida?: string;
  tipo: string = 'Admim'

  currentStep: string = 'chegada';


  constructor(private registroService: RegistroService) {
    this.registroService.getPerfilUsuario();
  }

  ngOnInit(): void {
    
    this.nome = localStorage.getItem('nome') || '';
  }

  registrarPonto(tipo: string): void {
    const funcionario: Registro = { nome: this.nome, matricula: this.matricula };
    this.registroService.registrarPonto(this.nome).subscribe(
      response => {
        switch (tipo) {
          case 'chegada':
            this.horarioChegada = response.horarioChegada;
            break;
          case 'almoco':
            this.horarioAlmoco = response.horarioAlmoco;
            break;
          case 'retorno':
            this.horarioRetorno = response.horarioRetorno;
            break;
          case 'saida':
            this.horarioSaida = response.horarioSaida;
            break;
        }
        this.sucesso = `Registro de ${tipo} realizado com sucesso`;
        this.updateStep(tipo);
      },
      error => {
        console.error(`Erro ao registrar ${tipo}`, error);
      }
    );
  }

  updateStep(tipo: string): void {
    switch (tipo) {
      case 'chegada':
        this.currentStep = 'almoco';
        break;
      case 'almoco':
        this.currentStep = 'retorno';
        break;
      case 'retorno':
        this.currentStep = 'saida';
        break;
      case 'saida':
        this.currentStep = 'completo';
        break;
    }
  }

  registrarChegada(): void {
    this.registrarPonto('chegada');
  }

  registrarAlmoco(): void {
    this.registrarPonto('almoco');
  }

  registrarRetorno(): void {
    this.registrarPonto('retorno');
  }

  registrarSaida(): void {
    this.registrarPonto('saida');
  }
}
