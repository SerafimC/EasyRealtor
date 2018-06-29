import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import {MatDialog} from '@angular/material';
import { RegisterComponent } from '../register/register.component';

const STORAGE_KEY = 'current-SESSION';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private router: Router, public dialog: MatDialog) {
  }
  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
  openCadastro() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      height: '500px',
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openLogin();
      }
    });
  }
  setSession(user) {
    console.log(user);
    this.storage.set(STORAGE_KEY, user);
  }

  public getSession(): boolean {
    const awesomeSession: object = this.storage.get(STORAGE_KEY) || null;
    console.log(awesomeSession);
    if (awesomeSession != null) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    console.log(this.getSession());
    // testa se tem sessão ativa, se tiver joga pra proxima página
    if (this.getSession()) {
      this.router.navigate(['/dashboard']);
    }
  }
  advertiser() {
    this.router.navigate(['/advertiser']);
  }
  client() {
    this.router.navigate(['/new_interest']);
  }

}
