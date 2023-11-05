import { AbstractEntity } from "../abstract-entity/abstract-entity"

export class Endereco extends AbstractEntity {
    logradouro!: string
    cidade!: string
    estado!: string
    bairro!: string
    pais!: string
    numero!: string
    cep!: string
    complemento!: string
}
