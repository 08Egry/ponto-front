export interface Registro {
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
    role: string;
    token: string;
    email: string,
    senha: string,
    perfil: string;
  }