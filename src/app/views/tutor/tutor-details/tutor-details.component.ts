import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/models/endereco/endereco';

import { Genero } from 'src/app/models/enums/genero';
import { Tutor } from 'src/app/models/tutor/tutor';
import { TutorService } from 'src/app/services/tutor/tutor.service';

@Component({
  selector: 'app-tutor-details',
  templateUrl: './tutor-details.component.html',
  styleUrls: ['./tutor-details.component.scss'],
})
export class TutorDetailsComponent implements OnInit {
  tutor = new Tutor();
  keys = Object.keys
  generos = Genero

  id!: string;
  url!: string;
  isErro: boolean = false;
  modoRegister = true;
  mensagem!: string;

  router = inject(Router);
  service = inject(TutorService);

  constructor(private route: ActivatedRoute) {
    this.tutor.enderecos = []
    this.url = this.router.url;
  }
  ngOnInit(): void {
    if (!this.url.includes('register')) {
      this.modoRegister = false;
      this.id = this.route.snapshot.paramMap.get('id') as string;
      if (Number(this.id)) {
        this.getById(Number(this.id));
      } else {
        this.isErro = true;
        this.mensagem = 'ID informado é inválido!';
        this.tutor.enderecos.push(new Endereco())
      }
    } else {
      this.modoRegister = true;
      this.tutor.enderecos.push(new Endereco())
    }
  }

  getById(id: number) {
    this.service.getById(id).subscribe({
      next: (tutor) => {
        this.tutor = tutor;
        console.log(this.tutor.enderecos)
      },
      error: (error) => {
        this.isErro = true;
        this.mensagem = error.error;
      },
    });
  }
  confirmar() {
    this.modoRegister ? this.register() : this.edit();
  }
  register() {
    this.service.create(this.tutor).subscribe({
      next: (tutor) => {
        this.router.navigate(["['/web/tutor']", tutor.id]);
      },
      error: (error) => {
        this.isErro = true;
        this.mensagem = error.mensagem;
      },
    });
  }
  edit() {
    this.service.update(Number(this.id), this.tutor).subscribe({
      next: (tutor) => {
        this.router.navigate(["['/web/tutor']", tutor.id]);
      },
      error: (error) => {
        this.isErro = true;
        this.mensagem = error.mensagem;
      },
    });
  }

  addTelefone(){}
  addEndereco(){
    this.tutor.enderecos.push(new Endereco())
  }
  removeEndereco(index: number){
    this.tutor.enderecos.splice(index, 1);
  }
}
