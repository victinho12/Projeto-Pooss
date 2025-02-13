import { ClienteService } from "./Service/clienteService"; 
import { AdvogadoService } from "./Service/advogadoService";
const cliente1 = new ClienteService();
const advogado1 = new AdvogadoService();

async function listaClientes(){
    console.table(await cliente1.listarClientes())
}
async function listaAdvogados() {
    console.table(await advogado1.listarAdvogados())
}
listaAdvogados();
//listaClientes();