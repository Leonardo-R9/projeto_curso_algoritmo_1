
    var nome, nota1, nota2, media, passou;
    passou = false;
    nome = prompt("Digite o nome do aluno")
    nota1 = prompt("Digite a primeira nota")
    nota2 = prompt("Digite a segunda nota")
    media = (parseFloat(nota1)+parseFloat(nota2))/2

    if(media >= 5)
       passou = true
    
    //se (passou) e (media >=5 ou media <=7) entao
    if(passou && nota1==7)
       alert("Aprovado com média " + media)
    else
       alert("Reprovado com média "+media)   
