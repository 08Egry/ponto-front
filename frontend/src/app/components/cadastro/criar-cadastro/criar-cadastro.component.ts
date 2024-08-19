// criar-cadastro.component.ts
import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Router } from '@angular/router';

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
  tipo: string = 'Admim';

  currentStep: string = 'chegada';

  // Coordenadas do local de trabalho
  NumLatitude: number = -1.4526628;
  NumLongitude: number = -48.4889347;
  raioMaximo: number = 15; // Distância máxima em metros

  constructor(private registroService: RegistroService, private router: Router) {
    this.registroService.getPerfilUsuario();
  }

  ngOnInit(): void {
    this.nome = localStorage.getItem('nome') || '';
    this.verificarRegistro();
  }

  verificarRegistro(): void {
    this.registroService.verificarPontoRegistrado(this.nome).subscribe(
      response => {
        if (response.chegadaRegistrada) {
          this.currentStep = 'almoco';
        }
        if (response.almocoRegistrado) {
          this.currentStep = 'retorno';
        }
        if (response.saidaRegistrafa) {
          this.currentStep = 'saida';
        }
        if (response.chegadaRegistrada) {
          this.currentStep = 'completo';
          this.sucesso = 'Todos os pontos já foram registrados.';
        }
      },
      error => {
        console.error('Erro ao verificar registro de ponto', error);
      }
    );
  }

  registrarPonto(tipo: string): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const userLatitude = position.coords.latitude;
          const userLongitude = position.coords.longitude;
          const distancia = this.calculateDistance(
            this.NumLatitude, this.NumLongitude,
            userLatitude, userLongitude
          );

          if (distancia >= this.raioMaximo) {
            this.registroService.registrarPonto(this.nome,this.matricula).subscribe(
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
                this.hideCurrentButtonAndScheduleNext(tipo);
              },
              error => {
                console.error(`Erro ao registrar ${tipo}`, error);
              }
            );
          } else {
            this.sucesso = 'Você não está no local de trabalho.';
          }
        },
        error => {
          console.error('Erro ao obter a localização', error);
          this.sucesso = 'Não foi possível obter sua localização.';
        }
      );
    } else {
      this.sucesso = 'Geolocalização não é suportada pelo seu navegador.';
    }
  }

  hideCurrentButtonAndScheduleNext(tipo: string): void {
    this.currentStep = ''; // Oculta o botão atual

    let nextStep = '';
    let delay = 0;

    switch (tipo) {
      case 'chegada':
        nextStep = 'almoco';
        break;
      case 'almoco':
        nextStep = 'retorno';
        break;
      case 'retorno':
        nextStep = 'saida';
        break;
      case 'saida':
        nextStep = 'completo';
        break;
    }

    setTimeout(() => {
      this.currentStep = nextStep;
    }, delay);
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371e3; // Raio da Terra em metros
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distância em metros
    return distance;
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

  Voltar(): void {
    this.router.navigate(['/cadastro']);
  }
}
