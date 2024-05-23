import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/components/cadastro/criar-cadastro/cadastro.model';
 import { RegistroService } from './../../components/cadastro/registro.service';
 


@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css']
})
export class PaginaUsuarioComponent implements OnInit {

  registros: Registro[]=[];
  
  constructor(private registroService: RegistroService){}

  ngOnInit(): void {
    this.registroService.getRegistros().subscribe(data => {
      this.registros = data;
    })};

}
