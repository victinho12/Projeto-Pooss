import { Advogados } from "../Entity/Advogado";
import { AdvogadoRepository } from "../Repository/AdvogadoRepository";

export class AdvogadoService {
  private repo: AdvogadoRepository;

  constructor() {
    this.repo = new AdvogadoRepository();
  }
  async listarAdvogados(): Promise<Advogados[]> {
    return await this.repo.listaAdvogados();
  }
  async buscarAdv(id:number): Promise<Advogados[]>{
    return await this.repo.buscarAdvPorId(id)
  }
}
