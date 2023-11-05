import { Component, Input, OnInit } from '@angular/core';
import { Anamnese } from 'src/app/models/anamnese/anamnese';
import { provideNgxMask } from 'ngx-mask';
import { TutorService } from 'src/app/services/tutor/tutor.service';
import { Genero } from 'src/app/models/enums/genero';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { Animal } from 'src/app/models/animal/animal';
import { Router } from '@angular/router';
import { AnamneseService } from 'src/app/services/anamnese/anamnese.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ProgressoMedico } from 'src/app/models/progresso-medico/progresso-medico';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consulta-anamnese-details',
  templateUrl: './consulta-anamnese-details.component.html',
  styleUrls: ['./consulta-anamnese-details.component.scss'],
  providers: [provideNgxMask()],
})
export class ConsultaAnamneseDetailsComponent implements OnInit {
  anamnese = new Anamnese();
  generoEnum = Genero;
  telefones: any[] = [];
  selectedGenero = Genero.FEMININO;

  @Input() isErro = true;
  @Input() mensagem = '';
  animal = new Animal();
  doesntExistAnimal: boolean = false;

  constructor(
    private t: TutorService,
    private a: AnimalService,
    private u: UsuarioService,
    private router: Router,
    private an: AnamneseService
  ) { }

  ngOnInit(): void {
    this.u.getById(1).subscribe({
      next: (usuario) => {
        this.anamnese.veterinarioDTO = usuario;
      },
      error: (err) => {
        this.isErro = true;
        this.mensagem = err.error;
      },
    });
  }

  addNewRow() {
    this.anamnese.historicoProgressoMedico.push(new ProgressoMedico(
    ));
  }


  fetchAnimal() {
    this.a
      .getByTutorAndAnimalName(
        this.anamnese.tutorDTO.id,
        this.anamnese.animalDTO.nome
      )
      .subscribe({
        next: (animal) => {
          this.anamnese.animalDTO = animal;
        },
        error: (err) => {
          if (err.status == 400) {
            this.doesntExistAnimal = true;
          } else {
            this.isErro = true;
            this.mensagem = err.error;
          }
        },
      });
  }

  fetchTutor() {
    if (this.anamnese.tutorDTO.cpf.length == 11) {
      this.t.getByCpf(this.anamnese.tutorDTO.cpf).subscribe({
        next: (tutor) => {
        
          this.anamnese.tutorDTO = tutor;
          this.selectedGenero = tutor.genero;
          this.telefones = tutor.telefones;
          console.log(this.anamnese.tutorDTO);
        },
        error: (err) => {
          this.isErro = true;
          this.mensagem = err.error;
        },
      });
    }
  }

  cadastrarAnamnese() {
    this.t.update(this.anamnese.tutorDTO.id, this.anamnese.tutorDTO).subscribe({
      next: (tutor) => { },
      error: (err) => {
        this.isErro = true;
        this.mensagem = err.error;
      },
    });

    this.a
      .getByTutorAndAnimalName(
        this.anamnese.tutorDTO.id,
        this.anamnese.animalDTO.nome
      )
      .subscribe({
        next: (a) => {
          this.a.update(this.anamnese.animalDTO).subscribe({
            next: (animal) => {
              this.anamnese.animalDTO = animal;
            },
            error: (err) => {
              this.isErro = true;
              this.mensagem = err.error;
            },
          });
        },
        error: (err) => {
          this.a.save(this.anamnese.animalDTO).subscribe({
            next: (animal) => {
              this.anamnese.animalDTO = animal;
            },
            error: (err) => {
              this.isErro = true;
              this.mensagem = err.error;
            },
          });
        },
      });

    this.an.create(this.anamnese).subscribe({
      next: (anamnese) => {
        this.isErro = false;
        this.mensagem = 'Anamnese cadastrada com sucesso!';
      },
      error: (err) => {
        this.isErro = true;
        this.mensagem = err.error;
      },
    });
  }

  dateNow() {
    const todaysDate = new Date();
    const day = String(todaysDate.getDate()).padStart(2, '0');
    const month = String(todaysDate.getMonth() + 1).padStart(2, '0');
    const year = String(todaysDate.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  cadastrarNovo() {
    this.router.navigate(['web/tutor/register']);
  }
}
