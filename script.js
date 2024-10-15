const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
    return;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value == "";
  input.focus(); // deixa o input ja selecionado
});

input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    //verifica se as teclas estão no array com o método includes
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1); //pega o ultimo caractere do  input  e o paga
  }

  if (ev.key === "Enter") {
    calculate();
  }
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  try {
    const result = eval(input.value); // Avalia o código escrito no input
    // Realiza a soma (ou outras operações) de forma automática com base nos botões clicados
    resultInput.value = result; // Mostra o resultado no campo de input de resultado
  } catch (error) {
    resultInput.value = "Erro"; // Caso ocorra um erro de sintaxe ou cálculo, exibe uma mensagem
  }
}
