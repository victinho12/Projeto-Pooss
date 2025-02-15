export class Cliente {
  private cpf: number;
  private nome: string;
  private datanascimento: string;
  private observacoes: string; 
  constructor(cpf: number, nome: string, datanascimento: string, observacoes: string) {
    this.cpf = cpf;
    this.nome = nome;
    this.datanascimento = datanascimento;
    this.observacoes = observacoes;
  }


  
}
