import { Pool } from "pg";
import { Database } from "./Database";
import { Cliente } from "../Entity/Clientes";

export class ClienteRepository {
  private pool: Pool;

  constructor() {
    this.pool = Database.iniciarConexao();
  }

  public async listarClientes(): Promise<Cliente[]> {
    const query = "SELECT * FROM PUBLIC.CLIENTES";
    const result = await this.pool.query(query);

    const listaClientes: Cliente[] = [];

    for (let row of result.rows) {
      console.log(row);
      let cliente = new Cliente(
        row.cpf,
        row.nome,
        row.datanascimento,
        row.observacoes
      );
      listaClientes.push(cliente);
    }
    return listaClientes;
  }
  public async BuscarCLientePorCpf(cpf: string): Promise<Cliente[]> {
    const query = "select * from public.clientes where cpf = $1";
    const result = await this.pool.query(query, [cpf]);

    const buscarClientes: Cliente[] = [];

    for (let row of result.rows) {
      let cliente = new Cliente(
        row.cpf,
        row.nome,
        row.datanascimento,
        row.observacoes
      );
      buscarClientes.push(cliente);
    }
    return buscarClientes;
  }
  public async inserirCliente(
    cpf: string,
    nome: string,
    datanascimento: string,
    observacoes: string
  ) {
    const query =
      "insert into public.clientes (cpf,nome,datanascimento,observacoes) values ($1, $2, $3, $4)returning*";
    const valores = [cpf, nome, datanascimento, observacoes];
    const { rows } = await this.pool.query(query, valores);
    return new Cliente(
      rows[0].cpf,
      rows[0].nome,
      rows[0].datanascimento,
      rows[0].observacoes
    );
  }

}
