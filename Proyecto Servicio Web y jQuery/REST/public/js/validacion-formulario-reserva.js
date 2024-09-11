var btnSiguiente1 = document.getElementById("btnSiguiente1");
var btnAnterior1 = document.getElementById("btnAnterior1");
var btnSiguiente2 = document.getElementById("btnSiguiente2");
var btnAnterior2 = document.getElementById("btnAnterior2");
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
const boton = document.querySelector('.boton_horas');
var botonesHoras = document.getElementsByName("hora");
var horaSeleccionada = false;

var nombreInput = document.getElementById("nombre");
var apellidoInput = document.getElementById("apellidos");
var sexoInput = document.getElementsByName("sexo");
var dniInput = document.getElementById("dni");
var fechaNacimientoInput = document.getElementById("fechaNacimiento");
var telefonoInput = document.getElementById("telefono");
var instalacionInput = document.getElementById("instalacion");
var nPersonasInput = document.getElementById("nPersonas");
const fechaInput = document.querySelector('#fechaReserva');

// Función para deshabilitar los domingos
function deshabilitarDomingos(evento) {
  const fechaSeleccionada = new Date(evento.target.value);
  if (fechaSeleccionada.getDay() === 0) {
    evento.target.setCustomValidity('No se pueden seleccionar domingos');
  } else {
    evento.target.setCustomValidity('');
  }
}

// Agregar un event listener para detectar cambios en la fecha seleccionada
fechaInput.addEventListener('input', deshabilitarDomingos);


const botonesHora = document.querySelectorAll("#horas .boton_horas");

btnAnterior1.addEventListener("click", function () {
    form2.style.display = "none";
    form1.style.display = "block";
});
btnAnterior2.addEventListener("click", function () {
  form3.style.display = "none";
  form2.style.display = "block";
});


btnSiguiente1.addEventListener("click", function () {
    falloCampos = false;
   
        if (
            nombreInput.value === "" ||
            apellidoInput.value === "" ||
            fechaNacimientoInput.value === "" ||
            dniInput.value === "" ||
            (sexoInput[0].checked === false && sexoInput[1].checked === false) ||
            telefonoInput.value === ""

        ) {
            alert("Por favor, complete todos los campos");
            falloCampos = true;
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
            if (!esTelefono(telefonoInput)) {
                alert("Por favor, introduzca un teléfono válido");
                falloCampos = true;
            }
        }
    
   
    
    if(!falloCampos){
        form1.style.display = "none";
        form2.style.display = "block";
    }
});

btnSiguiente2.addEventListener("click", function () {
    falloCampos = false;
    if (
        instalacionInput.value === "" ||
        nPersonasInput.value === ""
    ) {
        alert("Por favor, complete todos los campos");
        falloCampos = true;
    }
    else{
        if(instalacionInput.value == "piscina"){
            if(nPersonasInput.value > 16){
                alert("La capacidad máxima la piscina es de 16 personas");
                falloCampos = true;
            }
        }
        else if(instalacionInput.value == "pistaPadel"){
            if(nPersonasInput.value > 4){
                alert("La capacidad máxima de la pista de padel es de 16 personas. Si desea jugar con más personas deberá alquilar otra pista.");
                falloCampos = true;
            }
        }
        else if(instalacionInput.value == "pistaTenis"){
            if(nPersonasInput.value > 4){
                alert("La capacidad máxima la pista de tenis es de 16 personas. Si desea jugar con más personas deberá alquilar otra pista.");
                falloCampos = true;
            }
        }
        else{
            if(nPersonasInput.value > 11){
                alert("La capacidad máxima del campo de fútbol es de 11 personas");
                falloCampos = true;
            }
        }
    }
    if(!falloCampos){
        form2.style.display = "none";
        form3.style.display = "block";
    }
});

btnEnviar.addEventListener("click", function () {
    const fechaSeleccionada = new Date(fechaInput.value);
    if (fechaInput.value != "") {
        if(fechaSeleccionada < new Date()){
            alert("La fecha seleccionada no puede ser anterior a la actual");
        }
        else    if(fechaSeleccionada.getDay() === 0){
            alert("No se pueden seleccionar domingos");
        }
        else if(horaSeleccionada){
            alert("Reserva realizada con éxito");
        } 
        else    alert("Por favor, seleccione una hora");
    }
    else{
        alert("Por favor, seleccione una fecha");
    }
});

// Agregar un controlador de eventos de clic a cada botón de hora
botonesHora.forEach(boton => {
    boton.addEventListener("click", () => {
      // Restablecer el estilo de los botones de hora
      botonesHora.forEach(boton => boton.classList.remove("clicked"));
  
      // Agregar la clase "clicked" al botón de hora que se hizo clic
      boton.classList.add("clicked");
      horaSeleccionada = true;
    });
  });

function esNumerico(elem) {
    let expresionRegular = /^[1-9]\d*$/;
    return elem.value.match(expresionRegular);
}

function esAlfabetico(elem) {
    let expresionRegular = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    return elem.value.match(expresionRegular);
}

function esDNI(elem) {
    let expresionRegular = /^\d{8}[a-zA-Z]/;
    return elem.value.match(expresionRegular);
}

function esTelefono(elem) {
    let expresionRegular = /^\d{9}$/;
    return elem.value.match(expresionRegular);
}






