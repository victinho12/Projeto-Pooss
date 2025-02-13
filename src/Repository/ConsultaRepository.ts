import { Pool } from "pg";
import { Consultas } from "../Entity/Consultas";
import { Database } from "./Database";

export class ConsultasRepository {
  private pool: Pool;
  constructor() {
    this.pool = Database.iniciarConexao();
  }
  async listarConsultas(){
    const query = "SELECT * FROM PUBLIC.consultas";
    const result = await this.pool.query(query);

    const todasConsultas: Consultas[] = []

  }
}
