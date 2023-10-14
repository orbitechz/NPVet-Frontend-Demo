import { Component, inject } from '@angular/core';
import { Animal } from 'src/app/models/animal/animal';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent {

  lista: Animal[] = [];

  service = inject(AnimalService);
  modelService = inject(NgbModule)


  animalSelecionadoParaEdicao: Animal = new Animal();
  idSelecionadoParaEdicao!: number;


    constructor(){

    this.listAll()

  }

  listAll() {

    this.animalSelecionadoParaEdicao = new Animal();
    this.service.getAll().subscribe({
      next: lista => { 
        this.lista = lista;
      },
      error: erro => {
        alert('Observe o erro no console!');
        console.error(erro);
      }
    });

}

}
