import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal/animal';
import { ExameFisico } from 'src/app/models/exame-fisico/exame-fisico';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { ExameFisicoService } from 'src/app/services/exame-fisico/exame-fisico.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-exame-edit',
  templateUrl: './exame-edit.component.html',
  styleUrls: ['./exame-edit.component.scss']
})
export class ExameEditComponent {
  isErro = true;
  mensagem = '';

  id!: string


  exameFisico: ExameFisico = new ExameFisico();
  animais!: Animal[];
  service = inject(ExameFisicoService)
  animalService = inject(AnimalService);

  constructor(private router: Router, private location: Location){
    const path = location.path();
    const parts = path.split('/');
    this.id = parts[parts.length - 1];
    this.getExameById(this.id);

  }

  ngOnInit(){
    this.getAnimais();

  }

  getExameById(id: string){
    this.service.getById(Number(id)).subscribe({      next: success => {
      this.exameFisico = success
    }});
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
    this.service.update(this.exameFisico).subscribe({
      next: (u) => {
        this.mensagem = "Editado com sucesso!";
        this.isErro = false;
        window.scrollTo(0, 0);

      },
      error: (err) => {
        this.mensagem = err.message;
        this.isErro = true;
      },
    });
  
  }


}

