import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {AlertComponentOK} from '../../shared/alerts/alertOK/alertOK.component';
import { Guid } from '../../model/Guid';
import { Pessoa } from '../../model/Pessoa';
import { Imovel } from '../../model/Imovel';
import { Cidade } from '../../model/Cidade';
import { Ufs } from '../../model/Ufs';
const STORAGE_KEY = 'current-SESSION';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  buttonClicked = false;
  cidades: Cidade[];
  tipos = [
    {value: '0', viewValue: 'Apartamento'},
    {value: '1', viewValue: 'Casa'},
    {value: '2', viewValue: 'Sala Comercial'},
    {value: '3', viewValue: 'Terreno'}];

  tipo = new FormControl('', [Validators.required]);
  cidade = new FormControl('', [Validators.required]);
  descricao = new FormControl('', [Validators.required]);
  uf = new FormControl('', [Validators.required]);
  banheiros = new FormControl('', [Validators.required]);
  quartos = new FormControl('', [Validators.required]);
  logradouro = new FormControl('', [Validators.required]);
  bairro = new FormControl('', [Validators.required]);
  cep = new FormControl('', [Validators.required]);
  constructor(@Inject(SESSION_STORAGE)
    private storage: StorageService,
    private router: Router,
    public dialog: MatDialog,
    private http: HttpClient,
    private ufs: Ufs) { }

  ngOnInit() {
  }
  getErrorTipoMessage() {
    return this.tipo.hasError('required') ? 'Você precisa informar o tipo' :
            '';
  }
  getErrorCidadeMessage() {
    return this.cidade.hasError('required') ? 'Você precisa informar a cidade' :
            '';
  }
  getErrorUfMessage() {
    return this.cidade.hasError('required') ? 'Você precisa informar a UF' :
            '';
  }
  getErrorDescricaoMessage() {
    return this.descricao.hasError('required') ? 'Você precisa informar a descrição' :
            '';
  }
  getErrorBanheirosMessage() {
    return this.descricao.hasError('required') ? 'Você precisa informar a quantidade de banheiros' :
            '';
  }
  getErrorQuartosMessage() {
    return this.descricao.hasError('required') ? 'Você precisa informar a quantidade de quartos' :
            '';
  }
  getErrorRequired() {
    return this.descricao.hasError('required') ? 'Você precisa informar este campo' :
    '';
  }
  carregarCidades(uf: any) {
    this.cidades = [];
    this.http.get('https://ninjatags.com.br/eng2/getMunicipios.php?applicationId=chave&UF_CODIGO_IBGE=' + uf).subscribe(data => {
      this.cidades = data as Cidade[];
    });
  }
  cancelar() {
    this.router.navigate(['/dashboard']);
  }
  confirmar() {
    this.buttonClicked = true;
    this.tipo.markAsTouched();
    this.cidade.markAsTouched();
    this.descricao.markAsTouched();
    this.uf.markAsTouched();
    this.banheiros.markAsTouched();
    this.quartos.markAsTouched();
    this.logradouro.markAsTouched();
    this.bairro.markAsTouched();
    this.cep.markAsTouched();
      if (!this.tipo.hasError('required')) {
        if (!this.cidade.hasError('required')) {
          if (!this.descricao.hasError('required')) {
            if (!this.uf.hasError('required')) {
              if (!this.banheiros.hasError('required')) {
                if (!this.quartos.hasError('required')) {
                if (!this.logradouro.hasError('required')) {
                if (!this.bairro.hasError('required')) {
                if (!this.cep.hasError('required')) {
            const awesomeSession: Pessoa = this.storage.get(STORAGE_KEY) || null;
            if (awesomeSession != null) {
              const imovel: Imovel = new Imovel();
              imovel.Guid = Guid.MakeNew().ToString();
              imovel.Email = awesomeSession.Email;
              imovel.Tipo = this.tipo.value;
              imovel.CodigoIbgeMunicipio = this.cidade.value;
              imovel.Nome = '';
              imovel.Descricao = this.descricao.value;
              imovel.Quartos = this.quartos.value;
              imovel.Banheiros = this.banheiros.value;
              imovel.Logradouro = this.logradouro.value;
              imovel.Bairro = this.bairro.value;
              imovel.Cep = this.cep.value;
              imovel.Latitude = '0';
              imovel.Longitude = '0';
              //console.log(imovel);
              const req = this.http.post('https://ninjatags.com.br/eng2/cadastrarImovel.php?applicationId=chave', imovel).subscribe(
                res => {
                  const dialogAlert = this.dialog.open(AlertComponentOK, {
                    width: '400px',
                    data: {title: 'Sucesso!',
                            message: 'Seu imovel foi anunciado!' ,
                            buttonConfirm: 'Ok'}
                  });
                  dialogAlert.afterClosed().subscribe(result => {
                    this.router.navigate(['/realty_search']);
                  });
                },
                err => {
                  console.log(err);
                  const dialogAlert = this.dialog.open(AlertComponentOK, {
                    width: '400px',
                    data: {title: 'Erro!',
                          message: 'Ocorreu um erro. Tente novamente mais tarde!' ,
                           buttonConfirm: 'Ok'}
                    // data: {title: 'Erro!', message: err ,  buttonConfirm: 'Ok'}
                  });
                }
                );

            }
          }
          }
          }
          }
          }
          }
          }
        }
      }
  }
  announcements() {
    this.router.navigate(['/advertises']);
  }
}
