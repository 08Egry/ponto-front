import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Registro } from '../criar-cadastro/cadastro.model';


@Component({
  selector: 'app-ler-dados-cadastrado',
  templateUrl: './ler-dados-cadastrado.component.html',
  styleUrls: ['./ler-dados-cadastrado.component.css']
})
export class LerDadosCadastradoComponent implements OnInit {

  cadastro: Registro[] = [];

  constructor(private cadastroService: CadastroService){}

  ngOnInit(): void {
    this.cadastroService.lerdados().subscribe(cadastro =>{
      this.cadastro = cadastro
      console.log(cadastro)
    })
      
  }

  

}
