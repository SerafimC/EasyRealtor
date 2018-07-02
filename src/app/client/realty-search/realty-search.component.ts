import { Cidade } from './../../model/Cidade';
import { TipoImovel } from './../../model/TipoImovel';
import { Router } from '@angular/router';
import { AlertComponentDetails } from './../../shared/alerts/alertDetails/alertDetails.component';
import { Pessoa } from './../../model/Pessoa';
import { Component, OnInit } from '@angular/core';
import { Interesse } from '../../model/Interesse';
import { Imovel } from '../../model/Imovel';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Message } from '../../model/Message';
import { MatDialog } from '@angular/material';
import { TipoInteresse } from '../../model/TipoInteresse';
import { AlertComponentOK } from '../../shared/alerts/alertOK/alertOK.component';
const STORAGE_KEY = 'current-SESSION';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-realty-search',
  templateUrl: './realty-search.component.html',
  styleUrls: ['./realty-search.component.css']
})
export class RealtySearchComponent implements OnInit {

  interesties: Interesse[];
  imoveis: Imovel[];
  data = {
    Numero: '',
    Tipo: '',
    Uf: '',
    Cidade: new Cidade(),
    Banheiros: 0,
    Quartos: 0,
    Descricao: ''
  };
  dataImovel = {
    Numero: '',
    Descricao: '',
    Nome: '',
    Logradouro: '',
    Bairro: '',
    Cep: '',
    Tipo: '',
    Quartos: 0,
    Banheiros: 0,
    Latitude: '',
    Cidade: new Cidade(),
    Longitude: ''
  };
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private router: Router,
  private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    const awesomeSession: Pessoa = this.storage.get(STORAGE_KEY) || null;
    this.http.get('https://ninjatags.com.br/eng2/getListInteresses.php?applicationId=chave&email='
      + awesomeSession.Email).subscribe(data => {
              this.interesties = data as Interesse[];
              console.log(this.interesties);
              this.http.post('https://ninjatags.com.br/eng2/getListImoveisPelosInteresses.php?applicationId=chave',
                this.interesties).subscribe(dataImoveis => {
                  this.imoveis = dataImoveis as Imovel[];
                  console.log(this.imoveis);
                });
            });
  }
  apagarInteresse(index) {
    this.http.delete('https://ninjatags.com.br/eng2/apagarInteresse.php?applicationId=chave&guid='
    + this.interesties[index].Guid).subscribe(data => {
          const msg = data as Message;
          if (msg.message === 'Interesse apagado!') {
            this.ngOnInit();
          }
          });
  }
  detalhesInteresse(index) {

    switch (this.interesties[index].Tipo.toString()) {
      case '0':
      this.data.Tipo = 'Alugar';
      break;
      case '1':
      this.data.Tipo = 'Comprar';
      break;
    }
    console.log(this.data);
    this.data.Numero = 'Interesse ' + (index + 1);
    this.data.Banheiros = this.interesties[index].Banheiros;
    this.data.Quartos = this.interesties[index].Quartos;
    this.data.Descricao = this.interesties[index].Descricao;
    this.http.get('https://ninjatags.com.br/eng2/getCidade.php?applicationId=chave&codIbgeMunicipio='
      + this.interesties[index].CodigoIbgeMunicipio).subscribe(data => {
              this.data.Cidade = data as Cidade;
            });
    const dialogAlert = this.dialog.open(AlertComponentDetails, {
      width: '400px',
      data: this.data
    });
    dialogAlert.afterClosed().subscribe(result => {
      this.data.Cidade = new Cidade();
    });
  }
  detalhesImovel(index) {
    switch (this.imoveis[index].Tipo.toString()) {
      case '0':
      this.dataImovel.Tipo = 'Apartamento';
      break;
      case '1':
      this.dataImovel.Tipo = 'Casa';
      break;
      case '2':
      this.dataImovel.Tipo = 'Sala Comercial';
      break;
      case '3':
      this.dataImovel.Tipo = 'Terreno';
      break;
    }
    console.log(this.dataImovel);
    this.dataImovel.Numero = 'Imóvel ' + (index + 1);
    this.dataImovel.Banheiros = this.imoveis[index].Banheiros;
    this.dataImovel.Quartos = this.imoveis[index].Quartos;
    this.dataImovel.Descricao = this.imoveis[index].Descricao;
    this.http.get('https://ninjatags.com.br/eng2/getCidade.php?applicationId=chave&codIbgeMunicipio='
      + this.imoveis[index].CodigoIbgeMunicipio).subscribe(dataImovel => {
              this.dataImovel.Cidade = dataImovel as Cidade;
            });
    const dialogAlert = this.dialog.open(AlertComponentDetails, {
      width: '400px',
      data: this.dataImovel
    });
    dialogAlert.afterClosed().subscribe(result => {
      this.dataImovel.Cidade = new Cidade();
    });
  }
  cadastrarInteresse() {
    this.router.navigate(['/new_interest']);
  }
  cadastrarImovel() {
    this.router.navigate(['/announcement']);
  }
  buscarImovel() {
    this.router.navigate(['/realty_search']);
  }
  verImoveis() {
    this.router.navigate(['/announcements']);
  }
  inicio() {
    this.router.navigate(['/dashboard']);
  }
}
