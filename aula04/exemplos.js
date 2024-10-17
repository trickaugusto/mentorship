/**
 * VARIÁVEIS
 *
 * As variáveis são utilizadas para armazenar valores que podem ser utilizados posteriormente, e são armazenados na memória do computador.
 *
 * Para criar uma variável existem 3 palavras reservadas que podem ser utilizadas: var, let e const.
 *
 * var: é a forma antiga de se criar variáveis, e não é recomendado utilizar.
 * let: é a forma mais moderna de se criar variáveis, e é recomendado utilizar.
 * const: é utilizada para criar variáveis que não podem ser alteradas.
 *
 * Exemplo:
 */
var nome = "João";
let idade = 18;
const altura = 1.8;

/**
 * TIPOS DE DADOS
 *
 * Existem vários tipos de dados em JavaScript, e os principais são:
 *
 * String: é utilizado para armazenar textos.
 * Number: é utilizado para armazenar números.
 * Boolean: é utilizado para armazenar valores booleanos (true ou false).
 * Array: é utilizado para armazenar uma lista de valores.
 * Object: é utilizado para armazenar um conjunto de valores.
 *
 */
let nome = "João"; // Exemplo de String
let variavelIdade = 18; // Exemplo de Number
let maiorDeIdade = true; // Exemplo de Boolean
let frutas = ["maçã", "banana", "laranja"]; // Exemplo de Array
let pessoa = {
  nome: "João",
  idade: 18,
  altura: 1.8,
}; // Exemplo de Object

/**
 * OPERADORES
 *
 * Os operadores são utilizados para realizar operações matemáticas, comparações, entre outros.
 *
 * Os principais operadores são:
 *
 * Aritméticos: são utilizados para realizar operações matemáticas.
 * +: Soma
 * -: Subtração
 * *: Multiplicação
 * /: Divisão
 * %: Resto da divisão
 *
 * Comparação: são utilizados para comparar valores.
 * ==: Igual
 * ===: Estritamente igual
 * !=: Diferente
 * !==: Estritamente diferente
 * >: Maior que
 * <: Menor que
 * >=: Maior ou igual
 * <=: Menor ou igual
 *
 * Lógicos: são utilizados para realizar operações lógicas.
 * &&: E
 * ||: Ou
 * !: Não
 *
 * Exemplo:
 */
let a = 10;
let b = 5;

let soma = a + b; // 15
let subtracao = a - b; // 5

let igual = a == b; // false
let estritamenteIgual = a === b; // false
let diferente = a != b; // true
let estritamenteDiferente = a !== b; // true
let maior = a > b; // true
let menor = a < b; // false
let maiorOuIgual = a >= b; // true
let menorOuIgual = a <= b; // false

let e = true;
let f = false;

let eE = e && f; // false
let eOu = e || f; // true
let nao = !e; // false

/**
 * ESTRUTURAS DE CONTROLE
 *
 * As estruturas de controle são utilizadas para controlar o fluxo de execução de um programa.
 *
 * As principais estruturas de controle são:
 *
 * if: é utilizada para executar um bloco de código caso uma condição seja verdadeira.
 *
 * Exemplo:
 */
let idadeExemplo2 = 18;

if (idadeExemplo2 >= 18) {
  console.log("Maior de idade");
}

/**
 * else: é utilizada para executar um bloco de código caso a condição do if seja falsa.
 *
 * Exemplo:
 */
let idadeExemplo3 = 17;

if (idadeExemplo3 >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

/**
 * else if: é utilizada para executar um bloco de código caso a condição do if seja falsa, e uma nova condição seja verdadeira.
 *
 * Exemplo:
 */
let idadeExemplo4 = 17;

if (idadeExemplo4 >= 18) {
  console.log("Maior de idade");
} else if (idadeExemplo4 >= 16) {
  console.log("Pode votar");
} else {
  console.log("Menor de idade");
}

/**
 * switch: é utilizada para executar um bloco de código dependendo do valor de uma variável.
 *
 * Exemplo:
 */
let dia = 1;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}
