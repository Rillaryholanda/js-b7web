/*
========================
    O que é uma Função?
========================

Uma função é um bloco de código reutilizável que pode ser chamado para executar uma tarefa.
A sintaxe básica é:
function nomeDaFuncao(parametros) {
    // código a ser executado
    return resultado;
}

Chamamos a função passando os valores necessários.
*/
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3)); // Chama a função e imprime 8


//****exemplo 1

function maiorDeIdade (idade) {
    if (idade >= 18){
        return true;
    }
    else {
        return false;
    }
}
let verificacao = maiorDeIdade();
console.log(verificacao);

//****exemplo 2

function calcPct(n1, n2){
     return (n2 / n1) * 100;
}
let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);


//****exemplo 3

function calcularImovel (metragem, quartos){
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1 :
        default:
            preco = metragem * m2;
            break;
        case 2 :
            preco = metragem * (m2 * 1.2);
            break;
        case 3 :
            preco = metragem * (m2 * 1.5);
            break;
    }

    return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

//****exemplo 4

function validar(usuario, senha) {
    if (usuario === 'bonieky' && senha === '123'){
        return true;
    }

    else {
        return false;
    }
}

let usuario = 'bonieky';
let senha = '1234';
let validacao = validar(usuario, senha);
    if (validacao) {
        console.log ('Acesso concedido.');
    } 
    else{
        console.log ('Acesso NEGADO!');
    }


