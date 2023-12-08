import { Product } from "./product.js";
import { ProductManager } from "./productManager.js";

let editing = false; // Controla cuando estamos editando un producto
let editedProductId = null; // ID del producto editado
const productManager = new ProductManager();

// Función que realiza todas las operaciones de gestión de productos
export const manager = () => {
    
    const productForm = document.getElementById("product-form-events");
    const productNameInput = document.getElementById("product-name");
    const productQuantityInput = document.getElementById("product-quantity");
    const productPriceInput = document.getElementById("product-price");
    const addBtn = document.getElementById('addBtn');
    const tableBody = document.getElementById("tbody");

    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const productName = productNameInput.value;
        const productQuantity = parseInt(productQuantityInput.value);
        const productPrice = parseFloat(productPriceInput.value);

        // Cuando estamos editando un producto
        if (editing && editedProductId) {
            // Actualizar el producto existente
            const editedProduct = productManager.listProducts().find((product) => product.id === editedProductId);

            // Si existe el producto y los datos son válidos
            if (editedProduct &&
                productName && 
                !isNaN(productQuantity) && 
                !isNaN(productPrice) &&
                productQuantity > 0 &&
                productPrice > 0) {
                editedProduct.name = productName;
                editedProduct.quantity = productQuantity;
                editedProduct.price = productPrice;

                // Actualizar el producto en el gestor
                productManager.updateProductById(editedProductId, editedProduct);

                // Restaurar el formulario y el estado
                productForm.reset();
                editing = false;
                editedProductId = null;
                addBtn.textContent = 'Agregar Producto';
                
            }
        } else { // Si no estamos editando un producto es que lo estamos agregando
                // Así con el mismo botón manejamos las dos opciones
            if(productName && // Si los datos son válidos
                !isNaN(productQuantity) && 
                !isNaN(productPrice) &&
                productQuantity > 0 &&
                productPrice > 0){
                     // Agregar un nuevo producto
                    const newProduct = new Product(Date.now(), productName, productQuantity, productPrice);
                    productManager.addProduct(newProduct);
      
                    // Restaurar el formulario
                    productForm.reset();
                }          
        }
        listProducts();
    });

    // Función que dibuja la tabla en el template
    function listProducts() {
        tableBody.innerHTML = "";
        
        const products = productManager.listProducts(); 
       
        products.forEach((product) => { // Si el producto no es un usuario lo muestra en la tabla
            if(localStorage.key(product.id) !== 'users'){
                const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>${product.price}</td>
                <td>
                    <button class="edit-button">Editar</button>
                    <button class="delete-button">Eliminar</button>
                </td>
            `;

            tableBody.appendChild(row);

            const editButton = row.querySelector(".edit-button");
            const deleteButton = row.querySelector('.delete-button');

            editButton.addEventListener("click", () => {
                const form = document.getElementById("product-form-events");
                productNameInput.value = product.name;
                productQuantityInput.value = product.quantity;
                productPriceInput.value = product.price;

                editing = true; // Estamos editando un producto
                editedProductId = product.id; // ID del producto editado
                addBtn.textContent = 'Actualizar Producto';
                form.scrollIntoView({behavior: 'smooth'});
            });

            deleteButton.addEventListener('click', () => {
                productManager.deleteProductById(product.id); // Eliminar el producto del gestor
                listProducts();
            });
            }           
        });       
    }

    listProducts();
}

export { productManager};
