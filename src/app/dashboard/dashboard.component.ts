import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  advertiser() {
    this.router.navigate(['/new_advertise']);
  }
  client() {
    this.router.navigate(['/new_interest']);
  }
}
