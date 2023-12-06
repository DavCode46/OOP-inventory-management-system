import { Product } from "./product.js";
import { ProductManager } from "./productManager.js";


let editing = false;
let editedProductId = null; // ID del producto editado
const productManager = new ProductManager();


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

        if (editing && editedProductId) {
            // Actualizar el producto existente
            const editedProduct = productManager.listProducts().find((product) => product.id === editedProductId);

            if (editedProduct &&
                productName && 
                !isNaN(productQuantity) && 
                !isNaN(productPrice) &&
                productQuantity > 0 &&
                productPrice > 0) {
                editedProduct.nombre = productName;
                editedProduct.cantidad = productQuantity;
                editedProduct.precio = productPrice;

                productManager.updateProductById(editedProductId, editedProduct);

                // Restaurar el formulario y el estado
                productForm.reset();
                editing = false;
                editedProductId = null;
                addBtn.textContent = 'Agregar Producto';
                
            }
        } else {
            if(productName && 
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

    function listProducts() {
        tableBody.innerHTML = "";
        
        const products = productManager.listProducts();

        products.forEach((product) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.nombre}</td>
                <td>${product.cantidad}</td>
                <td>${product.precio}</td>
                <td>
                    <button class="edit-button">Editar</button>
                    <button class="delete-button">Eliminar</button>
                </td>
            `;

            tableBody.appendChild(row);

            const editButton = row.querySelector(".edit-button");
            const deleteButton = row.querySelector('.delete-button');

            editButton.addEventListener("click", () => {
                productNameInput.value = product.nombre;
                productQuantityInput.value = product.cantidad;
                productPriceInput.value = product.precio;

                editing = true;
                editedProductId = product.id;
                addBtn.textContent = 'Actualizar Producto';
            });

            deleteButton.addEventListener('click', () => {
                productManager.deleteProductById(product.id);
                listProducts();
            });
        });
        
        
    }

    listProducts();
}

export { productManager};
