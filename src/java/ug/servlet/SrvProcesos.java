/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ug.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.JSONObject;
import org.json.JSONWriter;
import ug.cliente.rest.ApiUniversidad;
//import ug.cliente.rest.RESTUNI;
import ug.utils.detalleArchivos;

/**
 *
 * @author KevinGalarza
 */
@MultipartConfig  //====> anotacion para permitir enviar multiparte (archivos)
@WebServlet(name = "SrvProcesos", urlPatterns = {"/SrvProcesos"})
public class SrvProcesos extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        String opcion = request.getParameter("opcion");
        String respText, menRespuesta = "009", codRespuesta = "Error - no usada", respParametros = "";
        ApiUniversidad ARest = new ApiUniversidad();
//        RESTUNI ARest2 = new RESTUNI();
        PrintWriter out = response.getWriter();
        //formando JOSON
        StringWriter stringWriter = new StringWriter();
        JSONWriter writer = new JSONWriter(stringWriter);
        JSONObject resJson = null;

        /**
         * Sesion
         */
        HttpSession mySession = request.getSession(true);
        System.out.println("opcion: " + opcion);
//        UsuarioSesion us = new UsuarioSesion();
//        us.setPassword(request.getParameter("pass"));
//        us.setUsuario(request.getParameter("usuario"));
//        mySession.setAttribute("usuarioSesion", us);

//        String jsonResp = 
        switch (opcion) {
            case "guardarTXT":
                try {
                    String strRegistros = request.getParameter("det");
                    List<detalleArchivos> detallesArchivos = new ArrayList<>();

                    String[] filas = strRegistros.split("\\n");
                    for (String fila : filas) {
                        int col = 0;
                        detalleArchivos detalle = new detalleArchivos();
                        String[] columna = fila.split("\\t");

//                        detalle.setId_tabla(columna[col]);
//                        detalle.setPrimer_nombre(columna[++col]);
//                        detalle.setSegundo_nombre(columna[++col]);
//                        detalle.setPrmer_apellido(columna[++col]);
//                        detalle.setSegundo_apellido(columna[++col]);
//                        detalle.setEdad(columna[++col]);
//                        detalle.setDireccion(columna[++col]);
//                        detalle.setTelefono(columna[++col]);
//                        detalle.setFecha_nacimiento(columna[++col]);
//                        detallesArchivos.add(detalle);
//                        System.out.println(detalle.toString());
                        
                        ARest.getCargarArchivoParametros(columna[col], columna[++col], columna[++col]
                                , columna[++col], columna[++col], columna[++col], columna[++col], columna[++col]
                                ,columna[++col]);
                    }
                    //enviar datos al ws
                    
//                    respText = "";
//                    resJson = new JSONObject(respText);
//                    System.out.println("Json transf " + resJson);
//                    codRespuesta = resJson.get("codRespuesta").toString();
//                    menRespuesta = resJson.get("menRespuesta").toString();
                    codRespuesta = "00";
                    menRespuesta = "Transaccion Ok";
                } catch (Exception e) {
                    System.out.println(e.toString());
                    codRespuesta = "099";
                    menRespuesta = "Error en servlet";
                } finally {
                    writer.object();
//                    writer.key("respParametros").value(respParametros);
                    writer.key("codRespuesta").value(codRespuesta);
                    writer.key("menRespuesta").value(menRespuesta);
                    writer.endObject();
                }
////                out.println(stringWriter.getBuffer());
                out.print(stringWriter.toString());
                break;
            default:
                throw new AssertionError();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
