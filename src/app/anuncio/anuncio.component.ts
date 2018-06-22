import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  tipos = [
    {value: 'alugar-0', viewValue: 'Alugar'},
    {value: 'comprar-1', viewValue: 'Comprar'}
  ];
  cidades = [
    {value: 'chapeco-0', viewValue: 'Chapecó'},
    {value: 'xaxim-1', viewValue: 'Xaxim'},
    {value: 'xanxere-2', viewValue: 'Xanxerê'},
    {value: 'seara-3', viewValue: 'Seara'},
    {value: 'concordia-4', viewValue: 'Concórdia'}
  ];
  email = new FormControl('', [Validators.required, Validators.email]);
  tipo = new FormControl('', [Validators.required]);
  cidade = new FormControl('', [Validators.required]);
  descricao = new FormControl('', [Validators.required]);

  constructor(private router: Router) { }

  getErrorEmailMessage() {
    return this.email.hasError('required') ? 'Você precisa informar algo' :
        this.email.hasError('email') ? 'Não é um e-mail válido' :
            '';
  }
  getErrorTipoMessage() {
    return this.email.hasError('required') ? 'Você precisa informar o tipo' :
            '';
  }
  getErrorCidadeMessage() {
    return this.email.hasError('required') ? 'Você precisa informar a cidade' :
            '';
  }
  getErrorDescricaoMessage() {
    return this.email.hasError('required') ? 'Você precisa informar a descrição' :
            '';
  }
  ngOnInit() {
  }
  cancelar() {
    this.router.navigate(['/login']);
  }
  confirmar() {
    if (!this.email.hasError('required') && !this.email.hasError('email')) {
      if (!this.tipo.hasError('required')) {
        if (!this.cidade.hasError('required')) {
          if (!this.descricao.hasError('required')) {
            alert('Seu interesse foi salvo, logo entraremos em contato!');
          }
        }
      }
    }
  }
}

