/* Funciones para la tabla CATEGORIA
 * G34 - GRUPO 9
 */

//Funcion METODO GET
function traerInformacionCategorias() {
    $.ajax({
        url: "http://129.151.111.69:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (items) {
            console.log(items);
            pintarRespuestaCategorias(items);
        }
    })
}
function pintarRespuestaCategorias(items) {

    let myTable = "<table>";
    myTable += "<th> NOMBRE CATEGORIA </th>";
    myTable += "<th> DESCRIPCIÓN </th>";
    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td> <button onclick='editarInformacionCategorias(" + items[i].id + ")'> Actualizar</button>";
        myTable += "<td> <button onclick='borrarElementoCategorias(" + items[i].id + ")'> Eliminar</button>";
        myTable += "</tr>";
    }

    myTable += "</table>";
    $("#resultado2").html(myTable);
}//FIN GET


//Funcion METODO POST
function guardarInformacionCategorias() {
    let myData2 = {
        name: $("#Cname").val(),
        description: $("#Cdescription").val(),
    };

    if (myData2.name == '' || myData2.description == '') {
        alert("Todos los campos de la Categoría son obligatorios");
    }
    else {

        let dataToSend = JSON.stringify(myData2);
        $.ajax({
            url: "http://129.151.111.69:8080/api/Category/save",
            type: "POST",
            data: JSON.stringify(myData2),
            contentType: "application/json; charset=utf-8",
            datatype: "JSON",
            success: function (items) {
                $("#resultado2").empty();
                $("#Cname").val("");
                $("#Cdescription").val("");
                traerInformacionCategorias();
                alert("Se registró Categoria con éxito")
            }
        })
    };

}//FIN POST

//Funcion METODO PUT
function editarInformacionCategorias(idElemento) {
    let myData2 = {
        id: idElemento,
        name: $("#Cname").val(),
        description: $("#Cdescription").val(),

    };
    console.log(myData2);
    let dataToSend = JSON.stringify(myData2);
    $.ajax({
        url: "http://129.151.111.69:8080/api/Category/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado2").empty();
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategorias();
            alert("Se actualizó Categoria exitosamente")
        }
    });
}//FIN PUT

//Funcion METODO DELETE
function borrarElementoCategorias(idElemento) {
    let myData2 = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData2);
    $.ajax({
        url: "http://129.151.111.69:8080/api/Category/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (items) {
            $("#resultado2").empty();
            traerInformacionCategorias();
            alert("Se eliminó Categoría correctamente")
        }
    });
}//FIN DELETE
/*FIN FUNCIONES TABLA CATEGORIA*/