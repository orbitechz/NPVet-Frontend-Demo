import { AbstractEntity } from "../abstract-entity/abstract-entity";
import { Anamnese } from "../anamnese/anamnese";

export class ProgressoMedico extends AbstractEntity{
    anamnese!: Anamnese;
    progressoMedico!: string;
    data!: Date;
}
