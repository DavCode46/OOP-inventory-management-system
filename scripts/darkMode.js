
// Función para cambiar entre modo oscuro y claro
export const darkMode = () => {
    const switchBtn = document.getElementById("switch");

    switchBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        switchBtn.classList.toggle("active");
    })
}
