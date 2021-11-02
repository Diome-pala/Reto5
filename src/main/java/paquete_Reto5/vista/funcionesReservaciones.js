/* Funciones para la tabla RESERVACIONES
 * G34 - GRUPO 9
 */

//Funcion METODO GET
function traerInformacionReservaciones() {
    $.ajax({
        url: "http://129.151.111.69:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (items) {
            console.log(items);
            pintarRespuestaReservaciones(items);
        }
    })
}
function pintarRespuestaReservaciones(items) {

    let myTable = "<table>";
    myTable += "<th> FECHA INICIO </th>";
    myTable += "<th> FECHA DEVOLUCIÓN </th>";
    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].startDate + "</td>";
        myTable += "<td>" + items[i].devolutionDate + "</td>";
        myTable += "<td> <button onclick='editarInformacionReservaciones(" + items[i].idReservation + ")'> Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoReservaciones(" + items[i].idReservation + ")'> Eliminar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultado5").html(myTable);
}//FIN GET


//Funcion METODO POST
function guardarInformacionReservaciones() {
    let myData5 = {
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
    };

    if (myData5.startDate == '' || myData5.devolutionDate == '') {
        alert("Ambas fechas de la Reservación son obligatorias");
    }
    else {

        let dataToSend = JSON.stringify(myData5);

        $.ajax({
            url: "http://129.151.111.69:8080/api/Reservation/save",
            type: "POST",
            data: JSON.stringify(myData5),
            contentType: "application/json; charset=utf-8",
            datatype: "JSON",
            success: function (items) {
                $("#resultado5").empty();
                $("#startDate").val("");
                $("#devolutionDate").val("");
                traerInformacionReservaciones();
                alert("La Reservación se creó satisfactoriamente")
            }
        })
    };

}//FIN POST

//Funcion METODO PUT
function editarInformacionReservaciones(idElemento) {
    let myData5 = {
        idReservation: idElemento,
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),

    };
    console.log(myData5);
    let dataToSend = JSON.stringify(myData5);
    $.ajax({
        url: "http://129.151.111.69:8080/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado5").empty();
            $("#idReservation").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            traerInformacionReservaciones();
            alert("La Reservación se ha Actualizado")
        }
    });
}//FIN PUT

//Funcion METODO DELETE
function borrarElementoReservaciones(idElemento) {
    let myData5 = {
        idReservation: idElemento
    };
    let dataToSend = JSON.stringify(myData5);
    $.ajax({
        url: "http://129.151.111.69:8080/api/Reservation/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado5").empty();
            traerInformacionReservaciones();
            alert("Se eliminó la Reservación")
        }
    });
}//FIN DELETE
/*FIN FUNCIONES TABLA RESERVACIONES*/
