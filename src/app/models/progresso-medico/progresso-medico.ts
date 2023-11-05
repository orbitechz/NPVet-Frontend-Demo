import { AbstractEntity } from "../abstract-entity/abstract-entity";

export class ProgressoMedico extends AbstractEntity{
    progressoMedico!: string;
    data!: Date;

    constructor(progressoMedico: string, data: Date){
        super();
        this.progressoMedico = progressoMedico;
        this.data = data;
    }
}
