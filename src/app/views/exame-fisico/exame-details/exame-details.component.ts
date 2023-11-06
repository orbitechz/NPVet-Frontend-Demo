import { Component, OnInit } from '@angular/core';
import { ExameFisico } from 'src/app/models/exame-fisico/exame-fisico';
import { ExameFisicoService } from 'src/app/services/exame-fisico/exame-fisico.service';
import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { Animal } from 'src/app/models/animal/animal';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ConsultaService } from 'src/app/services/consulta/consulta.service';
import { Consulta } from 'src/app/models/consulta/consulta';

@Component({
  selector: 'app-exame-details',
  templateUrl: './exame-details.component.html',
  styleUrls: ['./exame-details.component.scss'],
})
export class ExameDetailsComponent implements OnInit {
  isErro = true;
  mensagem = '';

  exameFisico: ExameFisico = new ExameFisico();
  consultaId!: number;
  animais!: Animal[];
  service = inject(ExameFisicoService);
  animalService = inject(AnimalService);
  url!: string;
  consultaService = inject(ConsultaService);
  route = inject(ActivatedRoute);
  constructor(private router: Router, route: ActivatedRoute) {}

  ngOnInit() {
    this.url = this.router.url;
    console.log(this.url);
    if (this.url.includes('register')) {
      this.route.params.subscribe((params) => {
        const id = +params['id'];
        this.consultaId = id;
        this.consultaService.getById(this.consultaId).subscribe({
          next: (consulta) => {
            this.exameFisico.consulta = consulta;
            this.exameFisico.animal = consulta.animal;
          },
        });
      });
    }
    this.getAnimais();
  }

  getAnimais() {
    this.animalService.getAll().subscribe(
      (data: Animal[]) => {
        this.animais = data; // Atribua os dados à matriz de animais quando a resposta chegar
      },
      (error) => {
        console.error('Erro ao buscar animais', error);
      }
    );
  }

  submit() {
    this.service.save(this.exameFisico).subscribe({
      next: (u) => {
        this.mensagem = 'Cadastrado com sucesso!';
        this.isErro = false;
      },
      error: (err) => {
        this.mensagem = err.message;
        this.isErro = true;
      },
    });
  }
}
