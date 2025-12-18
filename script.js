(function(){
  const WA = "https://wa.me/51993558729";

  const form = document.getElementById("formAdmision");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nombre = (data.get("nombre") || "").toString().trim();
      const telefono = (data.get("telefono") || "").toString().trim();
      const correo = (data.get("correo") || "").toString().trim();
      const grado = (data.get("grado") || "").toString().trim();

      const msg = [
        "Hola, deseo información sobre Admisión 2026.",
        `Nombre: ${nombre}`,
        `Teléfono: ${telefono}`,
        `Correo: ${correo}`,
        `Grado: ${grado}`
      ].join("\n");

      const url = WA + "?text=" + encodeURIComponent(msg);
      window.open(url, "_blank");
    });
  }

  const btn = document.getElementById("btnCopiarCorreo");
  if(btn){
    btn.addEventListener("click", async () => {
      try{
        await navigator.clipboard.writeText("pequenitaluz.sanmiguel@gmail.com");
        btn.textContent = "¡Correo copiado!";
        setTimeout(()=> btn.textContent = "Copiar correo", 1400);
      }catch(e){
        alert("No se pudo copiar. Correo: pequenitaluz.sanmiguel@gmail.com");
      }
    });
  }
})();