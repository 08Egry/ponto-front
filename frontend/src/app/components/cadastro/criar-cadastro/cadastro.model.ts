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
    perfil: string;
  }
  
  export interface Usuario {
    id: number;
    nome: string,
    matricula:  string;
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

  // export interface PontoRegistrado{
  //   id: number;
  //   nome: string;
  //   matricula: string;
  //   saidaRegistrada: string;
  //   retornoRegistrada: string;
  //   almocoRegistrado: string;
  //   chegadaRegistrada: string;

  //   }