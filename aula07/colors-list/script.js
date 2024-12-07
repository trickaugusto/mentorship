function capturarTexto() {
  const color = document.getElementById("favcolor").value; // hexadecimal
  const inpuText = document.getElementById("campoTexto"); // valor digitado

  const exibicaoTexto = document.getElementById("exibicaoTexto");
  exibicaoTexto.style.color = color;
  exibicaoTexto.innerText = inpuText.value;

  historico(color, inpuText.value);
}

function historico(cor, text) {
  const historico = document.getElementById("historico");
  const novaEntrada = document.createElement("li");

  novaEntrada.innerText = text;
  novaEntrada.style.color = cor;
  historico.appendChild(novaEntrada);
}
