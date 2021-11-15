function campoRequerido(input) {
  if (input.value.trim().length > 0) {
    // =>--el trim permite quitar  el espacio vacio en el formulario
    //console.log("paso la validacion");
    input.className = "form-control is-valid";
    return true;
  } else {
    //console.log("no paso la vadilacion");
    input.className = "form-control is-valid";
    return flase;
  }
}
function validarNumeros(input) {
  // crear una expresion regular

  let patron = /^[0-9]{1,3}$/;
  //probar el fucuniamento del patron o expresion ragular
  if (patron.test(input.value)) {
    // cumple la expresion regular
    input.className = "form-control is-invalid";
  } else {
    //console.log("no paso la vadilacion");
    input.className = "form-control is-valid";
  }
}
// validar url
function validarURL(input) {
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$
  /
  if (patron.tes (input.value)){
    input.className = "form-control is-invalid";
    return true;

  }
  
}

function validarGeneral(e){
  e.preventDefault();
  console.log("aqui tengo que validar todo de nuevo");
  //volver a  validar todos las campos
  //if (preguntar si el codigo es correcto && pregunto ei el producto es correcto)
  let alerta = document.querySelector("msjAlerta");
  if (campoRequerido(campoCodigo) && 
  campoRequerido(campoProducto)&&
  campoRequerido(campoDescripcion)&&
  validarNumeros(campoCantidad)&&
  validarURL(campoUrl)){
    console.log(" si paso la validacion ");
    alerta = 

  }else{
   // console.log("no paso la validacion");
    alerta.className "alert alert-danger";
  }
}

// de otra forma mas segura de agregar eventos del formulario
let campoCodigo = document.querySelector("#codigo");
let campoProducto = document.querySelector("#producto");
let campoDescripcion = document.querySelector("#descripcion");
let campoCantidad = document.querySelector("#cantidad");
let campoUrl = document.querySelector(#"url")
campoCodigo.addEventListener(" blur", () => {
  campoRequerido(campoCodigo);
});
campoProducto.addEventListener("blur", () => {
  campoRequerido(campoProducto);
});
campoDescripcio.addEventListener("blur", () => {
  campoRequerido(campoRequerido);
});

campoCantidad.addEventListener("blur", () => validarNumeros(campoCantidad));
