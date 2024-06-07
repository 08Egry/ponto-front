export interface Registro {
email: any;
    id?:number;
    nome: string;
    matricula: string;
    horarioChegada?: string;
    horarioAlmoco?: string;
    horarioRetorno?: string;
    horarioSaida?: string;
  }
  
  export interface Usuario {
    nome: string,
    email: string,
    senha: string,
    perfil: string;
  }