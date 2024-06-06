function acaoBotao() {
   var valor1, valor2, operacao, resultado;

   valor1 = prompt("Digite o primeiro valor: ")
   operacao = prompt("Digite a operação (pode ser +, -, * ou /: ")
   valor2 = prompt("Digite o segundo valor: ")
   
   if (operacao == "+"){
       resultado = parseFloat(valor1) + parseFloat(valor2)
   }
   else if (operacao == "-"){
       resultado = parseFloat(valor1) - parseFloat(valor2)
   }
   else if (operacao == "*"){
       resultado = parseFloat(valor1) * parseFloat(valor2)
   }
   else if (operacao == "/"){
       resultado = parseFloat(valor1) / parseFloat(valor2)
   }
   document.getElementById("paragrafo").innerText = "Resultado: " + resultado   
}
