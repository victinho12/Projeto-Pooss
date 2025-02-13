export class Cliente {
  private cpf: number;
  private nome: string;
  private datanascimento: Date;
  private horario: number;
  private observacoes: string; 
  constructor(cpf: number, nome: string, datanascimento: Date, horario: number, observcoes: string) {
    this.cpf = cpf;
    this.nome = nome;
    this.datanascimento = datanascimento;
    this.horario = horario;
    this.observacoes = observcoes;
  }


  
}
