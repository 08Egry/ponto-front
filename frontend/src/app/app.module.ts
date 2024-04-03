

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
import { CriarCadastroComponent } from './components/cadastro/criar-cadastro/criar-cadastro.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSortModule } from '@angular/material/sort';
import { LerDadosTabelaComponent } from './components/cadastro/ler-dados-tabela/ler-dados-tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


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
    CriarCadastroComponent,
    LerDadosTabelaComponent

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
    MatSortModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
