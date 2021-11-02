/* Funciones para la tabla MENSAJES
 * G34 - GRUPO 9
 */

//Funcion METODO GET
function traerInformacionMensajes() {
    $.ajax({
        url: "http://129.151.111.69:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (items) {
            console.log(items);
            pintarRespuestaMensajes(items);
        }
    })
}
function pintarRespuestaMensajes(items) {

    let myTable = "<table>";
    myTable += "<th> ID MENSAJE </th>";	
    myTable += "<th> MENSAJE</th>";
    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idMessage + "</td>";
        myTable += "<td>" + items[i].messageText + "</td>";
        myTable += "<td> <button onclick='editarInformacionMensajes(" + items[i].idMessage + ")'> Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoMensajes(" + items[i].idMessage + ")'> Eliminar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultado4").html(myTable);
}//FIN GET


//Funcion METODO POST
function guardarInformacionMensajes() {
    let myData4 = {
        messageText: $("#MmessageText").val(),
    };

    if (myData4.messageText == '') {
        alert("Por favor ingrese un mensaje");
    }
    else {
        let dataToSend = JSON.stringify(myData4);
        $.ajax({
            url: "http://129.151.111.69:8080/api/Message/save",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(myData4),
            datatype: "JSON",
            success: function (items) {
                $("#resultado4").empty();
                $("#MmessageText").val("");
                traerInformacionMensajes();
                alert("Mensaje creado satisfactoriamente")
            }
        })
    };

}//FIN POST

//Funcion METODO PUT
function editarInformacionMensajes(idElemento) {
    let myData4 = {
        idMessage: idElemento,
        messageText: $("#MmessageText").val(),

    };
    console.log(myData4);
    let dataToSend = JSON.stringify(myData4);
    $.ajax({
        url: "http://129.151.111.69:8080/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado4").empty();
            $("#MmessageText").val("");
            traerInformacionMensajes();
            alert("El Mensaje se ha Actualizado")
        }
    });
}//FIN PUT

//Funcion METODO DELETE
function borrarElementoMensajes(idElemento) {
    let myData4 = {
        idMessage: idElemento
    };
    let dataToSend = JSON.stringify(myData4);
    $.ajax({
        url: "http://129.151.111.69:8080/api/Message/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado4").empty();
            traerInformacionMensajes();
            alert("Se eliminó el Mensaje")
        }
    });
}//FIN DELETE
/*FIN FUNCIONES TABLA MENSAJES*/