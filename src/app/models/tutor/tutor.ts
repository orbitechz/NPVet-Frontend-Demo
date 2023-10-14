import { Contato } from '../contato/contato';
import { Endereco } from '../endereco/endereco';

export class Tutor {
  nome!: string;
  cpf!: string;
  rg!: string;
  email!: string;
  telefones!: Contato[];
  endereco!: Endereco[];
}
