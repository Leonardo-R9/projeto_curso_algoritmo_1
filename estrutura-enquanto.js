function acaoBotao() {
    var nome, idade, limite, contador;
    limite = 3
    contador = 0
    
    while (contador < limite){
        nome = "Mário"
        idade = 19
        setTimeout(() => {
            
        }, 1500);
        if (idade >= 18)
            document.getElementById("paragrafo").innerText = nome + " é maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + " é menor de idade!"
        contador++
    }      
}