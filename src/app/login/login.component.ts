import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  hide = true;
  public email = new FormControl('', [Validators.required, Validators.email]);
  public senha = new FormControl('', [Validators.required]);
  getErrorEmailMessage() {
    return this.email.hasError('required') ? 'Você precisa informar o seu e-mail' :
        this.email.hasError('email') ? 'Não é um e-mail válido' :
            '';
  }
  getErrorSenhaMessage() {
    return this.email.hasError('required') ? 'Você precisa informar a senha' :
            '';
  }

  constructor(public dialogRef: MatDialogRef<LoginComponent>) {}

  login() {
    if (!this.email.hasError('required') && !this.email.hasError('email')) {
      if (!this.senha.hasError('required')) {
        const usr = {
          email: this.email.value,
          senha: this.senha.value,
        };
      }
    }
  }
}
