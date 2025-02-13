import { Pool } from "pg";
import { Database } from "./Database";
import { Advogados } from "../Entity/Advogado";

export class AdvogadoRepository {
  private pool: Pool;

  constructor() {
    this.pool = Database.iniciarConexao();
  }
  async listaAdvogados(): Promise<Advogados[]> {
    const query = "SELECT * FROM PUBLIC.advogados";
    const result = await this.pool.query(query);

    const listaAdvogados: Advogados[] = [];
    for (let row of result.rows) {
        console.log(row)
      let Advogado = new Advogados(
        row.nome,
        row.especialidade,
        row.email,
        row.telefone,
        row.situacao,
      );
      listaAdvogados.push(Advogado);
    }
    return listaAdvogados;
  }
}
