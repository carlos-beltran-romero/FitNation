
function getAllReservas() {
        let myUrl = "/reservas";
        $.ajax({
                type: "GET",
                dataType: "json",
                url: myUrl,
                success: function (data) {
                        let reservasTable = '<table><tr><th style="padding: 10px;">ID Reserva</th><th style="padding: 10px;">Nombre</th><th style="padding: 10px;">Apellidos</th><th style="padding: 10px;">Fecha Nacimiento</th><th style="padding: 10px;">Sexo</th><th style="padding: 10px;">DNI</th><th style="padding: 10px;">Telefono</th><th style="padding: 10px;">Instalacion</th><th style="padding: 10px;">Numero personas</th><th style="padding: 10px;">Fecha reserva</th><th style="padding: 10px;">Hora reserva</th></tr>';


                        $.each(data, function (index, reserva) {
                                reservasTable += '<tr><td style="padding: 10px;">'+ reserva._id+ '</td><td style="padding: 10px;">'+ reserva.Nombre + '</td><td style="padding: 10px;">' + reserva.Apellidos + '</td><td style="padding: 10px;">' + reserva['Fecha Nacimiento'] + '</td><td style="padding: 10px;">' + reserva.Sexo + '</td><td style="padding: 10px;">' + reserva.DNI + '</td><td style="padding: 10px;">' + reserva.Telefono + '</td><td style="padding: 10px;">' + reserva.Instalacion + '</td><td style="padding: 10px;">' + reserva['Numero personas'] + '</td><td style="padding: 10px;">' + reserva['Fecha Reserva'] + '</td><td style="padding: 10px;">' + reserva['Hora Reserva'] + '</td></tr>';


                        });
                        reservasTable += '</table>';
                        $("#resPista").html(reservasTable);
                },
                error: function (res) {
                        alert("ERROR " + res.statusText);
                }
        });
}




function postReserva() {
        var nombre = $("#nombre").val();
        var apellidos = $("#apellidos").val();
        var fechaNacimiento = $("#fechaNacimiento").val();
        var sexo = $("input[name='sexo']:checked").val();
        var dni = $("#dni").val();
        var telefono = $("#telefono").val();
        var instalacion = $("#instalacion").val();
        var numero_persona = $("#nPersonas").val();
        var fecha_reserva = $("#fechaReserva").val();
        var horaSeleccionada = $("button[name='hora']").filter(function() {
                return $(this).hasClass("clicked");
              }).val();
        

        $.ajax({
                type: "POST",
                url: "/reservas",
                contentType: "application/json",
                dataType: "text",
                data: JSON.stringify({
                        "Nombre": nombre,
                        "Apellidos": apellidos,
                        "Fecha Nacimiento": fechaNacimiento,
                        "Sexo": sexo,
                        "DNI": dni,
                        "Telefono": telefono,
                        "Instalacion": instalacion,
                        "Numero personas": numero_persona,
                        "Fecha Reserva": fecha_reserva,
                        "Hora Reserva": horaSeleccionada

                }),
                success: function (data) {
                        $("#resPista").html(data);
                },
                error: function (res) {
                        alert("ERROR " + res.statusText);
                }
        });
}

function deleteReservas() {
        $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "/reservas",
                success: function (data) {
                        $("#resPista").html("Todas las reservas han sido eliminadas correctamente");
                },
                error: function (res) {
                        let mensaje = JSON.parse(res.responseText);
                        alert("ERROR: " + mensaje.msg);
                }
        });
}

function getReserva(reservaId) {
        let myUrl = "/reservas/" + reservaId;
        $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function (data) {
                let reservasTable = '<table><tr><th style="padding: 10px;">ID Reserva</th><th style="padding: 10px;">Nombre</th><th style="padding: 10px;">Apellidos</th><th style="padding: 10px;">Fecha Nacimiento</th><th style="padding: 10px;">Sexo</th><th style="padding: 10px;">DNI</th><th style="padding: 10px;">Teléfono</th><th style="padding: 10px;">Instalación</th><th style="padding: 10px;">Número de personas</th><th style="padding: 10px;">Fecha de reserva</th><th style="padding: 10px;">Hora de reserva</th></tr>';


                $.each(data, function (index, reserva) {
                        reservasTable += '<tr><td style="padding: 10px;">'+ reserva._id+ '</td><td style="padding: 10px;">'+ reserva.Nombre + '</td><td style="padding: 10px;">' + reserva.Apellidos + '</td><td style="padding: 10px;">' + reserva['Fecha Nacimiento'] + '</td><td style="padding: 10px;">' + reserva.Sexo + '</td><td style="padding: 10px;">' + reserva.DNI + '</td><td style="padding: 10px;">' + reserva.Telefono + '</td><td style="padding: 10px;">' + reserva.Instalacion + '</td><td style="padding: 10px;">' + reserva['Numero personas'] + '</td><td style="padding: 10px;">' + reserva['Fecha Reserva'] + '</td><td style="padding: 10px;">' + reserva['Hora Reserva'] + '</td></tr>';


                });
                reservasTable += '</table>';
                $("#resPista").html(reservasTable);
        },
        error: function(res) {
        let mensaje = JSON.parse(res.responseText);
        alert("ERROR: " + mensaje.msg);
        }
        });
    }
    function deleteReserva(reservaId) {
        let myUrl = "/reservas/" + reservaId;
        $.ajax({
          type: "DELETE",
          dataType: "json",
          url: myUrl,
          success: function(data) {
            $("#resPista").html("La reserva con ID " + reservaId + " ha sido eliminada correctamente");
          },
          error: function(res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
          }
        });
    }

    function updateReserva(reservaId, modificacion) {
        let myUrl = "/reservas/" + reservaId;
        $.ajax({
          type: "PUT",
          dataType: "json",
          contentType: "application/json",
          data: modificacion,
          url: myUrl,
          success: function(data) {
            $("#resPista").html("La reserva con ID " + reservaId + " ha sido actualizada correctamente");
          },
          error: function(res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
          }
        });
    }


