import { Cliente } from "../Entity/Clientes";
import { ClienteRepository } from "../Repository/Clienterepository";

export class ClienteService{

    private repo: ClienteRepository;
    
    constructor(){
        this.repo = new ClienteRepository();
    }

    async listarClientes(): Promise<Cliente[]>{
        return await this.repo.listarClientes();
    }
}