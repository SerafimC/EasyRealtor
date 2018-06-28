import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../model/Pessoa';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {MatDialog} from '@angular/material';
import { AlertComponentOKCancel } from '../shared/alerts/alertOKCancel/alertOKCancel.component';
import {Md5} from 'ts-md5/dist/md5';

const STORAGE_KEY = 'current-SESSION';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  pessoa = new Pessoa();
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
  closeDialog(option){
    this.dialogRef.close(option);
  }
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, public dialogRef: MatDialogRef<LoginComponent>, public dialog: MatDialog, private http: HttpClient) {}
  
  efetuarLogin() {
    if (!this.email.hasError('required') && !this.email.hasError('email')) {
      if (!this.senha.hasError('required')) { 
          try {
            const md5 = new Md5();
            md5.appendStr(this.senha.value);
            this.http.get('https://ninjatags.com.br/eng2/getPessoa.php?applicationId=chave&email=' + this.email.value + '&senha=' + md5.end().toString()).subscribe(data => {
              this.pessoa = data as Pessoa;
              if(this.pessoa.Email==null){              
                const error : Error = data as Error;
                console.log(error);
                const dialogAlert = this.dialog.open(AlertComponentOKCancel, {
                  width: '400px',
                  data: {title: 'Erro!', message: error.message, buttonCancel: 'Cancelar', buttonConfirm: 'Tentar novamente'}
                });
                dialogAlert.afterClosed().subscribe(result => {
                  if(!result) this.closeDialog(-1);
                });
              }else{
                console.log(this.pessoa);
                this.setSession(this.pessoa);
                this.closeDialog(1);
              }            
            });
          }catch(erro) {
            console.log(erro);
            const error : Error = erro as Error;
            const dialogAlert = this.dialog.open(AlertComponentOKCancel, {
              width: '400px',
              data: {title: 'Erro!', message: error.message, buttonCancel: 'Cancelar', buttonConfirm: 'Tentar novamente'}          });
            dialogAlert.afterClosed().subscribe(result => {
              if(!result) this.closeDialog(-1);
            });
          }
      }
    }
    
  }
  setSession(user) {
    console.log(user);
    this.storage.set(STORAGE_KEY, user);
  }

  public getSession(): boolean {
    const awesomeSession: Pessoa = this.storage.get(STORAGE_KEY) || null;
    console.log(awesomeSession);
    if (awesomeSession != null) {
      return true;
    } else {
      return false;
    }
  }
  login() {
    
  }
}
