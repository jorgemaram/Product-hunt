export default function validarCrearProducto(valores) {

    let errores = {};

    //Validar el nombre de usuario
    if (!valores.nombre) {
        errores.nombre = 'El nombre es obligatorio';
    }
    //Validar la empresa
    if (!valores.empresa) {
        errores.empresa = 'El nombre de la empresa es obligatorio';
    }
    //Validar la url
    if (!valores.url) {
        errores.url = 'La URL del producto es obligatoria';
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "URL mal formateada o no válida"
    }
    //Validar descripción
    if (!valores.descripcion) {
        errores.descripcion = 'Agrega una descripción a tu producto';
    }
    return errores;
}