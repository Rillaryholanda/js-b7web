/*
========================
    Estruturas Condicionais (if, else if, else)
========================

Em JavaScript, utilizamos estruturas condicionais para tomar decisões no código.
O `if` verifica uma condição e, se for verdadeira, executa um bloco de código.
Caso contrário, podemos usar `else if` para testar outras condições ou `else` para um comportamento padrão.
*/
let idade = 18;

if (idade < 18) { // Se idade for menor que 18, executa este bloco
    console.log("Você é uma criança.");
} else if (idade >= 18 && idade < 60 ) { // Se idade estiver entre 18 e 59, executa este bloco
    console.log("Você é um adulto.");
} else if (idade >= 60) { // Se idade for maior ou igual a 60, executa este bloco
    console.log("Você é um idoso.");
}

//Exemplo
let preco = 40.3;

if (preco <= 45 ){
    console.log("A carne está barata")
}

else {
    console.log("A carne está cara")
}

/*
========================
    Operadores Lógicos e Comparação
========================

Os operadores de comparação são usados para comparar valores. Alguns exemplos:
- `>` (maior que)
- `<` (menor que)
- `>=` (maior ou igual a)
- `<=` (menor ou igual a)
- `==` (igualdade de valor)
- `===` (igualdade de valor e tipo)
- `!=` (diferente)
*/
let x = 10;
let y = 5;
console.log(x > y); // true, pois 10 é maior que 5

let W = "10"
let z = 10;
console.log(W === z); // false, pois "10" (string) não é estritamente igual a 10 (número)

let a = 10;
let b = 5;
console.log(a != b); // true, pois 10 é diferente de 5

/*
========================
    Operador Ternário
========================

O operador ternário é uma forma simplificada de escrever uma estrutura condicional if/else.
A sintaxe é: condição ? valor_se_verdadeiro : valor_se_falso
*/

let isMember = false;
let shipping = isMember ? 2 : 10; // Se isMember for true, frete é 2, senão, 10
console.log(isMember ? "você é membro" : "Você não é membro");
console.log("Frete:" + shipping);
