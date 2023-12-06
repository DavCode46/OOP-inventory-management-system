export class ProductManager {
    #products;

    constructor() {
        this.#products = [];
    }

    // Método para obtener la lista de productos
    listProducts() {
        return this.#products;
    }

    // Método para agregar el producto
    addProduct(product) {
        this.#products.push(product);
    }

    // Método para actualizar un producto por su ID
    updateProductById(id, updateProduct) {
        const index = this.#products.findIndex(product => product.id === id);

        // Si no existe error (es coincidente el index)
        if (index !== -1) {
            this.#products[index] = updateProduct;
        }

    }

    // Método para eliminar un producto
    deleteProductById(id) {
        const index = this.#products.findIndex(product => product.id === id);

        if (index !== -1) {
            this.#products.splice(index, 1);
        }
    }

    // Método para mostrar todos los productos dentro del Array
    showProducts() {
        for (const product of this.#products) {
            console.log(`ID: ${product.id}, Nombre: ${product.nombre}, Cantidad: ${product.cantidad}, Precio: ${product.precio}`);
        }
    }

    get products(){
        return this.#products;
    }

    set products(value){
        this.#products = value;
    }

}