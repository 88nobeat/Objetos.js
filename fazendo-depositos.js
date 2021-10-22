const clientes = {
    nome: "Victor",
    idade: 31,
    cpf: "409.260.228-65",
    email: "88nobeat@gmail.com",
    fones: ["19 9 9764 - 7488", "19 9 9874 - 6666"],

        dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/03/2011'},
    {
        nome:'Samia Maria',
        parentesco: 'filha',
        dataNasc: '05/08/2016'
    }
    ],
    saldo: 3500,

    depositar:function(valor) {
        this.saldo += valor
     },

     retirar:function(valor) {
         this.saldo -= valor
     }
 }

console.log(clientes.saldo)
clientes.depositar(1500)
console.log(clientes.saldo)
clientes.retirar(2000)
console.log(clientes.saldo)