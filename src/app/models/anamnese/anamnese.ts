import { AbstractEntity } from "../abstract-entity/abstract-entity";
import { AnamnesePergunta } from "../anamnese-pergunta/anamnese-pergunta";
import { Animal } from "../animal/animal";
import { ProgressoMedico } from "../progresso-medico/progresso-medico";
import { Tutor } from "../tutor/tutor";
import { Usuario } from "../usuario/usuario";

export class Anamnese extends AbstractEntity{
    animal!: Animal;
    tutor!: Tutor;
    veterinario!: Usuario;
    queixaPrincipal!: string;
    historicoProgressoMedico!: ProgressoMedico[];
    alimentacao!: string;
    contactantes!: string;
    ambiente!: string;
    vacinacao!: string;
    vermifugacao!: string;
    sistemaRespiratorio!: string;
    sistemaCardiovascular!: string;
    sistemaUrinario!: string;
    sistemaReprodutor!: string;
    sistemaLocomotor!: string;
    sistemaNeurologico!: string;
    pele!: string;
    olhos!: string;
    ouvidos!: string;
    anamnesePerguntas!: AnamnesePergunta[];
}
