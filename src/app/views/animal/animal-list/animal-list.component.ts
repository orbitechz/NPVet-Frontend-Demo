import { Component, inject } from '@angular/core';
import { Animal } from 'src/app/models/animal/animal';
import { AnimalService } from 'src/app/services/animal/animal.service';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent {

  lista: Animal[] = [];

  service = inject(AnimalService);
  modalService = inject(NgbModal)


  animalSelecionadoParaEdicao: Animal = new Animal();
  idSelecionadoParaEdicao!: number;


    constructor(){

    this.listAll()

  }

  listAll() {

    this.animalSelecionadoParaEdicao = new Animal();
    this.service.getAll().subscribe();

}

/*  abrirModal(modal: any){
    this.modalService.open((modal, {size: 'lg'}))
  }
*/
  close(){
    this.modalService.dismissAll();
  }

  editar(modal: any, animal: Animal, id: number) {
    this.animalSelecionadoParaEdicao = Object.assign({}, animal);
    
    this.idSelecionadoParaEdicao = id;
  
    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(id: number){

    this.lista = this.lista.filter(item => item.id !== id);
    this.service.delete(id).subscribe();

  }

  addOuEditarPessoa(animal: Animal){

    this.listAll();

    this.modalService.dismissAll();
  }



}
