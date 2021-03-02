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

    public void putJson(Object requestEntity) throws ClientErrorException {
        webTarget.request(javax.ws.rs.core.MediaType.APPLICATION_JSON).put(javax.ws.rs.client.Entity.entity(requestEntity, javax.ws.rs.core.MediaType.APPLICATION_JSON));
    }

    public String getUsuarios() throws ClientErrorException {
        WebTarget resource = webTarget;
        resource = resource.path("getUsuarios");
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
