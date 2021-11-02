/* Funciones para la tabla CLIENTE
 * G34 - GRUPO 9
 */

//Funcion METODO GET
function traerInformacionClientes() {
    $.ajax({
        url: "http://129.151.111.69:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (items) {
            console.log(items);
            pintarRespuestaClientes(items);
        }
    })
}
function pintarRespuestaClientes(items) {

    let myTable = "<table>";
    myTable += "<th> EMAIL</th>";
    myTable += "<th> CONTRASEÑA </th>";
    myTable += "<th> NOMBRE </th>";
    myTable += "<th> EDAD </th>";
    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].password + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td> <button onclick='editarInformacionClientes(" + items[i].idClient + ")'> Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoClientes(" + items[i].idClient + ")'> Eliminar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultado3").html(myTable);
}//FIN GET


//Funcion METODO POST
function guardarInformacionClientes() {
    let myData3 = {
        email: $("#CLemail").val(),
        password: $("#CLpassword").val(),
        name: $("#CLname").val(),
        age: $("#CLage").val(),
    };

    if (myData3.email == '' || myData3.password == '' || myData3.name == '' || myData3.age == '') {
        alert("Todos los campos del Cliente son obligatorios");
    }
    else {

        let dataToSend = JSON.stringify(myData3);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            datatype: "JSON",
            data: JSON.stringify(myData3),
            url: "http://129.151.111.69:8080/api/Client/save",
            success: function (items) {
                $("#resultado3").empty();
                $("#CLemail").val("");
                $("#CLpassword").val("");
                $("#CLname").val("");
                $("#CLage").val("");
                traerInformacionClientes();
                console.log(items);
                console.log("Se guardo correctamente");
                alert("Cliente creado satisfactoriamente")
            }
        })
    };

}//FIN POST

//Funcion METODO PUT
function editarInformacionClientes(idElemento) {
    let myData3 = {
        idClient: idElemento,
        email: $("#CLemail").val(),
        password: $("#CLpassword").val(),
        name: $("#CLname").val(),
        age: $("#CLage").val(),

    };
    console.log(myData3);
    let dataToSend = JSON.stringify(myData3);
    $.ajax({
        url: "http://129.151.111.69:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado3").empty();
            $("#idClient").val("");
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            traerInformacionClientes();
            alert("El cliente se ha Actualizado")
        }
    });
}//FIN PUT

//Funcion METODO DELETE
function borrarElementoClientes(idElemento) {
    let myData3 = {
        idClient: idElemento
    };
    let dataToSend = JSON.stringify(myData3);
    $.ajax({
        url: "http://129.151.111.69:8080/api/Client/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado3").empty();
            traerInformacionClientes();
            alert("Se eliminó el cliente")
        }
    });
}//FIN DELETE
/*FIN FUNCIONES TABLA CLIENTE*/