/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ug.cliente.rest;

import javax.ws.rs.ClientErrorException;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.WebTarget;

/**
 * Jersey REST client generated for REST resource:UniversidadResource
 * [universidad]<br>
 * USAGE:
 * <pre>
 *        ApiUniversidad client = new ApiUniversidad();
 *        Object response = client.XXX(...);
 *        // do whatever with response
 *        client.close();
 * </pre>
 *
 * @author KevinGalarza
 */
public class ApiUniversidad {

    private WebTarget webTarget;
    private Client client;
    private static final String BASE_URI = "http://localhost:8080/apiuniversidad/webresources";

    public ApiUniversidad() {
        client = javax.ws.rs.client.ClientBuilder.newClient();
        webTarget = client.target(BASE_URI).path("universidad");
    }

    public String updatePass(String usuario, String contrasenia) throws ClientErrorException {
        WebTarget resource = webTarget;
        if (usuario != null) {
            resource = resource.queryParam("usuario", usuario);
        }
        if (contrasenia != null) {
            resource = resource.queryParam("contrasenia", contrasenia);
        }
        resource = resource.path("updatePass");
        return resource.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).get(String.class);
    }

    public void putJson(Object requestEntity) throws ClientErrorException {
        webTarget.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).put(javax.ws.rs.client.Entity.entity(requestEntity, javax.ws.rs.core.MediaType.APPLICATION_JSON));
    }

    public String getCargarArchivoParametros
        (String id, String primerNombre, String segundoNombre,  String primerApellido, 
                 String segundoApellido, String edad, String direccion, String telefono,
                 String fecha_nacimiento) throws ClientErrorException {
        WebTarget resource = webTarget;
        if (segundoNombre != null) {
            resource = resource.queryParam("segundoNombre", segundoNombre);
        }
        if (primerNombre != null) {
            resource = resource.queryParam("primerNombre", primerNombre);
        }
        if (primerApellido != null) {
            resource = resource.queryParam("primerApellido", primerApellido);
        }
        if (direccion != null) {
            resource = resource.queryParam("direccion", direccion);
        }
        if (fecha_nacimiento != null) {
            resource = resource.queryParam("fecha_nacimiento", fecha_nacimiento);
        }
        if (segundoApellido != null) {
            resource = resource.queryParam("segundoApellido", segundoApellido);
        }
        if (id != null) {
            resource = resource.queryParam("id", id);
        }
        if (telefono != null) {
            resource = resource.queryParam("telefono", telefono);
        }
        if (edad != null) {
            resource = resource.queryParam("edad", edad);
        }
        resource = resource.path("getCargarArchivoParametros");
        System.out.println("Se eenvia "+resource);
        return resource.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).get(String.class);
    }

    public String getCargarArchivo(String listContenido) throws ClientErrorException {
        WebTarget resource = webTarget;
        if (listContenido != null) {
            resource = resource.queryParam("listContenido", listContenido);
        }
        resource = resource.path("getCargarArchivo");
        return resource.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).get(String.class);
    }

    public String postUsuario(String apellidos, String usuario, String contrasenia, String nombres) throws ClientErrorException {
        WebTarget resource = webTarget;
        if (apellidos != null) {
            resource = resource.queryParam("apellidos", apellidos);
        }
        if (usuario != null) {
            resource = resource.queryParam("usuario", usuario);
        }
        if (contrasenia != null) {
            resource = resource.queryParam("contrasenia", contrasenia);
        }
        if (nombres != null) {
            resource = resource.queryParam("nombres", nombres);
        }
        resource = resource.path("postUsuario");
        return resource.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).get(String.class);
    }

    public String getUsuarios() throws ClientErrorException {
        WebTarget resource = webTarget;
        resource = resource.path("getUsuarios");
        return resource.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).get(String.class);
    }

    public String getUsuarioRegistrado(String usuario) throws ClientErrorException {
        WebTarget resource = webTarget;
        if (usuario != null) {
            resource = resource.queryParam("usuario", usuario);
        }
        resource = resource.path("getUsuarioRegistrado");
        return resource.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).get(String.class);
    }

    public String getUsuario(String usuario, String contrasenia) throws ClientErrorException {
        WebTarget resource = webTarget;
        if (usuario != null) {
            resource = resource.queryParam("usuario", usuario);
        }
        if (contrasenia != null) {
            resource = resource.queryParam("contrasenia", contrasenia);
        }
        resource = resource.path("getUsuario");
        return resource.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).get(String.class);
    }

    public void close() {
        client.close();
    }
    
}
