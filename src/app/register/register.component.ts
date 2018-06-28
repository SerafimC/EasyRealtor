import { Cidade } from './../model/Cidade';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  tipos = [
    {value: 'cliente', viewValue: 'Cliente'},
    {value: 'corretor', viewValue: 'Corretor'}
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
  cidades = [
  ];
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
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {

  }
  carregarCidades(uf: any) {
    this.cidades = [];
    this.http.get('https://ninjatags.com.br/eng2/getMunicipios.php?applicationId=chave&UF_CODIGO_IBGE=' + uf).subscribe(data => {
      this.cidades = data as Cidade[];
    });
  }
}
