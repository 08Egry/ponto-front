import { Registro } from './../criar-cadastro/cadastro.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LerDadosTabelaDataSource } from './ler-dados-tabela-datasource';


@Component({
  selector: 'app-ler-dados-tabela',
  templateUrl: './ler-dados-tabela.component.html',
  styleUrls: ['./ler-dados-tabela.component.css']
})
export class LerDadosTabelaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Registro>;
  dataSource = new LerDadosTabelaDataSource();

  horarioEntrada:string='';
  displayedColumns = ['id','perfil', 'matricula','nome','horarioChegada','horarioAlmoco','horarioRetorno','horarioSaida'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  formatarNumero(numero:number):string{
    return numero < 10? '0'+numero:numero.toString();
  }

  registrarHorario(){
    const dataAtual = new Date();
    const hora = this.formatarNumero(dataAtual.getHours());
    const minutos = this.formatarNumero(dataAtual.getMinutes());
    const segundos = this.formatarNumero(dataAtual.getSeconds());

    this.horarioEntrada = '$(hora):$(minutos):$(segundos)'
  }

  
}
