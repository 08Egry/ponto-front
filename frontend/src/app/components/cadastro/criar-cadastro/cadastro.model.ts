export interface Registro {
  saidaRegistrada: string;
  retornoRegistrada: string;
    almocoRegistrado: string;
    chegadaRegistrada: string;
    selecionado?:string;
    id:number;
    nome: string;
    matricula: string;
    horarioChegada?: string;
    horarioAlmoco?: string;
    horarioRetorno?: string;
    horarioSaida?: string;
  }
  
  export interface Usuario {
    id: number;
    nome: string,
    matricula: number;
    tipo: string;
    email: string,
    senha: string,
    NovaSenha: string;
    perfil: string;
  }

  export interface Login{
    nome: string;
    password: string;
  }