import { RegistroService} from './../registro.service';
import { Component, OnInit } from '@angular/core';
import { Registro } from '../criar-cadastro/cadastro.model';


@Component({
  selector: 'app-ler-dados-cadastrado',
  templateUrl: './ler-dados-cadastrado.component.html',
  styleUrls: ['./ler-dados-cadastrado.component.css']
})
export class LerDadosCadastradoComponent implements OnInit {

  cadastro: Registro[] = [];


  constructor(private RegistroService: RegistroService){}

  ngOnInit(): void {
    this.RegistroService.getRegistros().subscribe(registro =>{
      this.cadastro = registro;
      console.log(registro)
    })
      
  }

  

}
