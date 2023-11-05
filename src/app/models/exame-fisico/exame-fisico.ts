import { Time } from "@angular/common";
import { Animal } from "../animal/animal";
import { AbstractEntity } from "../abstract-entity/abstract-entity";

export class ExameFisico extends AbstractEntity{
    nivelConsciencia!: string;
    temperaturaRetal!: number;
    frequenciaRespiratoria!: number;
    frequenciaCardiaca!: number;
    tempoPreenchimentoCapilar!: Time;
    pulso!: number;
    hidratacao!: string;
    linfSubmand!: string;
    linfPreEscapulares!: string;
    linfPopliteos!: string;
    linfInguinais!: string;
    mucosaOcular!: string;
    mucosaOral!: string;
    mucosaPeniana!: string;
    mucosaAnal!: string;
    animal!: Animal;
    
}
