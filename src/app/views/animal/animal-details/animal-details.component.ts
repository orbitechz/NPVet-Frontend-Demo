import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Header } from 'src/app/components/table/header';
import { Animal } from 'src/app/models/animal/animal';
import { Tutor } from 'src/app/models/tutor/tutor';
import { AnimalService } from 'src/app/services/animal/animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class AnimalDetailsComponent implements OnInit {
  animalId: any;

  @Input() animal: Animal = new Animal();
  @Output() retorno = new EventEmitter<Animal>();

  service = inject(AnimalService);

  constructor(
    private route: ActivatedRoute,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    size: 'lg';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.animalId = params.get('id');
    });
  }

  salvar() {
    if (this.animal.id != 0) {
      this.service.save(this.animal).subscribe();
    } else {
      this.service.save(this.animal).subscribe();
    }
  }
  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
  callHeadersTutor(){
    let tableHeaders : Header[] = [];
    tableHeaders.push(new Header('Nome', 'nome'));
    tableHeaders.push(new Header('CPF', 'cpf'));
    tableHeaders.push(new Header('Data de Criação','createdAt'));    
    return tableHeaders;
  }

  selecionarTutor(tutor: Tutor){
    this.animal.tutorId = tutor
    this.modalService.dismissAll()
  }
}
