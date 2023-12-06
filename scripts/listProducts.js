/* import { productManager } from './manager.js';

export function listProducts() {
    const tableBody = document.getElementById('tbody');
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

listProducts(); */