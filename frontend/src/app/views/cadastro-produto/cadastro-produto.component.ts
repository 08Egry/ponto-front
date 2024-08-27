
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  administrador: boolean = false;
  RegistroService: any;
  

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.RegistroService.verRegistro().subscribe(
      ( PerfilUsuario: { role: string; }) => {
        if (PerfilUsuario) {
          this.administrador = PerfilUsuario.role === 'admin';
        }
      },
      (      error: any) => {
        console.error('erro ao tentar achar perfil:', error);
      }
    );
  }
  
  RegistrarPonto(): void {
    this.router.navigate(['/cadastro/criar-cadastro']);
  }

  verRegistro(): void {
    this.router.navigate(['cadastro/pagina-usuario']);
  }

  registro(): void{
    this.router.navigate(['cadastro/ver-ponto']);
  }
}
