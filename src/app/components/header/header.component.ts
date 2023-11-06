import { Location } from '@angular/common';
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
  constructor(private location: Location){}
  ngOnInit(): void {
    this.url = this.router.url.split('/')[2]
    if(this.url == undefined){
      this.title = "npvet"
      console.log(this.title)
    }else{
      this.title = this.url.slice(0, 1).toUpperCase() + this.url.slice(1);
    }
  }
  back(){
    this.location.back()
  }
}

