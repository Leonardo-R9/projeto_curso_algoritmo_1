function acaoBotao() {
    var valor1, valor2, operacao, resultado;
 
    valor1 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação (pode ser +, -, * ou /: ")
    valor2 = prompt("Digite o segundo valor: ")
    
    switch (operacao) {
        case "+":
            resultado = parseFloat(valor1) + parseFloat(valor2)
            break;
        case "-":
            resultado = parseFloat(valor1) - parseFloat(valor2)
            break;
        case "*":
            resultado = parseFloat(valor1) * parseFloat(valor2)
            break;
        case "/":
            resultado = parseFloat(valor1) / parseFloat(valor2)
            break; 
    }
    document.getElementById("paragrafo").innerText = "Resultado: " + resultado
}
