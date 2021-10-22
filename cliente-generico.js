function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const novoCliente = new Cliente('Victor', '409.260.228-65', '88nobeat@gmail.com', 1500)

console.log(novoCliente)
