import { Anamnese } from "../anamnese/anamnese";
import { Animal } from "../animal/animal";
import { Status } from "../enums/status";
import { Tutor } from "../tutor/tutor";
import { Usuario } from "../usuario/usuario";

export class Consulta {
    animal!: Animal;
    tutor!: Tutor;
    anamnese!: Anamnese;
    data!: Date;
    status!: Status;
    veterinario!: Usuario;
  
}
