/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ug.servlet;

import com.google.gson.Gson;
import com.google.gson.JsonParser;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Iterator;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.JSONObject;
import org.json.JSONWriter;
import ug.bean.UsuarioSesion;
import ug.cliente.rest.ApiUniversidad;

/**
 *
 * @author KevinGalarza
 */
@WebServlet(name = "SrvLogin", urlPatterns = {"/SrvLogin"})
public class SrvLogin extends HttpServlet {

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
        UsuarioSesion us = new UsuarioSesion();
        us.setPassword(request.getParameter("pass"));
        us.setUsuario(request.getParameter("usuario"));
        mySession.setAttribute("usuarioSesion", us);

//        String jsonResp = 
        switch (opcion) {
            case "ConsultaUsuario":
                try {
                    String usuario = request.getParameter("usuario");
                    String pass = request.getParameter("pass");

                    respText = ARest.getUsuario(usuario, pass);
                    resJson = new JSONObject(respText);
                    System.out.println("Json transf "+resJson);
                    if (resJson.get("codRespuesta").equals("000") || resJson.get("codRespuesta").equals("002")) {
                        respParametros = resJson.get("listUsuarios").toString();
                    }
                    codRespuesta = resJson.get("codRespuesta").toString();
                    menRespuesta = resJson.get("menRespuesta").toString();
                } catch (Exception e) {
                    System.out.println(e.toString());
                    codRespuesta = "099";
                    menRespuesta = "Error en servlet al consultar usuario";
                } finally {
                    writer.object();
                    writer.key("respParametros").value(respParametros);
                    writer.key("codRespuesta").value(codRespuesta);
                    writer.key("menRespuesta").value(menRespuesta);
                    writer.endObject();
                }
//                out.println(stringWriter.getBuffer());
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
