import { Cidade } from './../../model/Cidade';
import { TipoImovel } from './../../model/TipoImovel';
import { AlertComponentDetailsInterest } from './../../shared/alerts/alertDetailsInterest/alertDetailsInterest.component';
import { Pessoa } from './../../model/Pessoa';
import { Component, OnInit } from '@angular/core';
import { Interesse } from '../../model/Interesse';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { Message } from '../../model/Message';
import { MatDialog } from '@angular/material';
import { TipoInteresse } from '../../model/TipoInteresse';
import { AlertComponentOK } from '../../shared/alerts/alertOK/alertOK.component';
const STORAGE_KEY = 'current-SESSION';

@Component({
  selector: 'app-realty-search',
  templateUrl: './realty-search.component.html',
  styleUrls: ['./realty-search.component.css']
})
export class RealtySearchComponent implements OnInit {

  interesties: Interesse[];
  data = {
    Numero: 0,
    Tipo: '',
    Uf: '',
    Cidade: new Cidade(),
    Banheiros: 0,
    Quartos: 0,
    Descricao: ''
};
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    const awesomeSession: Pessoa = this.storage.get(STORAGE_KEY) || null;
    this.http.get('https://ninjatags.com.br/eng2/getListInteresses.php?applicationId=chave&email='
      + awesomeSession.Email).subscribe(data => {
              this.interesties = data as Interesse[];
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
    this.data.Numero = index + 1;
    this.data.Banheiros = this.interesties[index].Banheiros;
    this.data.Quartos = this.interesties[index].Quartos;
    this.data.Descricao = this.interesties[index].Descricao;
    this.http.get('https://ninjatags.com.br/eng2/getCidade.php?applicationId=chave&codIbgeMunicipio='
      + this.interesties[index].CodigoIbgeMunicipio).subscribe(data => {
              this.data.Cidade = data as Cidade;
            });
    const dialogAlert = this.dialog.open(AlertComponentDetailsInterest, {
      width: '400px',
      data: this.data
    });
    dialogAlert.afterClosed().subscribe(result => {
      this.data.Cidade = new Cidade();
    });
  }
  // findMe() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const dialogAlert = this.dialog.open(AlertComponentOK, {
  //         width: '400px',
  //         data: { title: 'Sucesso!', message: 'Latitude: ' + position.coords.latitude + 'Longitude: ' + position.coords.longitude }
  //       });
  //     });
  //   } else {
  //     const dialogAlert = this.dialog.open(AlertComponentOK, {
  //       width: '400px',
  //       data: { title: 'Erro!', message: 'A Geolocalização não é suportada por esse navegador!' }
  //     });
  //   }
  // }
}
