// ENSINANDO JS
// console.log('hello world')

/**
 * VARIÁVEIS
 */
const nomeDaVariavel = "valor da variavel"; // nao pode re atribuir

let nomeDaVariavelLet = "valor let";
nomeDaVariavelLet = "outro valor";

// var valorVariavelVar = 'valor var'

const nome = "João"; // string
const idade = 55; // number - int
const dinheiro = 60.55; // float
const ehAdulto = false; // boolean

/**
 * Condicionais
 *
 * || - ou
 * && - e
 * > - maior
 * >= - maior igual
 * < - menor
 * <= menor igual
 * != - diferente
 * === - igual
 * ==
 */
/* if (idade != 68 && idade != 69 && idade != 70) {
    if (nome === "João") {
        console.log('esse cara é adulto')
    } else {
        console.log('esse NÃO é JOÃO')
    }
} else {
    console.log('esse NÃO é adulto')
} */

/* switch(idade) {
    case 65:
        console.log("idade é 65")
        break;
    case 66:
        console.log("idade é 66")
        break;
    case 67:
        console.log("idade é 67")
        break;
    default:
        console.log("não sabemos a idade")
}
 */

/* let isAdulto;
if (idade >= 18) {
    isAdulto = true;
} else {
    isAdulto = false;
}

console.log(isAdulto) */

if (nome === "João") {
} else if (nome === "Leonardo") {
} else if (nome === "Adriel") {
} else {
}

let isAdulto = idade >= 18 ? "arroz" : "feijão";
// console.log(isAdulto)

/**
 * FUNÇOES
 */
function conjuntoDeFuncoes() {
  return {
    dizerOla: () => console.log("Olá"),
    dizerTchau: () => console.log("Tchau!"),
    apresentar: () => console.log("Prazer, meu nome é Mari"),
  };
}

/* const funcoes = conjuntoDeFuncoes()
funcoes.apresentar()
funcoes.dizerOla()
funcoes.dizerTchau() */

/**
 * LOOPINGS
 */
// for
/* for (let i = 10000; i >= 1; i--) {
    console.log(i)
} */

// while
/* let contador = 0;
while (contador <= 10) {
  console.log(contador);

  contador += 2;
} */

/* const frutas = ["Maçã", "Bananas", "Tomate"]
for (const fruta of frutas) {
    console.log(fruta)
} */


// array multidimensional
/* const frutas = [
    ["Maçã", "Vermelha", 3.50],
    ["Banaba", "Amarela", 1.60]
]

console.log(
    `A cor da ${frutas[1][0]} é ${frutas[1][1]}. O preço é ${frutas[1][2]}`
)
 */

const variavel = "teste"
console.log(`O valro da variável é ${variavel}`)