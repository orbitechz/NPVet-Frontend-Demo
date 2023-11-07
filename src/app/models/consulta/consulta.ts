import { AbstractEntity } from "../abstract-entity/abstract-entity";
import { Anamnese } from "../anamnese/anamnese";
import { Animal } from "../animal/animal";
import { Status } from "../enums/status";
import { ExameFisico } from "../exame-fisico/exame-fisico";
import { Tutor } from "../tutor/tutor";
import { Usuario } from "../usuario/usuario";

export class Consulta extends AbstractEntity {
    animal!: Animal;
    tutor!: Tutor;
    anamnese!: Anamnese;
    data!: Date;
    status!: Status;
    veterinario!: Usuario;
    examesFisicos!: ExameFisico[]
  
}
