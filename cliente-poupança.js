function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup){

    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const ju = new clientePoupanca('Juliana','254.455.854-87','ju@ttt.com.br',2700, 6500)

console.log(ju)

clientePoupanca.prototype.depositarPoup= function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(750)
console.log(ju.saldoPoup)