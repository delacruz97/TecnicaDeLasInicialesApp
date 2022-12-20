/* funcion para mostrar la primera letra de un strings */

function mostrarString() {
  /*  let res = string.split(" "); */
  let textoBase = document.querySelector("#name").value.split(" ");

  const paginaT = document.querySelector("#divP");
  paginaT.style.color = "white";
  paginaT.style.maxWidth = "100%";
  paginaT.style.height = "auto";
  paginaT.style.backgroundColor = "rgb(233, 67, 67)";
  paginaT.style.border = "1px solid black";
  paginaT.style.padding = "15px";
  paginaT.style.margin = "10px";
  paginaT.style.borderRadius = "10px";
  paginaT.innerHTML = textoBase.join(" ");
  let el = [];
  for (let i = 0; i < textoBase.length; i++) {
    data = textoBase[i].substr(0, 3).split(" ");
    el.push({
      nombre: data,
    });
  }
  console.log(el);
  const pagiU = document.querySelector("#text");
  pagiU.style.color = "rgb(255, 255, 255)";
  paginaT.style.maxWidth = "100%";
  pagiU.style.height = "auto";
  pagiU.style.margin = "10px";
  pagiU.style.borderRadius = "10px";
  pagiU.style.backgroundColor = "rgb(59, 84, 136)";

  pagiU.style.border = "1px solid black";
  pagiU.style.padding = "15px";
  const ress = el.map((e) => e.nombre);
  pagiU.innerHTML = ress.join(" ");

  function muestraMensaje() {
    const colorP = document.querySelector("#divP");
    colorP.style.color = "black";
    colorP.style.backgroundColor = "black";
  }
  window.onload = function () {
    var capa = document.getElementById("prueba");
    capa.onclick = muestraMensaje;

    if (capa.click === true) {
      capa.click();
    } else {
      capa.click;
    }
  };

  //funcion capturadora de datos
}

mostrarString();

/* funcion para mostrar el numero de caracteres */

/* function mostrarNumero(numero) {
  return numero.toString().split("").reverse().join("");
}
mostrarNumero(6666); */

/* funcion para mostrar el número de caracteres */

//impresion para pfd

document.addEventListener("DOMContentLoaded", () => {
  // Escuchamos el click del botón
  const $boton = document.querySelector("#btnCrearPdf");
  $boton.addEventListener("click", () => {
    const $elementoParaConvertir = document.querySelector("#pdff"); // <-- Aquí puedes elegir cualquier elemento del DOM
    html2pdf()
      .set({
        margin: 1,
        filename: "documento.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          scale: 3, // A mayor escala, mejores gráficos, pero más peso
          letterRendering: true,
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "landscape", // landscape o portrait
        },
      })
      .from($elementoParaConvertir)
      .save()
      .catch((err) => console.log(err));
  });
});
