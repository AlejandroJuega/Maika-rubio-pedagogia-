function openForm(clase) {
  document.getElementById("formModal").style.display = "flex";
  document.getElementById("claseSeleccionada").value = clase;
}
function closeForm() {
  document.getElementById("formModal").style.display = "none";
}
function copyPhone() {
  navigator.clipboard.writeText("606679511");
  alert("Teléfono copiado: 606679511");
}

// Mostrar el botón de admin solo con el link secreto
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const adminButton = document.getElementById("admin-button");
  if (params.get("admin") === "true") {
    adminButton.style.display = "block";
  }
  adminButton.addEventListener("click", () => {
    window.open("https://meet.jit.si/MaikaRubioPedagogiaSala", "_blank");
  });

  // Manejar envío del formulario con confirmación
  const form = document.getElementById("reservationForm");
  const successMsg = document.getElementById("formSuccess");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      successMsg.style.display = "block";
      form.reset();
      setTimeout(() => { closeForm(); successMsg.style.display = "none"; }, 2000);
    } else {
      alert("Error al enviar la reserva.");
    }
  });
});
