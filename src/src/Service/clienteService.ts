import { promises } from "dns";
import { Cliente } from "../Entity/Clientes";
import { ClienteRepository } from "../Repository/Clienterepository";

export class ClienteService {
  private repo: ClienteRepository;

  constructor() {
    this.repo = new ClienteRepository();
  }

  public async listarClientes(): Promise<Cliente[]> {
    return await this.repo.listarClientes();
  }
  public async buscarClientesPorCpf(cpf: string): Promise<Cliente[]> {
    return await this.repo.BuscarCLientePorCpf(cpf);
  }
  public async inserirCliente(
    cpf: string,
    nome: string,
    datanascimento: string,
    observacoes: string
  ) {
    return await this.repo.inserirCliente(
      cpf,
      nome,
      datanascimento,
      observacoes
    );
  }
  private validarCpf(cpf: string): void {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cpf)) {
      throw new Error("Cpf inválido.");
    }
  }
}
