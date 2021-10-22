class cliente{
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

const novoCLiente = new cliente('Victor', '88nobeat@gmail.com',
 '409.260.228-65', 3500)


console.log(novoCLiente)
