import { CinbesaLibModule } from 'cinbesa-lib';


import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { NavegacaoComponent } from './components/template/navegacao/navegacao.component';
import { HomeComponent } from './views/home/home.component';
import { CadastroProdutoComponent } from './views/cadastro-produto/cadastro-produto.component';
import { RedDirective } from './diretivas/red.directive';
import { ForDirective } from './diretivas/for.directive';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSortModule } from '@angular/material/sort';
import { LerDadosTabelaComponent } from './components/cadastro/ler-dados-tabela/ler-dados-tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RegistroComponent } from './components/cadastro/criar-cadastro/criar-cadastro.component';
import { PaginaUsuarioComponent } from './views/pagina-usuario/pagina-usuario.component';
import { PaginaAdministradorComponent } from './views/pagina-administrador/pagina-administrador.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroUsuarioComponent } from './views/cadastro-usuario/cadastro-usuario.component';
import { VerPontoComponent } from './views/ver-ponto/ver-ponto.component';
import { AlterarSenhaComponent } from './views/alterar-senha/alterar-senha.component';
import { EditarRegistroComponent } from './editar-registro/editar-registro.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavegacaoComponent,
    HomeComponent,
    CadastroProdutoComponent,
    RedDirective,
    ForDirective,
    LerDadosTabelaComponent,
    RegistroComponent,
    PaginaUsuarioComponent,
    PaginaAdministradorComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    VerPontoComponent,
    AlterarSenhaComponent,
    EditarRegistroComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    CinbesaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
