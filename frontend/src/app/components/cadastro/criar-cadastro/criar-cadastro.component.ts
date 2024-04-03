import { Registro } from './cadastro.model';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-criar-cadastro',
  templateUrl: './criar-cadastro.component.html',
  styleUrls: ['./criar-cadastro.component.css']
})
export class CriarCadastroComponent implements OnInit{

  registros: string[] = [];
  chegadaRegistrada:boolean=false;
  saidaAlmocoRegistrada:boolean=false;
  retornoAlmocoRegistrada:boolean=false;
  saidaRegistrada:boolean=false;

  matricula:string = '';
  horario!:string;
  

  Cadastro: Registro={
    saidaRegistrada: true,
    retornoAlmocoRegistrada: true,
    saidaAlmocoRegistrada: true,
    chegadaRegistrada: true,
    registro: '',
    matricula: '',
    nome: ''
  } 

  HorarioEntrada:string='';
  HorarioAlmoço:string='';
  HoraRetorno:string='';
  HoraSaida:string = '';
  
  constructor(private router: Router,private cadastroService: CadastroService){
    this.verificarRegistro();
  }

  ngOnInit(): void {
  }

  registroJaExiste(tipoRegistro:string):boolean{
    return this.registros.some(registros=>registros.includes(tipoRegistro))
  }

  verificarRegistro():void{
    this.cadastroService.obterRegistro().subscribe(registros=>{
      this.registros=registros
      this.atualizarBotoes();
    })

  }

  atualizarBotoes():void{
    
    this.chegadaRegistrada = this.registroJaExiste('Chegada ao trabalho');
    this.saidaAlmocoRegistrada = this.registroJaExiste('saida pra o almoço');
    this.retornoAlmocoRegistrada = this.registroJaExiste('Retorno do almoço');
    this.saidaRegistrada = this.registroJaExiste('Saída do trabalho');
  }

  SalvarCadastro():void{
    this.cadastroService.showMessege('Cadastro salvo com sucesso!')
  }

   criarCadastro(): void{
    this.cadastroService.criarCadastro(this.Cadastro).subscribe(()=>{
      this.cadastroService.showMessege('Cadastro criado com sucesso!!')
      this.router.navigate(['/cadastro'])
    })

  }

  formatarNumero(numero:number):string{
    return numero < 12? '0'+numero:numero.toString();
  }

  registrarHorario(){
    const dataAtual = new Date();
    const hora = this.formatarNumero(dataAtual.getHours());
    const minutos = this.formatarNumero(dataAtual.getMinutes());
    const segundos = this.formatarNumero(dataAtual.getSeconds());

    this.HorarioEntrada = `${hora}:${minutos}:${segundos}`
    this.HorarioAlmoço = `${hora}:${minutos}:${segundos}`
  }

  obterHoraAtual(): string{
    const agora = new Date();
    return agora.toLocaleTimeString();
  }

  registrarChegada():void {
    const registro =  this.obterHoraAtual()+'- Chegada no trabalho - matricula';
    this.cadastroService.adcionarRegistro(registro).subscribe(()=>{
      this.chegadaRegistrada = true;
      this.atualizarBotoes();

    })
  }

  registrarAlmoco():void {
    const registro = this.obterHoraAtual()+'- Saída para o almoço - matricula';
    this.cadastroService.adcionarRegistro(registro).subscribe(()=>{
      this.saidaAlmocoRegistrada = true;
      this.atualizarBotoes();
  
    })
  }

  registrarRetorno(): void {
    const registro = this.obterHoraAtual()+'-Retorno do almoço - matricula';
    this.cadastroService.adcionarRegistro(registro).subscribe(()=>{
      this.retornoAlmocoRegistrada = true;
      this.atualizarBotoes()
    
    })
  }

  registrarSaida(): void {
    const registro = this.obterHoraAtual()+'- Saída - matricula';
    this.cadastroService.adcionarRegistro(registro).subscribe(()=>{
      this.saidaRegistrada = true;
      this.atualizarBotoes();
    })


  }

  Cancelar():void{
    this.router.navigate(['/cadastro'])
  }

  
}
