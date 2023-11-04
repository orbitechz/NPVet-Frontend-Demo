import { AbstractEntity } from "../abstract-entity/abstract-entity";
import { Anamnese } from "../anamnese/anamnese";
import { Pergunta } from "../pergunta/pergunta";

export class AnamnesePergunta extends AbstractEntity{
    anamnese!: Anamnese;
    pergunta!: Pergunta;
    resposta!: string;
}
