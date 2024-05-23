import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/components/cadastro/criar-cadastro/cadastro.model';
import { RegistroService } from 'src/app/components/cadastro/registro.service';

@Component({
  selector: 'app-pagina-administrador',
  templateUrl: './pagina-administrador.component.html',
  styleUrls: ['./pagina-administrador.component.css']
})
export class PaginaAdministradorComponent implements OnInit {

  registros: Registro[]=[];

  constructor(private registroService: RegistroService){}

  ngOnInit(): void {
    this.registroService.getRegistros().subscribe(data => {
      this.registros = data;
    })};

}
