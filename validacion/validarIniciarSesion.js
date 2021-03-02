export default function validarIniciarSesion(valores) {

    let errores = {};

    //Validar el email de usuario
    if (!valores.email) {
        errores.email = 'El email es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
        errores.email = 'Email no válido'
    }
    //Validar el password
    if (!valores.password) {
        errores.password = 'El password es obligatorio';
    } else if (valores.password.length < 6) {
        errores.password = "El password debe ser al menos de 6 caractéres"
    }
    return errores;
}