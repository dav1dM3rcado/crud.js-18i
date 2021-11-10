function campoRequerido(input) {
  if (input.vale.length > 0) {
    console.log("paso la validacion");
  } else {
    console.log("no paso la vadilacion");
  }
}
// de otra forma mas segura de agregar eventos del formulario
let campoCodigo = document.querySelector("#codigo");

campoCodigo.addEventListener(" blur", () => {
  campoRequerido(campoCodigo);
});
