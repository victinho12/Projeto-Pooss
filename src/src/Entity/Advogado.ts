/*const prompt = require('prompt-sync')();
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',       // Substitua pelo seu usuário
    host: 'localhost',         // Host do PostgreSQL
    database: 'martinsassociados',   // Nome do banco de dados
    password: '1234',     // Substitua pela sua senha
    port: 5432                 // Porta do PostgreSQL
  });
*/

//exportando para outros arquivos
export class Advogados {
    //atributos da classe
  private id : number
  private nome: string;
  private Especialidade: string;
  private Email: string;
  private Telefone: number;
  private situacao : string;
  
//construtor da classe
  constructor(
    id :number,
    nome: string,
    Especialidade: string,
    Email: string,
    Telefone: number,
    situacao: string
  ) {
    this.id = id
    this.nome = nome;
    this.Especialidade = Especialidade;
    this.Email = Email;
    this.Telefone = Telefone;
    this.situacao = situacao
  }
}
