/* Funciones para la tabla MOTORBIKE
 * G34 - GRUPO 9
 */

//Funcion METODO GET
function traerInformacionMotorbikes() {
    $.ajax({
        url: "http://129.151.111.69:8080/api/Motorbike/all",
        type: "GET",
        datatype: "JSON",
        success: function (items) {
            console.log(items);
            pintarRespuestaMotorbikes(items);
        }
    })
}
function pintarRespuestaMotorbikes(items) {

    let myTable = "<table>";
    myTable += "<th> NOMBRE MOTO </th>";
    myTable += "<th> MARCA </th>";
    myTable += "<th> AÑO </th>";
    myTable += "<th> DESCRIPCIÓN </th>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].brand + "</td>";
        myTable += "<td>" + items[i].year + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td> <button onclick='editarInformacionMotorbikes(" + items[i].id + ")'> Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoMotorbikes(" + items[i].id + ")'> Eliminar</button>";
        myTable += "</tr>";

    }

    myTable += "</table>";
    $("#resultado1").html(myTable);

}//FIN GET


//Funcion METODO POST
function guardarInformacionMotorbikes() {
    let myData1 = {
        name: $("#Mname").val(),
        brand: $("#Mbrand").val(),
        year: $("#Myear").val(),
        description: $("#Mdescription").val(),
    };
    console.log(myData1);

    if (myData1.name == '' || myData1.brand == '' || myData1.year == '' || myData1.description == '') {
        alert("Todos los campos de la Moto son obligatorios");
    }
    else {
        let dataToSend = JSON.stringify(myData1);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            datatype: "JSON",
            data: JSON.stringify(myData1),

            url: "http://129.151.111.69:8080/api/Motorbike/save",

            success: function (items) {
                console.log(items);

                $("#resultado1").empty();
                $("#Mname").val("");
                $("#MBrand").val("");
                $("#Myear").val("");
                $("#Mdescription").val("");
                traerInformacionMotorbikes();
                alert("Se registró moto con éxito");

            }
        })
    };

}//FIN POST

//Funcion METODO PUT
function editarInformacionMotorbikes(idElemento) {
    let myData1 = {
        id: idElemento,
        name: $("#Mname").val(),
        brand: $("#Mbrand").val(),
        year: $("#Myear").val(),
        description: $("#Mdescription").val(),

    };
    console.log(myData1);
    let dataToSend = JSON.stringify(myData1);
    $.ajax({
        url: "http://129.151.111.69:8080/api/Motorbike/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado1").empty();
            $("#Mname").val("");
            $("#MBrand").val("");
            $("#Myear").val("");
            $("#Mdescription").val("");
            traerInformacionMotorbikes();
            alert("Se ha actualizado exitosamente")
        }
    });
}//FIN PUT

//Funcion METODO DELETE
function borrarElementoMotorbikes(idElemento) {
    let myData1 = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData1);
    $.ajax({
        url: "http://129.151.111.69:8080/api/Motorbike/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function (items) {
            $("#resultado1").empty();
            traerInformacionMotorbikes();
            alert("Se elimino moto correctamente")
        }
    });
}//FIN DELETE
/*FIN FUNCIONES TABLA MOTORBIKE*/