import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = '';
  routerLink!: string;
  router = inject(Router)
  url!: string
  constructor(){}
  ngOnInit(): void {
    this.url = this.router.url.split('/')[2]
    this.title = this.url.slice(0, 1).toUpperCase() + this.url.slice(1);
  }
}
