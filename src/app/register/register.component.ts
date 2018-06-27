import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'current-SESSION';
var user = {
  login : null,
  senha : null
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  constructor(@Inject(SESSION_STORAGE) private storage: StorageService, private router: Router,) {
  }
  
  setSession(user) {
    this.storage.set(STORAGE_KEY, user);  
  }
  
  public getSession(): boolean {
    const awesomeSession: number = this.storage.get(STORAGE_KEY) || null;
    if(awesomeSession != null){
      return true;
    }else{
      return false;
    }
  }
 
  ngOnInit() {
    console.log("Sessão: " + this.getSession());
    // testa se tem sessão ativa, se tiver joga pra proxima página
    if (this.getSession()){
      this.router.navigate(['/login']);
    }
  }
  advertiser() {
    this.router.navigate(['/advertiser']);
  }
  client() {
    this.router.navigate(['/new_interest']);
  }
}
