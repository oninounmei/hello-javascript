const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

let operacion = "";

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    if (valor === "C") {
      operacion = "";
      pantalla.value = "";
    } else if (valor === "=") {
  try {
    const resultado = eval(operacion);
    pantalla.value = resultado;

    // Agregar resultado al historial
    const listaHistorial = document.getElementById("lista-historial");
    const item = document.createElement("li");
    item.textContent = `${operacion} = ${resultado}`;
    listaHistorial.prepend(item); // lo agrega al principio

    operacion = resultado.toString();
  } catch {
    pantalla.value = "Error";
    operacion = "";
  }
}
 else {
      const operadores = ["+", "-", "*", "/"];

const ultimoCaracter = operacion[operacion.length - 1];

if (
  operadores.includes(valor) &&
  (operacion === "" && valor !== "-" || operadores.includes(ultimoCaracter))
) {
  return; // evita operadores duplicados o incorrectos
}

operacion += valor;
pantalla.value = operacion;
      pantalla.value = operacion;
    }
  });
});
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9+\-*/]/.test(key)) {
    operacion += key;
    pantalla.value = operacion;
  } else if (key === "Enter") {
    try {
      operacion = eval(operacion);
      pantalla.value = operacion;
    } catch {
      pantalla.value = "Error";
      operacion = "";
    }
  } else if (key === "Backspace") {
    operacion = operacion.slice(0, -1);
    pantalla.value = operacion;
  } else if (key.toLowerCase() === "c") {
    operacion = "";
    pantalla.value = "";
  }
});
