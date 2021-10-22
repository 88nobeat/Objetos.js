const clientes = {
    nome: "Victor",
    idade: 31,
    cpf: "409.260.228-65",
    email: "88nobeat@gmail.com",
    fones: ["19 9 9764 - 7488", "19 9 9874 - 6666"],
        dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]
    
}

clientes.dependentes.push({
    nome:'Samia Maria',
    parentesco: 'filha',
    dataNasc: '05/08/2016'
})

//console.log(clientes)

const filhaMaisNova = clientes.dependentes.filter(dependente => dependente.dataNasc==='05/08/2016') 

console.log(filhaMaisNova[0].nome)