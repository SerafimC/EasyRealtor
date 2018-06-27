import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realty-search',
  templateUrl: './realty-search.component.html',
  styleUrls: ['./realty-search.component.css']
})
export class RealtySearchComponent implements OnInit {
  interesties = [
    {title: 'Interesse 1', description: 'Procuro apartamento no centro'},
    {title: 'Interesse 2', description: 'Procuro casa no centro'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
