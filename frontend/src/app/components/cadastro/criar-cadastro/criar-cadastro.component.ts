import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Registro } from './cadastro.model';
import { Data } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './criar-cadastro.component.html',
  styleUrls: ['./criar-cadastro.component.css']
})
export class RegistroComponent  {
  nome: string = '';
  matricula: string = '';
  sucesso?: string;
  dataChegada?: Data
  horario: any;

  currentStep: string = 'chegada';



  constructor(private registroService: RegistroService) {}



  registrarPonto(tipo: string): void {
    const funcionario: Registro = { nome: this.nome, matricula: this.matricula };
    this.registroService.registrarPonto(funcionario).subscribe(
      response => {
  
        this.horario = response.horarioChegada;
        this.horario = response.horarioAlmoco;
        this.horario = response.horarioRetorno;
        this.horario = response.horarioSaida
        this.sucesso = `Registro de ${tipo} realizado com sucesso`;
        this.updateStep(tipo);
      },
      error => {
        console.error(`Erro ao registrar ${tipo}`, error);
      }
    );
  }

  updateStep(tipo: string) {
  
    switch(tipo) {
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

  registrarChegada() {
    this.registrarPonto('chegada');
  }

  registrarAlmoco() {
    this.registrarPonto('almoco');
  }

  registrarRetorno() {
    this.registrarPonto('retorno');
  }

  registrarSaida() {
    this.registrarPonto('saida');
  }
}
