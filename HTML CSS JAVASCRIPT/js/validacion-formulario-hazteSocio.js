
var abonoInput = document.getElementsByName("tipo");
var abonoSeleccionado = false;
var falloCampos = false;
var nombreInput = document.getElementById("nombre");
var apellidoInput = document.getElementById("apellidos");
var sexoInput = document.getElementsByName("sexo");
var dniInput = document.getElementById("dni");
var fechaNacimientoInput = document.getElementById("fechaNacimiento");
var emailInput = document.getElementById("email");
var telefonoInput = document.getElementById("telefono");
var direccionInput = document.getElementById("direccion");
var ciudadInput = document.getElementById("ciudad");
var codigoPostalInput = document.getElementById("cp");
var condicionesInput = document.getElementById("condiciones");
var informacionInput = document.getElementById("informacion");
var btnSiguiente1 = document.getElementById("btnSiguiente1");
var btnAnterior1 = document.getElementById("btnAnterior1");
var btnSiguiente2 = document.getElementById("btnSiguiente2");
var btnAnterior2 = document.getElementById("btnAnterior2");
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var btnEnviar = document.getElementById("btnEnviar");


// Agregar controlador de eventos al botón Anterior
btnAnterior1.addEventListener("click", function () {
    form2.style.display = "none";
    form1.style.display = "block";
});
btnAnterior2.addEventListener("click", function () {
  form3.style.display = "none";
  form2.style.display = "block";
}
// Agregar controlador de eventos al botón Siguiente
);
btnSiguiente1.addEventListener("click", function () {
    for (var i = 0; i < abonoInput.length; i++) {
        if (abonoInput[i].checked) {
          abonoSeleccionado = true;
          break;
        }
    }
    if (abonoSeleccionado) {
        // Se ha seleccionado algún tipo de abono
        form1.style.display = "none";
        form2.style.display = "block";
    } else {
        // No se ha seleccionado ningún tipo de abono
        alert("Por favor, seleccione un tipo de abono");
    }
    }
);
btnSiguiente2.addEventListener("click", function () {
    falloCampos = false;
    if (
        nombreInput.value === "" ||
        apellidoInput.value === "" ||
        fechaNacimientoInput.value === "" ||
        dniInput.value === "" ||
        (sexoInput[0].checked === false && sexoInput[1].checked === false) ||
        emailInput.value === "" ||
        telefonoInput.value === "" ||
        direccionInput.value === "" ||
        ciudadInput.value === "" ||
        codigoPostalInput.value === ""
    ) {
        alert("Por favor, complete todos los campos");
    }
    else if (!condicionesInput.checked) {
        alert("Por favor, acepte las condiciones");
    }

    else 
    {
        if (!esAlfabetico(nombreInput)) {
            alert("Por favor, introduzca un nombre válido");
            falloCampos = true;
        }
        if (!esAlfabetico(apellidoInput)) {
            alert("Por favor, introduzca un apellido válido");
            falloCampos = true; 
        }
        if (!esDNI(dniInput)) {
            alert("Por favor, introduzca un DNI válido");
            falloCampos = true;
        }
        if (!esEmail(emailInput)) {
            alert("Por favor, introduzca un email válido");
            falloCampos = true;
        }
        if (!esTelefono(telefonoInput)) {
            alert("Por favor, introduzca un teléfono válido");
            falloCampos = true;
        }
        if (!esCodigoPostal(codigoPostalInput)) {
            alert("Por favor, introduzca un código postal válido");
            falloCampos = true;
        }
        if(!falloCampos){
            form2.style.display = "none";
            form3.style.display = "block";
            alert("Inscripción realizada con éxito");
        }
    }
   
});

// Agregar controlador de eventos al botón Enviar
btnEnviar.addEventListener("click", function () {
    
    }
);

function esAlfabetico(elem) {
    let expresionRegular = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    return elem.value.match(expresionRegular);
}

function esDNI(elem) {
    let expresionRegular = /^\d{8}[a-zA-Z]/;
    return elem.value.match(expresionRegular);
}

function esEmail(elem) {
    let expresionRegular = /^\S+@\S+\.\S+$/;
    return elem.value.match(expresionRegular);
}

function esTelefono(elem) {
    let expresionRegular = /^\d{9}$/;
    return elem.value.match(expresionRegular);
}

function esCodigoPostal(elem) {
    let expresionRegular = /^\d{5}$/;
    return elem.value.match(expresionRegular);
}
