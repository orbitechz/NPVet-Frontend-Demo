export class Endereco {
    logradouro!: string
    cidade!: string
    estado!: string
    pais!: string
    numero!: string
    cep!: string
    complemento!: string

    constructor() {
        this.logradouro = ''
        this.cidade = ''
        this.estado = ''
        this.pais = ''
        this.numero = ''
        this.cep = ''
        this.complemento = ''
    }
}
