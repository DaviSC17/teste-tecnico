// Ex. 1 - Soma Progressiva
document.getElementById("resultadoSoma").textContent = (() => {
  let limite = 13;
  let soma = 0,
    contador = 0;

  while (contador < limite) {
    contador++;
    soma += contador;
  }

  return soma;
})();

// Ex. 2 - Fibonacci

function verificarFibonacci() {
  const numero = parseInt(document.getElementById("numeroFibonacci").value);
  if (isNaN(numero)) {
      document.getElementById("resultadoFibonacci").textContent = "Por favor, insira um número válido.";
      return;
  }

  let anterior = 0, atual = 1;
  let pertence = false;

  while (atual <= numero) {
      if (atual === numero || numero === 0) {
          pertence = true;
          break;
      }
      const proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
  }

  document.getElementById("resultadoFibonacci").textContent = pertence
      ? `${numero} faz parte da sequência de Fibonacci.`
      : `${numero} não faz parte da sequência de Fibonacci.`;
}

