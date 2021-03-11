/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ug.utils;

/**
 *
 * @author KevinGalarza
 */
public class detalleArchivos {

    private String id_tabla;
    private String primer_nombre;
    private String segundo_nombre;
    private String prmer_apellido;
    private String segundo_apellido;
    private String edad;
    private String direccion;
    private String telefono;
    private String fecha_nacimiento;

    public String getId_tabla() {
        return id_tabla;
    }

    public void setId_tabla(String id_tabla) {
        this.id_tabla = id_tabla;
    }

    public String getPrimer_nombre() {
        return primer_nombre;
    }

    public void setPrimer_nombre(String primer_nombre) {
        this.primer_nombre = primer_nombre;
    }

    public String getSegundo_nombre() {
        return segundo_nombre;
    }

    public void setSegundo_nombre(String segundo_nombre) {
        this.segundo_nombre = segundo_nombre;
    }

    public String getPrmer_apellido() {
        return prmer_apellido;
    }

    public void setPrmer_apellido(String prmer_apellido) {
        this.prmer_apellido = prmer_apellido;
    }

    public String getSegundo_apellido() {
        return segundo_apellido;
    }

    public void setSegundo_apellido(String segundo_apellido) {
        this.segundo_apellido = segundo_apellido;
    }

    public String getEdad() {
        return edad;
    }

    public void setEdad(String edad) {
        this.edad = edad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_nacimiento(String fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    @Override
    public String toString() {
        return "detalleArchivos{" + "id_tabla=" + id_tabla + ", primer_nombre=" + primer_nombre + ", segundo_nombre=" + segundo_nombre + ", prmer_apellido=" + prmer_apellido + ", segundo_apellido=" + segundo_apellido + ", edad=" + edad + ", direccion=" + direccion + ", telefono=" + telefono + ", fecha_nacimiento=" + fecha_nacimiento + '}';
    }
    
    
}
