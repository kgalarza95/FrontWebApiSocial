



$(document).ready(function () {
    $(document).on('submit', '#user', function (event) {
        event.preventDefault();
        //alert('page did not reload');
    });


    $('#btn_acceder').click(function () {
        usuario = $("#txt_usuario").val();
        pass = $("#txt_contrasenia").val();
        console.log('press...');
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
            } else if (data.codRespuesta == "002"){
                alert("Usuario Incorrecto");
            }
            else{
                alert("Error en el proceso de login");
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('error de llamada');
        });

//        LLAMADA A TODOS LOS USUARIOS
//        $.ajax({
//            type: "GET",
//            dataType: "json",
//            url: "http://localhost:8080/apiuniversidad/webresources/universidad/getUsuarios"
//        }).done(function(data, textStatus, jqXHR){
//            console.log(data);
//           // $(location).attr('href','index.jsp');
//        }).fail(function(jqXHR, textStatus, errorThrown){
//            console.log('error de llamada');
//        });
    });
});




