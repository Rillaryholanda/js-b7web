/*
========================
    Objetos e Arrays
========================

Objetos armazenam dados como pares chave-valor. Arrays armazenam listas de valores.
*/
let personagem = {
    nome: 'Rillary',
    idade: 21,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
};

personagem.nome = 'Pedro'; // Alterando propriedade
personagem.caracteristicas.forca += 8; // Modificando valor dentro de um objeto aninhado
personagem.olhos.push('verde'); // Adicionando novo item ao array
console.log(`Força: ${personagem.caracteristicas.forca}`);
console.log(personagem.olhos);

let personagem = {
    nome: 'Bonieky',
    idade: 90,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}

console.log(personagem.carros[0].cor);

//**** Exemplo 1 

let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log ('1. ' + carros[x]);

carros[1] = 'Audi';
console.log('2. Lista com Audi:');
console.log(carros);

carros.push('Volvo');
console.log('3. Lista com volvo:');
console.log (carros);


console.log('4. itens no array:');
console.log(carros.length);

//**** Exemplo 2
let pessoa = {
    nome: 'Bonieky',
    sobrenome: 'Lacerda',
    idade: 90,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log (pessoa.nomeCompleto());

/*
========================
    Length
========================

A propriedade `length` é usada para determinar o número de elementos em um array.
*/
let frutas = ['Maçã', 'Uva', 'Banana'];
console.log(`O array frutas tem ${frutas.length} elementos.`); // Exibe a quantidade de frutas