import { Cidade } from './../model/Cidade';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';
import { Pessoa } from '../model/Pessoa';
import { Message } from '../model/Message';
import {MatDialog} from '@angular/material';
import { AlertComponentOK } from '../shared/alerts/alertOK/alertOK.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  tipos = [
    {value: '0', viewValue: 'Corretor'},
    {value: '1', viewValue: 'Cliente'}
  ];
  ufs = [
    {value: '12', viewValue: 'AC'},
    {value: '27', viewValue: 'AL'},
    {value: '16', viewValue: 'AP'},
    {value: '13', viewValue: 'AM'},
    {value: '29', viewValue: 'BA'},
    {value: '23', viewValue: 'CE'},
    {value: '53', viewValue: 'DF'},
    {value: '32', viewValue: 'ES'},
    {value: '52', viewValue: 'GO'},
    {value: '21', viewValue: 'MA'},
    {value: '51', viewValue: 'MT'},
    {value: '50', viewValue: 'MS'},
    {value: '31', viewValue: 'MG'},
    {value: '15', viewValue: 'PA'},
    {value: '25', viewValue: 'PB'},
    {value: '41', viewValue: 'PR'},
    {value: '26', viewValue: 'PE'},
    {value: '22', viewValue: 'PI'},
    {value: '33', viewValue: 'RJ'},
    {value: '24', viewValue: 'RN'},
    {value: '43', viewValue: 'RS'},
    {value: '11', viewValue: 'RO'},
    {value: '14', viewValue: 'RR'},
    {value: '42', viewValue: 'SC'},
    {value: '35', viewValue: 'SP'},
    {value: '28', viewValue: 'SE'},
    {value: '17', viewValue: 'TO'}
  ];
  cidades = [];
  buttonClicked = false;
  tipo = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  nome = new FormControl('', [Validators.required]);
  cpf = new FormControl('', [Validators.required]);
  telefone = new FormControl('', [Validators.required]);
  uf = new FormControl('', [Validators.required]);
  cidade = new FormControl('', [Validators.required]);
  logradouro = new FormControl('', [Validators.required]);
  cep = new FormControl('', [Validators.required]);
  bairro = new FormControl('', [Validators.required]);
  senha = new FormControl('', [Validators.required]);
  confirmacao = new FormControl('', [Validators.required]);

  getErrorTipoMessage() {
      return this.email.hasError('required') ? 'Você precisa informar o tipo' :
      '';
  }
  getErrorEmailMessage() {
    return this.email.hasError('required') ? 'Você precisa informar o e-mail' :
        this.email.hasError('email') ? 'Não é um e-mail válido' :
            '';
  }
  getErrorNomeMessage() {
    return this.email.hasError('required') ? 'Você precisa informar o nome' :
            '';
  }
  getErrorCPFMessage() {
    return this.email.hasError('required') ? 'Você precisa informar o CPF' :
            '';
  }
  getErrorTelefoneMessage() {
    return this.email.hasError('required') ? 'Você precisa informar o telefone' :
            '';
  }
  getErrorUfMessage() {
    return this.email.hasError('required') ? 'Você precisa informar a UF' :
            '';
  }
  getErrorCidadeMessage() {
    return this.email.hasError('required') ? 'Você precisa informar a cidade' :
            '';
  }
  getErrorLogradouroMessage() {
    return this.email.hasError('required') ? 'Você precisa informar o logradouro' :
            '';
  }
  getErrorCepMessage() {
    return this.email.hasError('required') ? 'Você precisa informar o CEP' :
            '';
  }
  getErrorBairroMessage() {
    return this.email.hasError('required') ? 'Você precisa informar o bairro' :
            '';
  }
  getErrorSenhaMessage() {
    return this.email.hasError('required') ? 'Você precisa informar a sua senha' :
            '';
  }
  getErrorConfirmacaoMessage() {
    return this.email.hasError('required') ? 'Você precisa confirmar a sua senha' :
            '';
  }
  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private http: HttpClient, public dialog: MatDialog) {}
  ngOnInit() {

  }
  carregarCidades(uf: any) {
    this.cidades = [];
    this.http.get('https://ninjatags.com.br/eng2/getMunicipios.php?applicationId=chave&UF_CODIGO_IBGE=' + uf).subscribe(data => {
      this.cidades = data as Cidade[];
    });
  }
  closeDialog(option) {
    this.dialogRef.close(option);
  }

  cadastrar() {
    this.tipo.markAsTouched();
    this.cep.markAsTouched();
    this.email.markAsTouched();
    this.cpf.markAsTouched();
    this.telefone.markAsTouched();
    this.uf.markAsTouched();
    this.cidade.markAsTouched();
    this.logradouro.markAsTouched();
    this.bairro.markAsTouched();
    this.senha.markAsTouched();
    this.confirmacao.markAsTouched();
    this.nome.markAsTouched();
    this.buttonClicked = true;

    if(this.verificarPendenciaFormulario()){
      if(this.verificarSenhasConferem()){
        const pessoa : Pessoa = new Pessoa();
        pessoa.Bairro = this.bairro.value;
        pessoa.Cep = this.cep.value;
        pessoa.CodigoIbgeMunicipio = this.cidade.value;
        pessoa.Cpf = this.cpf.value;
        pessoa.Email = this.email.value;
        pessoa.Logradouro = this.logradouro.value;
        pessoa.Nome = this.nome.value;
        pessoa.Senha = this.senha.value;
        pessoa.Telefone = this.telefone.value;
        pessoa.Tipo = this.tipo.value;
        pessoa.Ativo = true;
        const req = this.http.post('https://ninjatags.com.br/eng2/cadastrarPessoa.php?applicationId=chave', pessoa).subscribe(
                res => {      
                  const msg = res as Message; 
                  if(msg.message=='Sucesso!'){
                    const dialogAlert = this.dialog.open(AlertComponentOK, {
                      width: '400px',
                      data: {title: 'Sucesso!', message: 'Seu cadastro foi efetuado com sucesso. Realize o login para continuar!' ,  buttonConfirm: 'Ok'}
                    });
                    dialogAlert.afterClosed().subscribe(result => {
                      this.closeDialog(true);
                    });                                   
                  }else if(msg.message=='Já existe um mesmo e-mail cadastrado!'){
                    const dialogAlert = this.dialog.open(AlertComponentOK, {
                      width: '400px',
                      data: {title: 'Atenção!', message:  msg.message,  buttonConfirm: 'Ok'}
                    });
                    dialogAlert.afterClosed().subscribe(result => {
                      this.closeDialog(true);
                    });    
                  }else{
                    const dialogAlert = this.dialog.open(AlertComponentOK, {
                      width: '400px',
                      data: {title: 'Erro!', message: 'Ocorreu um erro ao gravar o seu interesse no nosso banco de dados, tente novamente!' ,  buttonConfirm: 'Ok'}
                    });                    
                  }                            
                },
                err => {
                  console.log(err);
                  const dialogAlert = this.dialog.open(AlertComponentOK, {
                    width: '400px',
                    data: {title: 'Erro!', message: 'Ocorreu um erro ao gravar o seu interesse no nosso banco de dados, tente novamente!' ,  buttonConfirm: 'Ok'}
                    //data: {title: 'Erro!', message: err ,  buttonConfirm: 'Ok'}
                  });
                }
                );
      }else{
        const dialogAlert = this.dialog.open(AlertComponentOK, {
          width: '400px',
          data: {title: 'Erro!', message: 'Senhas digitas não conferem!' ,  buttonConfirm: 'Ok'}
        });
        this.senha.setValue('');
        this.confirmacao.setValue('');
      }
    }
  }
  verificarPendenciaFormulario() {
    var validado : boolean = false;
    if (!this.tipo.hasError('required')) 
      if (!this.email.hasError('required') && !this.email.hasError('email')) 
        if (!this.nome.hasError('required')) 
          if (!this.cpf.hasError('required')) 
          if (!this.telefone.hasError('required')) 
          if (!this.uf.hasError('required')) 
          if (!this.cidade.hasError('required')) 
          if (!this.logradouro.hasError('required')) 
          if (!this.cep.hasError('required')) 
          if (!this.bairro.hasError('required')) 
          if (!this.senha.hasError('required')) 
            if (!this.confirmacao.hasError('required')) 
              validado = true;                    
    return validado;            
  }
  verificarSenhasConferem() {
    if(this.senha.value==this.confirmacao.value)
    return true;
    else return false;
  }
}
