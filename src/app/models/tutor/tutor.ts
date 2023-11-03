import { AbstractEntity } from '../abstract-entity/abstract-entity';
import { Contato } from '../contato/contato';
import { Endereco } from '../endereco/endereco';
import { Genero } from '../enums/genero';

export class Tutor extends AbstractEntity {
  nome!: string;
  genero!: Genero;
  cpf!: string;
  rg!: string;
  email!: string;
  telefones!: Contato[];
  endereco!: Endereco[];
}
