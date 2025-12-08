const infoBtn = document.getElementById("btnInfo");
const infoBox = document.getElementById("infoBox");

infoBtn.addEventListener("click", () => {
  infoBox.classList.toggle("oculto");
});

document.getElementById("btnBuscar").addEventListener("click", () => {
  const pais = document.getElementById("pais").value;
  const numero = document.getElementById("numero").value.trim();
  const resultado = document.getElementById("resultado");

  if (numero === "") {
    resultado.innerHTML = "Ingrese un número.";
    resultado.className = "resultado alerta";
    resultado.classList.remove("oculto");
    return;
  }

  const numeroCompleto = pais + numero;
  const encontrado = window.listaNegra.find(n => n.numero === numeroCompleto);

  if (encontrado) {
    resultado.innerHTML = `
      ⚠ <strong>CUIDADO</strong><br>
      Este número fue reportado dentro de la comunidad.<br>
      <strong>Motivo:</strong> ${encontrado.motivo || "No especificado"}
    `;
    resultado.className = "resultado alerta";
  } else {
    resultado.innerHTML = "✔ No registra reportes dentro de la comunidad.";
    resultado.className = "resultado ok";
  }

  resultado.classList.remove("oculto");
});
