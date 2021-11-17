import {
  campoRequerido,
  validarNumeros,
  validarURL,
  validarGeneral,
} from "./validaciones.js";
import { Producto } from "./productoClass";

function campoRequerido(input) {
  if (input.value.trim().length > 0) {
    //    console.log('paso la validacion')
    input.className = "form-control is-valid";
    return true;
  } else {
    //    console.log('no paso la validacion')
    input.className = "form-control is-invalid";
    return false;
  }
}

function validarNumeros(input) {
  // crear una expresion regular
  let patron = /^[0-9]{1,3}$/;
  // probar el funcionamiento del patron o expresion regular
  if (patron.test(input.value)) {
    // cumple la expresion la regular
    input.className = "form-control is-valid";
    return true;
  } else {
    // si no cumple la expresion regular
    input.className = "form-control is-invalid";
    return false;
  }
}

function validarURL(input) {
  // crear la expresion regular
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

function validarGeneral(e) {
  e.preventDefault();
  // console.log('aqui tengo que validar todo de nuevo');
  // volver a validar todos los campos
  // if( preguntar si el codigo es correcto && pregunto si el producto es correcto)
  let alerta = document.querySelector("#msjAlerta");
  if (
    campoRequerido(campoCodigo) &&
    campoRequerido(campoProducto) &&
    campoRequerido(campoDescripcion) &&
    validarNumeros(campoCantidad) &&
    validarURL(campoURL)
  ) {
    // console.log('si paso la validacion');
    alerta.className = "alert alert-danger my-5 d-none";
  } else {
    // console.log('no paso la validacion');
    alerta.className = "alert alert-danger my-5";
  }
}

// agregar eventos a los elementos del formulario
let campoCodigo = document.querySelector("#codigo");
let campoProducto = document.querySelector("#producto");
let campoDescripcion = document.querySelector("#descripcion");
let campoCantidad = document.querySelector("#cantidad");
let campoURL = document.querySelector("#url");
let formularioProducto = document.querySelector("#formProducto");

// lista productos
let listaProducto = JSON.parse(localStorage.getItem("listaProductokey")) || [];

campoCodigo.addEventListener("blur", () => {
  campoRequerido(campoCodigo);
});
campoProducto.addEventListener("blur", () => {
  campoRequerido(campoProducto);
});
campoDescripcion.addEventListener("blur", () => {
  campoRequerido(campoDescripcion);
});
campoCantidad.addEventListener("blur", () => {
  validarNumeros(campoCantidad);
});
campoURL.addEventListener("blur", () => {
  validarURL(campoURL);
});
formularioProducto.addEventListener("submit", guardarProducto);

function crearProducto() {
  console.log("aqui creo el producto");
  // crear el objeto producto
  let productoNuevo = new Producto(
    campoCodigo.value,
    campoProducto.value,
    campoDescripcion.value,
    campoCantidad.value,
    campoURL.value
  );
  console.log(productoNuevo);

  //guardar el producto creado en el arreglo
  listaProducto.push(productoNuevo);
  console.log(listaProducto);
  // limpiar el formulario
  limpiarFormulario();
  // guardar en localstorage el arreglo de productos
  guardarLocalstorage();
  // mostrar un mensaje al usuario
  Swal.fire("Good job!", "You clicked the button!", "success");
}

function limpiarFormulario() {
  // limpiar los value de todo el formulario
  formularioProducto.reset();
  // limpiar las clases
  campoCodigo.className = "form-control";
  campoProducto.className = "form-control";
  campoDescripcion.className = "form-control";
  campoCantidad.className = "form-control";
  campoURL.className = "form-control";
}

function guardarLocalstorage() {
  localStorage.setItem("listaProductokey", JSON.stringify(listaProducto));
  // El setItem me permite guardar
}
