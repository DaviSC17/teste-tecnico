// Ex. 1 - Soma Progressiva
document.getElementById("resultadoSoma").textContent = (() => {
  let limite = 13;
  let soma = 0,
    contador = 0;

  // Loop para somar números de 1 até o limite
  while (contador < limite) {
    contador++;
    soma += contador;
  }

  return soma;
})();

