import { productManager } from './manager.js';

// Función para calcular el inventario total
export const calculateTotalInventory = () => {
    const totalBtn = document.getElementById("totalBtn");
    const totalInventory = () => {
        const totalInventory = document.getElementById("total-inventory");

        let totalQuantity = 0;
        let totalPrice = 0;

        const products = productManager.listProducts();
        products.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.quantity * item.price;
        });

        totalInventory.innerHTML = `<table>
                                        <tr>
                                            <th>Cantidad Total</th>
                                            <th>Precio total</th>
                                        </tr>
                                        <tr>
                                            <td>${totalQuantity} uds</td>
                                            <td>${totalPrice.toFixed(2)} €</td>
                                        </tr>
                                    </table>`;
    
        totalInventory.classList.add("visible"); 

        // Hace scroll suave hasta donde se encuentra totalInventory
        totalInventory.scrollIntoView({behavior: "smooth"});
        setTimeout(() => {
            totalInventory.classList.remove("visible");
        }, 7000);
    }
     
    totalBtn.addEventListener("click", (e) => {
        e.preventDefault();
       //Si el navegador no soporta viewTransition ejecuta la función
        if(!document.startViewTransition){
            totalInventory();
            return;
          }  
          //Si el navegador soporta viewTransition ejecuta la función con una transición
        document.startViewTransition(() => totalInventory());
    });
};