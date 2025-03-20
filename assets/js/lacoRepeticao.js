
/*
========================
    Estrutura de Repetição - FOR
========================

O `for` é um laço de repetição que executa um bloco de código um número determinado de vezes.
A estrutura do `for` é:
for (inicialização; condição; incremento) {
    // código a ser executado em cada iteração
}

- A inicialização é executada uma vez no início do loop.
- A condição é verificada antes de cada iteração.
- O incremento ocorre após cada iteração.
*/
let cores = [
    { nome: 'preto', qt: 10 },
    { nome: 'azul', qt: 5 },
    { nome: 'vermelho', qt: 15 }
];

for (let n = 0; n < cores.length; n++) { // length retorna o tamanho do array
    console.log(cores[n]);
}

/*
========================
    FOR IN e FOR OF
========================

- `for...in`: percorre os índices de um array ou as propriedades de um objeto.
- `for...of`: percorre os valores dentro de um array.
*/
for (let i in cores) {
    console.log(cores[i]); // Acessando os elementos do array usando índices
}

for (let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`); // Acessando diretamente os valores
}

//****Exemplo while

let numero = 0;

while (numero < 10) {
    console.log(`O número da vez é ${numero}`);
    numero++;
}


// 1. Faça um loop que mostre todas as frutas
let frutas = ['Maça', 'Uva', 'Banana'];

for(let x in frutas){
    console.log (frutas[x]);
}


// 2. Conte de 1 até n100 através de um WHILE
let contagem = 1;

while(contagem <= 100 ){
    console.log (contagem);
    contagem ++;
}

