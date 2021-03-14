frmDatos = new FormData();
var contentTxt;
var esValido;



$(document).ready(function () {
    console.log("ingresa...");
    $("#cerrar_sesion").click(function () {
        console.log("cerrar sesion");

        $.ajax({
            type: "POST",
            dataType: "json",
            url: "../../SrvLogin",
            data: {opcion: 'cerrarSesion'}
        }).done(function (data, textStatus, jqXHR) {
            console.log(data);
            if (data.codRespuesta === "000") {
                $(location).attr('href', '../../login.jsp');
                //location.href = "../../login.jsp";
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('error de llamada');
        });
    });

    $("#btn_cambiar_pass").click(function () {
        $(location).attr('href', '../login/recuperar-password.jsp');
    });


    $("#btn_guardar_archivo").click(function () {
//        //if (idInstComb == "") {

        frmDatos.append("opcion", "guardarTXT");
        frmDatos.append("det", contentTxt);
        //agregar al for: enctype="multipart/form-data"
        //
        //swal("Usuario Incorrecto!");

        $.ajax({
            url: "../../SrvProcesos",
            type: "post",
            data: frmDatos,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
//                var obj = jQuery.parseJSON(data);
//                if (obj.CodResponse === "00") {
//                    litoral.alertasbl(obj.CodResponse, '', obj.MsjResponse, '');
//                } else {
//                    litoral.alertasbl(obj.CodResponse, '', obj.MsjResponse, '');
//                }
            }
        });
//        $.ajax({
//            type: "post",
//            dataType: "json",
//            url: "../../SrvLogin",
//            data: {opcion: 'cerrarSesion'}
//        }).done(function (data, textStatus, jqXHR) {
//            console.log(data);
//            if (data.codRespuesta === "000") {
//                $(location).attr('href', '../../login.jsp');
//                //location.href = "../../login.jsp";
//            }
//        }).fail(function (jqXHR, textStatus, errorThrown) {
//            console.log('error de llamada');
//        });


    });

    $("#btn_cargar_xml").click(function () {
        $('#abrir_xml').val("");
        $('#abrir_xml').click();
        document.getElementById('abrir_xml')
                .addEventListener('change', leerArchivo, false);
    });


});


function leerArchivo(e) {
    //validarExtTxt();
    const file = document.getElementById('abrir_xml');
    $('#txt_cargar_xml').val(file.value);

    //obtener nombre archivo
//    nombreArchivo = extraerNomArchivo(file.value);
    var archivo = e.target.files[0];
//    farchivosend.append("archivo", archivo);
    farchivosend = archivo;

//    XML_DOC = $.pareXML(farchivosend);
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        //contentTxt = contenido;
        validarContenido(contenido);
    };
    lector.readAsText(archivo);
}


function validarContenido(contenido) {
    var lineas = contenido.split("\n");
    var fila = 1;
    var col = 1;
    var index = 0;
    var obj;
    var mnsjError;
    var indice = 1;
    var repetirUnaVez = 0;
    archivoValidado = true;
    registros = [];

    $(contenido).find("registro").each(function () {
        obj = new Object();
        obj.idTabla = 0;
        obj.idTabla = $(this).find("id_tabla").text();
        obj.primerNombre = $(this).find("primer_nombre").text();
        obj.segundoNombre = $(this).find("segundo_nombre").text();
        obj.primerApellido = $(this).find("prmer_apellido").text();
        obj.segundoApellido = $(this).find("segundo_apellido").text();
        obj.edad = $(this).find("edad").text();
        obj.direccion = $(this).find("direccion").text();
        obj.telefono = $(this).find("telefono").text();
        obj.fechaNacimiento = $(this).find("fecha_nacimiento").text();
        
        contentTxt += $(this).find("id_tabla").text();
        contentTxt += ("\t");
        contentTxt += $(this).find("primer_nombre").text();
        contentTxt += ("\t");
        contentTxt += $(this).find("segundo_nombre").text();
        contentTxt += ("\t");
        contentTxt += $(this).find("prmer_apellido").text();
        contentTxt += ("\t");
        contentTxt += $(this).find("segundo_apellido").text();
        contentTxt += ("\t");
        contentTxt += $(this).find("edad").text();
        contentTxt += ("\t");
        contentTxt += $(this).find("direccion").text();
        contentTxt += ("\t");
        contentTxt += $(this).find("telefono").text();
        contentTxt += ("\t");
        contentTxt += $(this).find("fecha_nacimiento").text();
        contentTxt += ("\n");
        registros.push(obj);
    });

    llenarTabla(registros);
}

function llenarTabla(o) {
    $('#table_registros').dataTable().fnDestroy();
    console.log('tabla ' + o);
    var table = $('#table_registros').DataTable({
        language: {search: "Buscar", info: "Total: _TOTAL_ registros. ", emptyTable: "No hay información", infoEmpty: "Total: 0 registros."},
        select: true,
        scrollY: 300,
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        fixedColumns: false,
        data: o,
        columns: [
            {data: 'idTabla'},
            {data: 'primerNombre'},
            {data: 'segundoNombre'},
            {data: 'primerApellido'},
            {data: 'segundoApellido'},
            {data: 'edad'},
            {data: 'direccion'},
            {data: 'telefono'},
            {data: 'fechaNacimiento'}


        ]

    });

    $('#table_registros tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $('#txt_novedades').val("");
        } else {
            var cellData = $('#table_registros').DataTable().row($(this)).data();
            $('#txt_novedades').val(cellData.mensajeError);
        }
    });


}