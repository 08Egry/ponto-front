import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from './../../components/cadastro/Usuario.service';
import { Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {

  alterarSenhaForm: FormGroup;
  usuario: any
  matricula: any;
  email: any;
  senha: any;

  sucesso: string |null = null;
  console: any;
  erro: string | null = null;

  constructor(
   private UsuarioService: UsuarioService,
   private router: Router,
   private formBuilder: FormBuilder
  ){this.alterarSenhaForm =this.formBuilder.group({
    senha: ['',[Validators.required]],
    NovaSenha: ['',[Validators.required, Validators.minLength(8)]],
    confirmarNovaSenha:['',[Validators.required]]
  },{validator: this.validarSenha})
}

validarSenha(group: FormGroup):any{
  let NovaSenha = group.get('novaSenha')?.value;
  const confirmarNovaSenha = group.get('confirmarNovaSenha')?.value;
  return NovaSenha = confirmarNovaSenha ? null : { notMatching: true };

}
// AlterarSenha(): void {
//   this.UsuarioService.AlterarSenha(this.usuario).then(
//     ()=>{
//       this.console.log('Dados alterados com sucesso!');
//     }, 
//     (error: any)=>{
//       this.console.error('erro ao atualizar dados');
//     }
//   )
// }

onSubmit(){
  if(this.alterarSenhaForm.valid){
    const id = 1;
    const NovaSenha = this.alterarSenhaForm.get('novaSenha')?.value;

    this.UsuarioService.AlterarSenha(id, NovaSenha).then(
      ()=>{
        this.sucesso = "Senha alterada com sucesso";
        this.erro = null;
        this.alterarSenhaForm.reset();
      },
      (error)=>{
        this.sucesso = null;
        this.erro = 'Erro ao alterar senha. Tentar novamente'
      }
    ).catch(()=>{
      this.sucesso = null;
      this.erro = 'erro inesperado'
    }
    )

  }
}


Voltar() {
  this.router.navigate(['/']);
}

}
