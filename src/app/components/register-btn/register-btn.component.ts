import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-btn',
  templateUrl: './register-btn.component.html',
  styleUrls: ['./register-btn.component.scss']
})
export class RegisterBtnComponent {
  @Input() registerLink!: string
  @Input() text: string = "Cadastrar novo"
  router = inject(Router)
  constructor(){}

  register(){
    this.router.navigate([`${this.registerLink}`])
  }
}
