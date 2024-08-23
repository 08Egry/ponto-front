import { RegistroComponent} from './components/cadastro/criar-cadastro/criar-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import {CadastroProdutoComponent} from './views/cadastro-produto/cadastro-produto.component';
import { PaginaUsuarioComponent } from './views/pagina-usuario/pagina-usuario.component';
import { PaginaAdministradorComponent } from './views/pagina-administrador/pagina-administrador.component';
import { CadastroUsuarioComponent } from './views/cadastro-usuario/cadastro-usuario.component';
import { VerPontoComponent } from './views/ver-ponto/ver-ponto.component';
import { AlterarSenhaComponent } from './views/alterar-senha/alterar-senha.component';
import { EditarRegistroComponent } from './editar-registro/editar-registro.component';



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
  component: PaginaUsuarioComponent
},
{path:"cadastro/pagina-administrador",
  component: PaginaAdministradorComponent
},
{ path: 'editar-registro/:id', 
  component: EditarRegistroComponent 
},
{
  path:'', redirectTo: '/login', pathMatch:'full'
},
{
  path: "cadastro-usuario",
  component: CadastroUsuarioComponent
},{
  path:'**',redirectTo:'/ver-ponto',pathMatch:'full'
},
{
  path:'**',redirectTo:'/ver-ponto',pathMatch:'full'
},
{
  path:"cadastro/ver-ponto",
  component: VerPontoComponent
}, 
{path:"alterar-senha",
  component: AlterarSenhaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
