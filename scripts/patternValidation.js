
    // Formato DNI: 00000000-A --> Puntos seraparadores de miles son opcionales
    let dniPattern = /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}-[A-Z]$/;
    // Formato email: correo@correo.es
    let emailPattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    // Formato Password: Debe contener -->
    // Al menos 1 minúscula, 1 mayúscula, 1 número, 
    // 1 caracter especial y debe tener longitud > 8 y < 15
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
   
   // Función para validar dni, email y password
    export const patternValidation = (dni, email, password, callback) => {
        let errorMessages = [];
        
        if (!dniPattern.test(dni)) {
            errorMessages.push("DNI no válido. Formato requerido: 00000000-A");
        }
        if (!emailPattern.test(email)) {
            errorMessages.push("Email no válido. Formato requerido: correo@correo.es");
        }
        if (!passwordPattern.test(password)) {
            errorMessages.push("Contraseña débil. Debe incluir: <br>" +
                "- Al menos 1 letra minúscula<br>" +
                "- Al menos 1 letra mayúscula<br>" +
                "- Al menos un número<br>" +
                "- Al menos 1 caracter especial<br>" +
                "- Una longitud mayor que 8 y menor que 15");
        }

        // Comprobar si se encuentran errores
        if (errorMessages.length === 0) {
            callback(null); // Sin errores
        } else {
            callback(errorMessages); // Devuelve errores
        }
    }
