
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
  public async buscarClientesPorCpf(cpf:string):Promise<Cliente[]>{
    return await this.repo.BuscarCLientePorCpf(cpf)
  }
  public async inserirCliente(cpf: string,
    nome: string,
    datanascimento: string,
    observacoes: string){
      return await this.repo.inserirCliente(cpf,
        nome,
        datanascimento,
        observacoes,)

  } 
  public validarCpf(cpf: string):boolean{
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(this.repo.inserirCliente(cpf))
  }
}
