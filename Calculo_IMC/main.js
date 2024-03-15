var peso, altura, imc, resultado;

function calcular(event) {
  event.preventDefault();
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  imc = peso / (altura * altura);
  resultado = document.getElementById("resultado");
  if (imc < 17) {
    resultado.innerHTML = `<br> Seu IMC: ${imc.toFixed(
      2
    )}, você está muito abaixo do peso `;
  } else if (imc >= 17 && imc < 18.49) {
    resultado.innerHTML = `<br> Seu IMC: ${imc.toFixed(
      2
    )}, você está abaixo do peso`;
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML = `<br> Seu IMC: ${imc.toFixed(
      2
    )}, você está no peso ideal`;
  } else {
    resultado.innerHTML = `<br> Seu IMC: ${imc.toFixed(
      2
    )}, você está acima do peso`;
  }
  peso = document.getElementById("peso").value = '';
  altura = document.getElementById("altura").value = '';
}
