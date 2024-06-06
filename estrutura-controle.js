/*
    escreval("Digite o nome do aluno")
    leia(nome)
    escreval("Digite a primeira nota")
    leia(nota1)
    escreval("Digite a segunda nota")
    leia(nota2)
    media := (nota1+nota2)/2*2^2

    se media >= 5               entao
       escreval("Aprovado com média ",media)
    senao
       escreval("Reprovado com média ",media)
    fimse
*/

var nome, nota01, nota02, media;
nome = prompt("Digite o nome do aluno")
nota01 = prompt("Digite a primeira nota")
nota02 = prompt("Digite a segunda nota")

media = (parseFloat(nota01) + parseFloat(nota02)) / 2;

if(media>=5)
{
    alert("Aprovado com media " + media)
}
else
    alert("Reprovado com media " + media)