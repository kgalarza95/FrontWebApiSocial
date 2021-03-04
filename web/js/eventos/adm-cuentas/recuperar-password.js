



$(document).ready(function () {
    $(document).on('submit', '#user', function (event) {
        event.preventDefault();
    });
    $(document).on('click', '#btn_reestablecer', function (e) {
        e.preventDefault();
    });

    $('#btn_reestablecer').click(function () {
        usuario = $("#txt_usuario").val();
        pass = $("#txt_contrasenia").val();
        pass2 = $("#txt_repetir_contrasenia").val();

        if (pass !== "" || pass2 !== "") {
            if (pass === pass2) {
                console.log("pass iguales");
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: "http://localhost:8080/apiuniversidad/webresources/universidad/getUsuarioRegistrado?usuario=" + usuario
                }).done(function (data, textStatus, jqXHR) {
                    console.log(data);
                    if (data.codRespuesta == "000") {
                        console.log("usuario existe");
                        $.ajax({
                            type: "GET",
                            dataType: "json",
                            url: "../../SrvLogin",
                            data: {
                                opcion: 'ReestablecerPass',
                                usuario: usuario,
                                pass: pass
                            }
                        }).done(function (data, textStatus, jqXHR) {
                            console.log(data);
                            if (data.codRespuesta == "000") {
                                $(location).attr('href', '../../login.jsp');
                                limpiarComponentes();
                            } else {
                                alert("Error en el proceso de registro");
                            }
                        }).fail(function (jqXHR, textStatus, errorThrown) {
                            console.log('error de llamada');
                        });
                    } else if (data.codRespuesta == "002") {
                        console.log("No existe user, no puede continuar");
                        limpiarComponentes();
                    } else {
                        alert("Error en el proceso de registro");
                    }
                }).fail(function (jqXHR, textStatus, errorThrown) {
                    console.log('error de llamada');
                });
            } else {
                console.log("pass no iguales");
                limpiarContrasenias();
            }
        } else {
            console.log("no pueden ser vacias");
        }

//        $.ajax({
//            type: "GET",
//            dataType: "json",
//            url: "SrvLogin",
//            data: {opcion: 'ConsultaUsuario',
//                usuario: usuario,
//                pass: pass}
////            url: "http://localhost:8080/apiuniversidad/webresources/universidad/getUsuario?usuario="+usuario+"&contrasenia="+pass
//        }).done(function (data, textStatus, jqXHR) {
//            console.log(data);
////            var obj = jQuery.parseJSON(dato);
////        if (obj.CodResponse === "00") {         
////          var  o = JSON.parse(obj.ListTramitesOficial); 
//            if (data.codRespuesta == "000") {
//                $(location).attr('href', 'index.jsp');
//            } else if (data.codRespuesta == "002") {
//                alert("Usuario Incorrecto");
//            } else {
//                alert("Error en el proceso de login");
//            }
//        }).fail(function (jqXHR, textStatus, errorThrown) {
//            console.log('error de llamada');
//        });

    });


});

function limpiarComponentes() {
    $("#txt_usuario").val("");
    $("#txt_contrasenia").val("");
    $("#Repetir Contraseña").val("");
}


function limpiarUsuario() {
    $("#txt_usuario").val("");
}

function limpiarContrasenias() {
    $("#txt_contrasenia").val("");
    $("#Repetir Contraseña").val("");
}

