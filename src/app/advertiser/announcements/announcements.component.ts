import { Component, OnInit } from '@angular/core';
import { Imovel } from '../../model/Imovel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  dataImovel = {
    Descricao: '',
    Nome: '',
    Logradouro: '',
    Bairro: '',
    Cep: '',
    Tipo: '',
    Quartos: 0,
    Banheiros: 0,
    Latitude: '',
    Longitude: ''
  };
  imoveis = [new Imovel(), new Imovel()];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cadastrarImovel() {
    this.router.navigate(['/new_advertise']);
  }

}
