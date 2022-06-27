//Exercício 01:
let aboutMe = {
    nome: 'Henrique',
    idade: 29,
    signo: 'Touro',
}
console.log(aboutMe);

//Exercício 02:
aboutMe.cidade = 'Uberlândia';
console.log(aboutMe);

//Exercício 03:
delete aboutMe.signo;
console.log(aboutMe);

//Exercício 04:
console.log(aboutMe);

//Exercício 05:
let cadastro = [{
    nome: 'Gabrielly',
    idade: 22,
    telefone: 34996988040,
    amigos: ['Jean', 'Henrique', 'Lorrayne', 'Laisla']
},
{
    nome: 'Rayane',
    idade: 30,
    telefone: 34996988041,
    amigos: ['Peterson', 'Henrique', 'Cissa', 'Renato']
},
{
    nome: 'Micaele',
    idade: 30,
    telefone: 34996988042,
    amigos: ['Clóvis', 'Henrique', 'Hiroshi', 'Ana Flávia']
},
{
    nome: 'Luana',
    idade: 26,
    telefone: 34996988043,
    amigos: ['Davi', 'Henrique', 'Rayane', 'Ana Clara']
},
{
    nome: 'Ana Clara',
    idade: 25,
    telefone: 34996988044,
    amigos: ['Luana', 'Henrique', 'Davi', 'Marina']
},
]

console.log(cadastro[0].amigos[3])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[1])
console.log(cadastro[3].amigos[0])