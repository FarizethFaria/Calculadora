var primeirovalor = parseInt(prompt('Digite o Primeiro valor: '));

do {
      var operacao = prompt ('Digite a operaçao matemática: ');
    } while (operacao!="+" && operacao!="-" && operacao!="/" && operacao!="*")

var segundovalor = parseInt(prompt('Digite o Segundo valor: '));

var resultado = 0;

switch (operacao) {
   case "+":
      resultado = primeirovalor+segundovalor;
      alert("O resultado da sua operação é: " + resultado)
      break;
   case "-":
         resultado = primeirovalor-segundovalor;
         alert("O resultado da sua operação é: " + resultado)
         break;
   case "/":
            resultado = primeirovalor/segundovalor;
            alert("O resultado da sua operação é: " + resultado)
            break;
   case "*":
      resultado = primeirovalor*segundovalor;
      alert("O resultado da sua operação é: " + resultado)
      break;         
   
}