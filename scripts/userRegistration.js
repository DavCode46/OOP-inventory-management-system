import { patternValidation } from "./patternValidation.js";
import { hidePassword } from "./eyeIcon.js"; 
import { darkMode } from "./darkMode.js";

document.addEventListener("DOMContentLoaded", () => {

  // Función que oculta o muestra la contraseña
  hidePassword(); 
  
  // Función para registrar nuevo usuario
  const register = () => {
    
    const registrationForm = document.getElementById("registration-form");
    if (registrationForm) {
      registrationForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
    
        const username = document.getElementById("username").value;
        const dni = document.getElementById("dni").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");
    
        // Comprobar si ya hay usuarios registrados si no los hay crea un array vacío
        const users = JSON.parse(localStorage.getItem("users")) || [];
    
        patternValidation(dni, email, password, (error) => {
            if (!error) {
                // Si no hay errores, procede con el registro
                users.push({ username, dni, email, password });
                localStorage.setItem("users", JSON.stringify(users));
                // Limpiar el formulario
                registrationForm.reset();
                message.textContent = "Registro realizado con éxito";
                message.style.color = "green";
                // 3seg después de registrarnos nos redirige al login
                setTimeout(() => {
                  window.location.href = "../index.html";
                }, 1000);
               
            } else {
                // Si hay errores, muestra los mensajes de error
                // join se utiliza para unir los mensajes de error
                // y separarlos mediante <br>
                message.innerHTML = error.join("<br>");
                message.style.color = "rgb(255,69,58)";
            }
        });
    });
    }  
  };

  register();
 
 // Función para iniciar sesión
  const login = () => {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const loginUsername = document.getElementById("login-username").value;
        const loginPassword = document.getElementById("login-password").value;
       
        // Comprobar si hay usuarios registrados en el localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Buscar al usuario en la lista
        const user = users.find((u) => u.username === loginUsername && u.password === loginPassword);

        if (user) {
          alert("Inicio de sesión realizado con éxito");
          window.location.href = "/templates/inventorySystem.html";
          loginForm.reset();
        } else {
          alert("Error de inicio de sesión. Por favor, verifica tus credenciales.");
        }
      });
    }
  };

  login();
  darkMode();
});
