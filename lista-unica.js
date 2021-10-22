const clientes =  [{
    nome: 'Victor',
    idade: 31,
    cpf: '409.260.228-65',
    email: '88nobeat@gmail.com',
    fones: ['19 9 9764 - 7488', '19 9 9874 - 6666'],

        dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
        },
    {
        nome:'Samia Maria',
        parentesco: 'filha',
        dataNasc: '05/08/2016'
    }],
},

{

    nome: 'Julinana',
    cpf: '485.584.785-98',
    dependentes: [{
        nome: 'Sophia',
        parentesco: 'filha',
        dataNasc: '21/05/2020'
}],
}
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

//console.log(listaDependentes)
console.table(listaDependentes)