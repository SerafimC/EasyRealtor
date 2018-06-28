import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {AlertComponentOK} from '../../shared/alerts/alertOK/alertOK.component'
import { Guid } from '../../model/Guid';
import { Pessoa } from '../../model/Pessoa';
import { Interesse } from '../../model/Interesse';
const STORAGE_KEY = 'current-SESSION';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  tipos = [
    {value: '0', viewValue: 'Alugar'},
    {value: '1', viewValue: 'Comprar'}
  ];
  cidades = [
    {value: '4204202', viewValue: 'Chapecó'},
    {value: '4204202', viewValue: 'Xaxim'},
    {value: '4204202', viewValue: 'Xanxerê'},
    {value: '4204202', viewValue: 'Seara'},
    {value: '4204202', viewValue: 'Concórdia'}
  ];
  tipo = new FormControl('', [Validators.required]);
  cidade = new FormControl('', [Validators.required]);
  descricao = new FormControl('', [Validators.required]);

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private router: Router, public dialog: MatDialog, private http: HttpClient) { }


  getErrorTipoMessage() {
    return this.tipo.hasError('required') ? 'Você precisa informar o tipo' :
            '';
  }
  getErrorCidadeMessage() {
    return this.cidade.hasError('required') ? 'Você precisa informar a cidade' :
            '';
  }
  getErrorDescricaoMessage() {
    return this.descricao.hasError('required') ? 'Você precisa informar a descrição' :
            '';
  }
  ngOnInit() {
  }
  cancelar() {
    this.router.navigate(['/dashboard']);
  }
  confirmar() {
      if (!this.tipo.hasError('required')) {
        if (!this.cidade.hasError('required')) {
          if (!this.descricao.hasError('required')) {
            const awesomeSession: Pessoa = this.storage.get(STORAGE_KEY) || null;
            if(awesomeSession!=null){
              const interesse : Interesse = new Interesse();
              interesse.Guid = Guid.MakeNew().ToString();
              interesse.Email = awesomeSession.Email;
              interesse.Tipo = this.tipo.value;
              interesse.CodigoIbgeMunicipio = this.cidade.value;
              interesse.Cep = '';
              interesse.Bairro = '';
              interesse.Logradouro = '';
              interesse.Descricao = this.descricao.value;
              interesse.Quartos = 1;
              interesse.Banheiros = 1;
              console.log(interesse);
              const req = this.http.post('https://ninjatags.com.br/eng2/cadastrarInteresse.php?applicationId=chave', interesse).subscribe(
                res => {                 
                  const dialogAlert = this.dialog.open(AlertComponentOK, {
                    width: '400px',
                    data: {title: 'Sucesso!', message: 'Seu interesse foi gravado em nosso banco de dados! Aguarde, logo entraremos em contato.' ,  buttonConfirm: 'Ok'}
                  });
                  dialogAlert.afterClosed().subscribe(result => {
                    this.router.navigate(['/realty_search']);
                  });                                   
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
              
            }
            
          }
        }
      }
  }

  search_realty(){
    this.router.navigate(['/realty_search']);
  }

}
