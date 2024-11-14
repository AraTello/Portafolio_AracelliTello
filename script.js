const form = document.getElementById("contenido__contacto_form");
const nombre = document.getElementById("contacto__nombre");
const correo = document.getElementById("contacto__correo");
const asunto = document.getElementById("contacto__asunto");
const mensaje = document.getElementById("contacto__mensaje");
const spanNombre = document.getElementById('span__nombre');
const spanCorreo = document.getElementById('span__correo');
const spanAsunto = document.getElementById('span__asunto');
const spanMensaje = document.getElementById('span__mensaje');
const correoFormato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener("submit", function (event) {
  event.preventDefault();

  valorNombre = nombre.value;
  valorCorreo = correo.value;
  valorAsunto = asunto.value;
  valorMensaje = mensaje.value;

  if (valorNombre === "") {
    spanNombre.style.display = "block";
    spanNombre.innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Necesita colocar su nombre.';

  }else if (valorNombre.length > 50){
    spanNombre.style.display = "block";
    spanNombre.innerHTML = '<i class="fa-regular fa-circle-xmark"></i> El nombre no debe ser mayor a 50 caracteres.';

  }else{
    spanNombre.style.display = "none";

    if (valorCorreo === "") {
      spanCorreo.style.display = "block";
      spanCorreo.innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Debe colocar su correo electrónico.';

    }else if(!validaFormatoCorreo(valorCorreo)){
      spanCorreo.style.display = "block";
      spanCorreo.innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Su correo no tiene el formato deseado (Ejemplo: texto@texto.com).';

    }else{
      spanCorreo.style.display = "none";

      if (valorAsunto === "") {
        spanAsunto.style.display = "block";
        spanAsunto.innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Debe colocar el asunto de su mensaje.';

      }else if (valorAsunto.length > 50){
        spanAsunto.style.display = "block";
        spanAsunto.innerHTML = '<i class="fa-regular fa-circle-xmark"></i> El asunto de su mensaje no debe ser mayor a 50 caracteres.';

      }else{
        spanAsunto.style.display = "none";

        if(valorMensaje === ""){
          spanMensaje.style.display = "block";
          spanMensaje.innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Debe colocar un mensaje para el contacto.';

        }else if ((valorMensaje.length > 300)){
          spanMensaje.style.display = "block";
          spanMensaje.innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Su mensaje no debe superar los 300 caracteres.';

        }else{
          spanMensaje.style.display = "none";
          alert('Tu correo ha sido enviado con éxito! \nGracias por contactarme.');
          form.reset();
          return;
        }
        return;
      }
      return;
    }
    return;
  }

});


function validaFormatoCorreo(correo) {
  return correoFormato.test(correo);
}

