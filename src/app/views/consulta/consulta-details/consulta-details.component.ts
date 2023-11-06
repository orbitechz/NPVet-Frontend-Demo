import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-consulta-details',
  templateUrl: './consulta-details.component.html',
  styleUrls: ['./consulta-details.component.scss']
})
export class ConsultaDetailsComponent {
  @Output() confirmar = new EventEmitter<any>();
  constructor(){
    
  }
}
