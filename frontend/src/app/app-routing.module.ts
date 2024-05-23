import { RegistroComponent} from './components/cadastro/criar-cadastro/criar-cadastro.component';
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
  component: RegistroComponent
},
{
  path:"cadastro/pagina-usuario",
  component: RegistroComponent
},
{ path: 'registro-de-ponto', 
  component: RegistroComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
