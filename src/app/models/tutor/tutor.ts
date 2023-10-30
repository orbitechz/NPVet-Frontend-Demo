import { AbstractEntity } from '../abstract-entity/abstract-entity';
import { Contato } from '../contato/contato';
import { Endereco } from '../endereco/endereco';

export class Tutor extends AbstractEntity {
  nome!: string;
  cpf!: string;
  rg!: string;
  email!: string;
  telefones!: Contato[];
  endereco!: Endereco[];
}
