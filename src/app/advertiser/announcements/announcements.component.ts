import { Component, OnInit } from '@angular/core';
import { Imovel } from '../../model/Imovel';
import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Pessoa } from '../../model/Pessoa';
import { Cidade } from '../../model/Cidade';
import { AlertComponentDetails } from '../../shared/alerts/alertDetails/alertDetails.component';
import { Message } from '../../model/Message';

const STORAGE_KEY = 'current-SESSION';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  imoveis = [];
  data = {
    Numero: '',
    Tipo: '',
    Uf: '',
    Cidade: new Cidade(),
    Banheiros: 0,
    Quartos: 0,
    Descricao: ''
  };
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private router: Router,
  private http: HttpClient, public dialog: MatDialog) {}


  ngOnInit() {
    const awesomeSession: Pessoa = this.storage.get(STORAGE_KEY) || null;
    console.log(awesomeSession);
    this.http.get('https://ninjatags.com.br/eng2/getListImoveis.php?applicationId=chave&email='
    + awesomeSession.Email).subscribe(data => {
            this.imoveis = data as Imovel[];
          });

  }
  detalhesImovel(index) {
    switch (this.imoveis[index].Tipo.toString()) {
      case '0':
      this.data.Tipo = 'Apartamento';
      break;
      case '1':
      this.data.Tipo = 'Casa';
      break;
      case '2':
      this.data.Tipo = 'Sala Comercial';
      break;
      case '3':
      this.data.Tipo = 'Terreno';
      break;
    }
    console.log(this.data);
    this.data.Numero = 'Imóvel ' + (index + 1);
    this.data.Banheiros = this.imoveis[index].Banheiros;
    this.data.Quartos = this.imoveis[index].Quartos;
    this.data.Descricao = this.imoveis[index].Descricao;
    this.http.get('https://ninjatags.com.br/eng2/getCidade.php?applicationId=chave&codIbgeMunicipio='
      + this.imoveis[index].CodigoIbgeMunicipio).subscribe(data => {
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
  apagarImovel(index) {
    this.http.delete('https://ninjatags.com.br/eng2/apagarImovel.php?applicationId=chave&guid='
    + this.imoveis[index].Guid).subscribe(data => {
          const msg = data as Message;
          if (msg.message === 'Imovel apagado!') {
            this.ngOnInit();
          }
          });
  }
  cadastrarImovel() {
    this.router.navigate(['/new_advertise']);
  }
  cadastrarInteresse() {
    this.router.navigate(['/new_interest']);
  }
  search_realty() {
    this.router.navigate(['/realty_search']);
  }
  inicio() {
    this.router.navigate(['/dashboard']);
  }
}
