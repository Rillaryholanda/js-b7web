/*
========================
    O que é SWITCH?
========================

O `switch` é usado para tomar decisões com base no valor de uma variável.
Ele evita a necessidade de várias expressões `if/else`.
*/
let profession = "bombeiro";
console.log("Profissão:" + profession);
switch(profession) {
    case 'fiscal':
        console.log('Sua camisa será VERDE');
        break;
    case 'bombeiro':
        console.log('Sua camisa será VERMELHA');
        break;
    case 'policial':
        console.log('Sua camisa será AZUL');
        break;
    default:
        console.log('Sua camisa será PRETA');
        break;
}