
function acaoBotao() {
    var sairLoop, valor01, valor02
    do {
       valor01 = prompt("Digite o primeiro valor: ") 
       valor02 = prompt("Digite o segundo valor: ")
       document.getElementById("paragrafo").innerText = "Resulltado: " + (parseFloat(valor01) + parseFloat(valor02))
       sairLoop = prompt("Deseja sair? S/N") 
    } while ((sairLoop == "N") || (sairLoop == "n"));
}
