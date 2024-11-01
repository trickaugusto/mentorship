/**
 * Exercicio envolvendo variáveis e condicionais
 * 
 * Nesse programa já temos 3 variáveis, que representam notas de um aluno.
 * 
 * O programa deve calcular a média e exibir:
 * 
 * console.log("Aprovado") caso a média seja maior ou igual a 7
 * console.log("Recuperação") se a média estiver entre 5 e 6.9 (inclusive)
 * console.log("Reprovado") se a média for menor que 5
 * 
 * DICA DE PSEUDOCÓDIGO:
    Início
        nota1
        nota2
        nota3

        Se (nota1 < 0 OU nota1 > 10) OU (nota2 < 0 OU nota2 > 10) OU (nota3 < 0 OU nota3 > 10) Então
            Exibir "Nota inválida"
        Senão
            media ← (nota1 + nota2 + nota3) / 3

            Se media >= 7 Então
                Exibir "Média: " + media
                Exibir "Aprovado"
            Senão Se media >= 5 E media < 7 Então
                Exibir "Média: " + media
                Exibir "Recuperação"
            Senão
                Exibir "Média: " + media
                Exibir "Reprovado"


 * EXTRA:
 * Adicione inputs dinâmicos para que o usuário possa inserir as notas, ou seja, ao invés de serem variáveis fixas igual no exemplo abaixo, 
 * o usuário poderá inserir as notas via terminal.
 */

/* let nota1 = 4;
let nota2 = 8;
let nota3 = 6;
 */
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Nota 1: `, (nota) => {
  const nota1 = parseInt(nota);

  if (nota1 < 0 || nota1 > 10) {
    console.log("Nota invalida");
    rl.close();

    return
  }

  rl.question(`Nota 2: `, (nota) => {
    const nota2 = parseInt(nota);

    if (nota2 < 0 || nota2 > 10) {
      console.log("Nota invalida");
      rl.close();

      return
    }

    rl.question(`Nota 3: `, (nota) => {
      const nota3 = parseInt(nota);

      if (nota3 < 0 || nota3 > 10) {
        console.log("Nota invalida");
        rl.close();
      }

      let media = (nota1 + nota2 + nota3) / 3;
      console.log("Média: " + media);

      if (media >= 7) {
        console.log("Aprovado");
      } else if (media >= 5 && media < 7) {
        console.log("Recuperação");
      } else {
        console.log("Reprovado");
      }

      rl.close();

      return
    });
  });
});
