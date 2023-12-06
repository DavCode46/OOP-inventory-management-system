import { Product } from "./product.js";
import { ProductManager } from "./productManager.js";

export const manager = () => {
    // Instanciar el administrador de productos
 const productManager = new ProductManager();

 // Evento del formularuo para agregar un nuevo producto

 document.getElementById("product-form-events").addEventListener("submit", function (event) {
     event.preventDefault();

     // Obtenemos los valores del formulario
     const productName = document.getElementById("product-name").value;
     const productQuantity = parseInt(document.getElementById("product-quantity").value);
     const productPrice = parseFloat(document.getElementById("product-price").value);

     // Crear una instancia de Product con los valores del formulario

     const newProduct = new Product(Date.now(),productName,productQuantity,productPrice);

     console.log(newProduct);

     // Agregar el nuevo producto al administrador de productos
     productManager.addProduct(newProduct);

     // Limpiar el formulario
     this.reset();

     // Actualizamos la tabla de inventario

     listProducts();

   });

   

function listProducts() {
 const tableBody = document.getElementById("tbody");
 const addBtn = document.getElementById('addBtn');
 tableBody.innerHTML = "";

 // Obtener la lista de productos del administrador
 const products = productManager.listProducts();

 // Iterar sobre la lista de productos y agregar filas a la tabla
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

   row.querySelector(".edit-button").addEventListener("click", () => {

     const index = products.findIndex((item) => item.id === product.id);

     if (index !== -1) {

       const productToEdit = products[index];
       
       document.getElementById('product-name').value = productToEdit.nombre;
       document.getElementById('product-quantity').value = productToEdit.cantidad;
       document.getElementById('product-price').value = productToEdit.precio;

       addBtn.classList.toggle('editing');
       addBtn.textContent = addBtn.classList.contains('editing') ? 'Actualizar Producto' : 'Agregar Producto';
    
        productToEdit.nombre = document.getElementById("product-name").value;
        productToEdit.cantidad = parseInt(document.getElementById("product-quantity").value);
        productToEdit.precio = parseFloat(document.getElementById("product-price").value);
    
        console.log(productToEdit.nombre)
        productManager.updateProductById(productToEdit.id, productToEdit); 
    
       listProducts();

       console.log("Editando producto", productToEdit);
     }
   });

   row.querySelector('.delete-button').addEventListener('click', () => {
     const index = products.findIndex((item) => item.id === product.id);
     if (index !== -1) {
         const productToRemove = products[index];
         productManager.deleteProductById(productToRemove.id);
         tableBody.removeChild(row);
     }
   });
 });
}

listProducts();
  
}
 
 