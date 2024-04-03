import { CriarCadastroComponent } from './components/cadastro/criar-cadastro/criar-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import {CadastroProdutoComponent} from './views/cadastro-produto/cadastro-produto.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
  path:"cadastro",
  component:CadastroProdutoComponent
},
{
  path: "cadastro/criar-cadastro",
  component: CriarCadastroComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
