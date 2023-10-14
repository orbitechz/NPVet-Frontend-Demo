import { Component, inject } from '@angular/core';
import { Tutor } from 'src/app/models/tutor/tutor';
import { TutorService } from 'src/app/services/tutor/tutor.service';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.scss']
})
export class TutorListComponent {
  tutores: Tutor[] = []
  service = inject(TutorService);

  constructor() {
    this.getAll();
  }
  getAll() {
    this.service.getAll().subscribe({
      next: (tutores: any) => {
        this.tutores = tutores;
        console.log(tutores)
      },
      error: (erro: any) => {
        alert(erro.error);
      },
    });
  }
}



