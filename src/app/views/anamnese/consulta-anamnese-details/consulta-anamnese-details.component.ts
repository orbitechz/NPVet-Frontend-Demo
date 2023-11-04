import { Component } from '@angular/core';
import { Anamnese } from 'src/app/models/anamnese/anamnese';

@Component({
  selector: 'app-consulta-anamnese-details',
  templateUrl: './consulta-anamnese-details.component.html',
  styleUrls: ['./consulta-anamnese-details.component.scss']
})
export class ConsultaAnamneseDetailsComponent {
  anamnese = new Anamnese();
}
