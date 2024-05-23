import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  RegistrarPonto(): void {
    this.router.navigate(['/cadastro/criar-cadastro']);
  }

  verRegistro(): void {
    this.router.navigate(['cadastro/pagina-usuario']);
  }

  registro(): void{
    this.router.navigate(['cadastro/pagina-administrador']);
  }
}
