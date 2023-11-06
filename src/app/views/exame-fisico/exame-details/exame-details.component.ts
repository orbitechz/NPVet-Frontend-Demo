import { Component, OnInit } from '@angular/core';
import { ExameFisico } from 'src/app/models/exame-fisico/exame-fisico';
import { ExameFisicoService } from 'src/app/services/exame-fisico/exame-fisico.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { Animal } from 'src/app/models/animal/animal';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exame-details',
  templateUrl: './exame-details.component.html',
  styleUrls: ['./exame-details.component.scss']
})
export class ExameDetailsComponent implements OnInit{

  isErro = true;
  mensagem = '';

  filteredReturn!: ExameFisico[]

  exameFisico: ExameFisico = new ExameFisico();

  myControl = new FormControl<string | Animal>('');
  filteredOptions!: Observable<Animal[]>;

  animais!: Animal[];
  service = inject(ExameFisicoService)
  animalService = inject(AnimalService);

  constructor(private router: Router){}

  ngOnInit(){
    this.getAnimais();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.nome;
        return name ? this._filter(name as string) : this.animais.slice();
      }),
    );

  }


  displayFn(user: Animal): string {
    return user && user.nome ? user.nome : '';
  }

  private _filter(value: string): Animal[] {
    const filterValue = value.toLowerCase();

    return this.animais.filter(option => option.nome.toLowerCase().includes(filterValue));
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
        this.mensagem = "Cadastrado com sucesso!";
        this.isErro = false;

      },
      error: (err) => {
        this.mensagem = err.message;
        this.isErro = true;
      },
    });
  
  }


}
