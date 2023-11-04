import { Component, OnInit } from '@angular/core';
import { ExameFisico } from 'src/app/models/exame-fisico/exame-fisico';
import { ExameFisicoService } from 'src/app/services/exame-fisico/exame-fisico.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { Animal } from 'src/app/models/animal/animal';

@Component({
  selector: 'app-exame-details',
  templateUrl: './exame-details.component.html',
  styleUrls: ['./exame-details.component.scss']
})
export class ExameDetailsComponent implements OnInit{

  isErro = true;
  mensagem = '';

  exameFisico: ExameFisico = new ExameFisico();

  animais!: Animal[];
  service = inject(ExameFisicoService)
  animalService = inject(AnimalService);

  constructor(private router: Router){}

  ngOnInit(){
    this.getAnimais();
  }

  getAnimais(){
    this.animalService.getAll().subscribe(
      (data: Animal[]) => {
        this.animais = data; // Atribua os dados à matriz de animais quando a resposta chegar
      },
      (error) => {
        console.error('Erro ao buscar animais', error);
      }
    );  }

  submit(){
    this.service.save(this.exameFisico).subscribe({
      next: (u) => {
      },
      error: (err) => {
        this.mensagem = err.message;
        this.isErro = true;
      },
    });
  
  }

}
