import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelephoneMinus } from 'ng-bootstrap-icons/icons';
import { Endereco } from 'src/app/models/endereco/endereco';
import { Tutor } from 'src/app/models/tutor/tutor';
import { TutorService } from 'src/app/services/tutor/tutor.service';

@Component({
  selector: 'app-tutor-details',
  templateUrl: './tutor-details.component.html',
  styleUrls: ['./tutor-details.component.scss'],
})
export class TutorDetailsComponent implements OnInit {
  tutor!: Tutor;
  url!: string;
  isErro: boolean = false;
  mensagem!: string;
  router = inject(Router);
  service = inject(TutorService);
  id!: string;
  modoRegister = true;
  constructor(private route: ActivatedRoute) {
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
      }
    } else {
      this.modoRegister = true;
      this.tutor = new Tutor();
    }
  }

  getById(id: number) {
    this.service.getById(id).subscribe({
      next: (tutor) => {
        this.tutor = tutor;
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
  addEndereco(){}
}
