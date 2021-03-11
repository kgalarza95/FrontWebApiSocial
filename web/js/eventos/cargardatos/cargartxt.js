frmDatos = new FormData();
var contentTxt;
var esValido;

$(document).ready(function () {

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

    $("#btn_cargar_txt").click(function () {
        $('#abrir_txt').val("");
        $('#abrir_txt').click();
        document.getElementById('abrir_txt')
                .addEventListener('change', leerArchivo, false);
    });


});


function leerArchivo(e) {
    //validarExtTxt();
    const file = document.getElementById('abrir_txt');
    $('#txt_cargar_txt').val(file.value);

    //obtener nombre archivo
//    nombreArchivo = extraerNomArchivo(file.value);
    var archivo = e.target.files[0];
//    farchivosend.append("archivo", archivo);
    farchivosend = archivo;
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        contentTxt = contenido;
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
//
    for (var linea of lineas) {
//        debugger;
        var columnas = linea.split("\t");
        obj = new Object();
        mnsjError = fila + " ";
        index = 0;


//        if (columnas[0] < 1) {
        if (lineas.length < 2) {
            //Verificar que el archivo no este vacio
            archivoValidado = false;
            swal("Archivo no puede estar vacio");
            mnsjError = '';
//            limpiarComponentes();
            return;
        } else {

            obj.registro = columnas[index];
            if (valVacio(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Sin dato && ";
                obj.registro = '';
            }
            if (!valNumerico(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Debe ser númerico && ";
            }
            if (columnas[index] != indice) {
                archivoValidado = false;
                mnsjError += "c[" + (index + 1) + "] Indice incorrecto && ";
            }

            obj.primerNombre = columnas[++index];
            if (valVacio(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Sin dato && ";
                obj.primerNombre = '';
            }

            obj.segundoNombre = columnas[++index];
            if (valVacio(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Sin dato && ";
            }

            obj.primerApellido = columnas[++index];
            if (valVacio(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Sin dato && ";
            }
            obj.segundoApellido = columnas[++index];
            if (valVacio(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Sin dato && ";
            }

            obj.edad = columnas[++index];
            if (valVacio(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Sin dato && ";
            }
            if (!valNumerico(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Debe ser númerico && ";
            }

            obj.direccion = columnas[++index];
            if (valVacio(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Sin dato && ";
            }

            obj.telefono = columnas[++index];
            if (valVacio(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Sin dato && ";
            }

            obj.fechaNacimiento = columnas[++index];
            if (valVacio(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] Sin dato && ";
                obj.fechaNacimiento = '';
            }
            if (!valFormatFecha(columnas[index])) {
                mnsjError += "c[" + (index + 1) + "] La fecha es incorrecta && ";
            }
//
            if (mnsjError.substr(-3) === "&& ") {
                mnsjError = mnsjError.substring(0, mnsjError.length - 3);
            }
            if (fila == mnsjError) {
                mnsjError = " ";
            }
            if (mnsjError.length > 1) {
                obj.verError = 'verError';
            } else {
                obj.verError = '';
            }
            obj.mensajeError = mnsjError;
            indice++;
            fila++;
            registros.push(obj);
        }//valid if
    }//for

    llenarTabla(registros);
    $("#txt_novedades").val(mnsjError);
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
            {data: 'registro'},
            {data: 'primerNombre'},
            {data: 'segundoNombre'},
            {data: 'primerApellido'},
            {data: 'segundoApellido'},
            {data: 'edad'},
            {data: 'direccion'},
            {data: 'telefono'},
            {data: 'fechaNacimiento'}
//            {data: 'mensajeError'},
//            {data: '',
//                //width: "10%",
//                className: "text-center",
//                render: function (data, type, row) {
//                    return '<a href="#txt_novedades" id="ver_error" style="color:red" >' + row.verError + '</a>';
////                    return '<button type="button" href="#txt_novedades" id="ver_error" style="color:red" onclick="irA()">' + row.verError + '</button>';
//                    //return '<button type="button"  title="eliminar lote" class="btn btn-default pull-right btn-trash" onclick="deleteLote(' + row.REGISTRO + ')"><span class="ti-trash"></span></button>';
////                            return '<input type="button" value="Eliminar" cab="" onclick="notificacionRow(' + row.ID_PAGOS_PROVEEDORES_CABECERA + ',' + row.ID_PAGOS_PROVEEDORES_DETALLE + ')">';
//                }}

        ]
//        columnDefs: [
//            {
//                targets: [16], //para ocultar colummnas
//                visible: false,
//                searchable: false
//            }
//        ]
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

//    $("#table_registros tbody tr").each(function () {
//        var texto = $(this).children()[16].textContent.trim();
//        if (texto.length > 0) {
//            $(this).css('color', 'red');
//        }
//    });
}

function valVacio(dato) {
    try {
//        debugger;
        if (dato.length < 1) {
            archivoValidado = false;
            return true;
        } else if (dato == "") {
            archivoValidado = false;
            return true;
        } else if (dato === "") {
            archivoValidado = false;
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }

}


function valNumerico(dato) {
    if ($.isNumeric(dato)) {
        return true;
    } else {
        archivoValidado = false;
        return false;
    }
}


function valFormatFecha(dato) {
    try {
        dato = dato.replace(/\//g, "-");
        var valid = dato.split("-");
        var dia = parseInt(valid[0]);
        var mes = parseInt(valid[1]);
        var anio = parseInt(valid[2]);
        if (dia > 31 || dia < 1) {
            archivoValidado = false;
            return false;
        } else if (mes > 12 || mes < 1) {
            archivoValidado = false;
            return false;
        } else if (anio < 1900) {
            archivoValidado = false;
            return false;
        } else {
            return true;
        }
    } catch (err) {
        return false;
    }
}




