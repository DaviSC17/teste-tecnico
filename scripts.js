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
    document.getElementById("resultadoFibonacci").textContent =
      "Por favor, insira um número válido.";
    return;
  }

  let anterior = 0,
    atual = 1;
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

// EX 3 Faturamento

async function processarFaturamento() {
  const resposta = await fetch("./dados.json");
  const dados = await resposta.json();

  const valoresValidos = dados.filter((d) => d.valor > 0).map((d) => d.valor);
  const media =
    valoresValidos.reduce((soma, valor) => soma + valor, 0) /
    valoresValidos.length;

  const menor = Math.min(...valoresValidos);
  const maior = Math.max(...valoresValidos);
  const diasAcima = valoresValidos.filter((v) => v > media).length;

  document.getElementById("menorValor").textContent = menor.toFixed(2);
  document.getElementById("maiorValor").textContent = maior.toFixed(2);
  document.getElementById("diasAcimaMedia").textContent = diasAcima;
}

// Ex. 4 - Percentuais por Estado
function calcularPercentuais() {
  const estados = {
    "São Paulo": 67836.43,
    "Rio de Janeiro": 36678.66,
    "Minas Gerais": 29229.88,
    "Espírito Santo": 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(estados).reduce(
    (acumulado, valor) => acumulado + valor,
    0
  );

  const lista = Object.entries(estados).map(([estado, valor]) => {
    const percentual = ((valor / total) * 100).toFixed(2);
    return `<li>${estado}: ${percentual}%</li>`;
  });

  document.getElementById("percentuaisPorEstado").innerHTML = lista.join("");
}

// EX 5. inversão de string

const inversordeString = () => {
  const textoOriginal = document.getElementById("textoParaInverter").value;
  let textoInvertido = "";

  for (let i = textoOriginal.length - 1; i >= 0; i--) {
    textoInvertido += textoOriginal[i];
  }

  document.getElementById("textoInvertido").textContent = textoInvertido;
};
