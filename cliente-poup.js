class Cliente{
    constructor(nome, email, cpf, saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }

}

class ClientePoupanca extends Cliente{
    constructor(nome, email,cpf, saldo, saldoPoup){
    super(nome,email,cpf,saldo,)
    this.saldoPoup = saldoPoup
    }
    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const novoCliente = new ClientePoupanca("Lais", "lais@gmail.com", 
"458.785.874-85", 200,2500)

console.log(novoCliente)
novoCliente.depositar(150)
novoCliente.depositarPoup(1500)

console.log(novoCliente)