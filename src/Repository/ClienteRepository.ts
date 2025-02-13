import { Pool } from "pg";
import { Database } from "./Database";
import { Cliente } from "../Entity/Clientes";

export class ClienteRepository {
  private pool: Pool;

  constructor() {
    this.pool = Database.iniciarConexao();
  }

  async listarClientes(): Promise<Cliente[]> {
    const query = "SELECT * FROM PUBLIC.CLIENTES";
    const result = await this.pool.query(query);

    const listaClientes: Cliente[] = [];

    for (let row of result.rows) {
      console.log(row);
      let cliente = new Cliente(
        row.cpf,
        row.nome,
        row.datanascimento,
        row.horario,
        row.observacoes
      );
      listaClientes.push(cliente);
    }
    return listaClientes;
  }
}
