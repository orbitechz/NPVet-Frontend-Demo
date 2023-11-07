import { Location } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  title: string = '';
  routerLink!: string;
  router = inject(Router);
  url!: string;
  constructor(private location: Location) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.url = event.url.split('/')[2] 
        if (this.url == undefined) {
          this.title = 'npvet';
          console.log(this.title);
        } else {
          this.title = this.url.slice(0, 1).toUpperCase() + this.url.slice(1);
        }
      });
  }
  back() {
    this.location.back();
  }
}
