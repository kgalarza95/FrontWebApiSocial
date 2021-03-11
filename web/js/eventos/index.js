frmDatos = new FormData();



$(document).ready(function () {

    $(".cerrar_sesion").click(function () {
        console.log("cerrar sesion");

        $.ajax({
            type: "POST",
            dataType: "json",
            url: "SrvLogin",
            data: {opcion: 'cerrarSesion'}
        }).done(function (data, textStatus, jqXHR) {
            console.log(data);
            if (data.codRespuesta === "000") {
                $(location).attr('href', 'login.jsp');
                //location.href = "login.jsp";
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('error de llamada');
        });
    });

    $("#btn_cambiar_pass").click(function () {
        $(location).attr('href', 'pages/login/recuperar-password.jsp');
    });

});






