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
    sucesso: Usuario | undefined;
    logado: boolean;
    id: number;
    nome: string,
    matricula:  string;
    tipo: string;
    email: string,
    senha: string,
    NovaSenha: string;
    perfil: string;
  }

  export interface IUsuario {
    id: number;
    nome: string;
    password: string;
    perfil: string;  // Adicionei o perfil
    logado: boolean;
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