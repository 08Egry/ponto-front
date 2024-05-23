// import { DataSource } from '@angular/cdk/collections';

// import { Registro } from 'src/app/components/cadastro/criar-cadastro/cadastro.model';
// import { RegistroService } from './../../components/cadastro/registro.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],

// })
// export class HomeComponent implements OnInit {

//   registros: Registro[]=[];



//   constructor(private registroService: RegistroService){}

//   ngOnInit(): void {
//     this.registroService.getRegistros().subscribe(data => {
//       this.registros = data;
//     })};
    

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}