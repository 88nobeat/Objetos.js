const clientes = {
    nome: "Victor",
    idade: 36,
    cpf: "409.260.228-65",
    email: "88nobeat@gmail.com",
}

const chaves = ['nome','idade', 'cpf', 'email']

//console.log(clientes[chaves[3]])

chaves.forEach(info => console.log(clientes[info]))