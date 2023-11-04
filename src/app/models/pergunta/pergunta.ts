import { AbstractEntity } from "../abstract-entity/abstract-entity";
import { AnamnesePergunta } from "../anamnese-pergunta/anamnese-pergunta";

export class Pergunta extends AbstractEntity{
    anamnesePerguntas!: AnamnesePergunta[];
    enunciado!: string;
}
