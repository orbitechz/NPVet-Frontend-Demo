import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Header } from 'src/app/components/table/header';
import { Animal } from 'src/app/models/animal/animal';
import { Consulta } from 'src/app/models/consulta/consulta';
import { Status } from 'src/app/models/enums/status';

@Component({
  selector: 'app-consulta-details',
  templateUrl: './consulta-details.component.html',
  styleUrls: ['./consulta-details.component.scss'],
})
export class ConsultaDetailsComponent {
  @Output() confirmar = new EventEmitter<any>();
  keys = Object.keys;
  statuses = Status;
  isErro = false;
  mensagem!: string;
  disabled = false;
  consulta = new Consulta();
  modalService = inject(NgbModal);
  constructor() {
    this.consulta.animal = new Animal();
  }

  selecionarAnimal(template: any) {}

  definirAnimal(animal: Animal) {
    this.consulta.animal = animal;
    this.modalService.dismissAll();
  }
  callAnimalHeaders(){
    let tableHeaders : Header[] = [];
    tableHeaders.push(new Header('Nome', 'nome'));
    tableHeaders.push(new Header('Tutor', 'tutorId.nome'));
    tableHeaders.push(new Header('Raça', 'raca'));
    tableHeaders.push(new Header('Espécie', 'especie'));
    tableHeaders.push(new Header('Sexo', 'sexo'));
    tableHeaders.push(new Header('Data de Criação','createdAt'));    
    return tableHeaders;
  }
}
