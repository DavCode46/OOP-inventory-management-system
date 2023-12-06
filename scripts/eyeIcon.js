//Función para mostrar y ocultar la contraseña al pulsar el icono
export const hidePassword = () => {
 
  const eyeIcon = document.querySelector(".eye");
  
  eyeIcon.addEventListener("click", (e) => {
    const loginPassword = document.querySelector(".password")
    
    if (loginPassword.type === "password") {
      loginPassword.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      loginPassword.type = "password";    
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  });
};
