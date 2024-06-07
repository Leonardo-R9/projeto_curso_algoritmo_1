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