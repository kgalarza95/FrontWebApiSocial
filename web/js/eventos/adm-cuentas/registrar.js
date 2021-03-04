



$(document).ready(function () {


    $('#btn_registrar').click(function () {
        nombres = $("#txt_nombre").val();
        apellidos = $("#txt_apellido").val();
        usuario = $("#txt_correo").val();
        pass = $("#txt_contrasenia").val();
        pass2 = $("#Repetir Contraseña").val("");
        console.log('press...');
        
        if(pass == pass2){
            
        }else{
            
        }
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "SrvLogin",
            data: {opcion: 'ConsultaUsuario',
                usuario: usuario,
                pass: pass}
//            url: "http://localhost:8080/apiuniversidad/webresources/universidad/getUsuario?usuario="+usuario+"&contrasenia="+pass
        }).done(function (data, textStatus, jqXHR) {
            console.log(data);
//            var obj = jQuery.parseJSON(dato);
//        if (obj.CodResponse === "00") {         
//          var  o = JSON.parse(obj.ListTramitesOficial); 
            if (data.codRespuesta == "000") {
                $(location).attr('href', 'index.jsp');
            } else if (data.codRespuesta == "002") {
                alert("Usuario Incorrecto");
            } else {
                alert("Error en el proceso de login");
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('error de llamada');
        });

    });


});

function limpiarComponentes() {
    $("#txt_nombre").val("");
    $("#txt_apellido").val("");
    $("#txt_correo").val("");
    $("#txt_contrasenia").val("");
    $("#Repetir Contraseña").val("");
}


function limpiarUsuario() {
    $("#txt_correo").val("");
}

function limpiarContraseñas() {
    $("#txt_contrasenia").val("");
    $("#Repetir Contraseña").val("");
}

