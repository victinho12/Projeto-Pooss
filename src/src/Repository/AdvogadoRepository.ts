import { Pool } from "pg";
import { Database } from "./Database";
import { Advogados } from "../Entity/Advogado";
import { NumberLiteralType } from "typescript";

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
      let Advogado = new Advogados(
        row.id,
        row.nome,
        row.especialidade,
        row.email,
        row.telefone,
        row.situacao
      );
      listaAdvogados.push(Advogado);
    }
    return listaAdvogados;
  }

  async buscarAdvPorId (id:number):Promise<Advogados[]>{
    const query = "select * from public.advogados where id = $1"
    const result = await this.pool.query(query,[id])

    const listaAdv: Advogados[] = []
    
    for(let row of result.rows){
      let advogado = new Advogados(
        row.id,
        row.nome,
        row.especialidade,
        row.email,
        row.telefone,
        row.situacao
      )
      listaAdv.push(advogado);
    }
    return listaAdv;
  }
}
