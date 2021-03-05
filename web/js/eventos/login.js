



$(document).ready(function () {

    var scopes = 'public_profile,email';

    window.fbAsyncInit = function () {

        FB.init({
            appId: '123104449738799',
//            appId: '1637847639937075',            
            status: true,
            cookie: true,
            xfbml: true,
//            version: 'v10.0'
            version: 'v2.1'
        });


        FB.getLoginStatus(function (response) {
            statusChangeCallback(response, function () {
            });
        });
    };

    var statusChangeCallback = function (response, callback) {
//  		console.log(response);

        if (response.status === 'connected') {
            getFacebookData();
        } else {
            callback(false);
        }
    };

    var checkLoginState = function (callback) {
        FB.getLoginStatus(function (response) {
            callback(response);
        });
    };

    var getFacebookData = function () {
        FB.api('/me', function (response) {
            console.log(response);

//	  		$('#login').after(div_session);
//	  		$('#login').remove();
//	  		$('#facebook-session strong').text("Bienvenido: "+response.name);
//	  		$('#facebook-session img').attr('src','http://graph.facebook.com/'+response.id+'/picture?type=large');
        });
    };

    var facebookLogin = function () {
        checkLoginState(function (data) {
            if (data.status !== 'connected') {
                FB.login(function (response) {
                    if (response.status === 'connected')
                        getFacebookData();
                }, {scope: scopes});
            }
        });
    };

    var facebookLogout = function () {
        checkLoginState(function (data) {
            if (data.status === 'connected') {
                FB.logout(function (response) {
                    $('#facebook-session').before(btn_login);
                    $('#facebook-session').remove();
                });
            }
        });

    };


    $(document).on('submit', '#user', function (event) {
        event.preventDefault();
        //alert('page did not reload');
    });

    $(document).on('click', '#login', function (e) {
        e.preventDefault();

        facebookLogin();

        console.log('inicio de facebook');
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
            } else if (data.codRespuesta == "002") {
                alert("Usuario Incorrecto");
            } else {
                //alert("Error en el proceso de login");
                //https://lipis.github.io/bootstrap-sweetalert/ -- url de las demas alert
                swal("Here's a message!");
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






