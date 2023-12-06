import { Product } from './product.js';
export class ProductManager {
    #products;

    constructor() {
        this.#products = [];
        this.loadFromLocalStorage();
    }

    // Método para obtener la lista de productos
    listProducts() {
        return this.#products;
    }

    // Método para agregar el producto
    addProduct(product) {
        this.#products.push(product);
        this.saveToLocalStorage();
    }
    

    // Método para actualizar un producto por su ID
    updateProductById(id, updateProduct) {
        const index = this.#products.findIndex(product => product.id === id);

        // Si no existe error (es coincidente el index)
        if (index !== -1) {
            this.#products[index] = updateProduct;
            localStorage.removeItem(id);
            this.saveToLocalStorage();
        }

    }

    // Método para eliminar un producto
    deleteProductById(id) {
        const index = this.#products.findIndex(product => product.id === id);

        if (index !== -1) {
            this.#products.splice(index, 1);
            localStorage.removeItem(id);
        }
    }

    saveToLocalStorage() {
        this.#products.forEach(product => {
            localStorage.setItem(product.id, JSON.stringify(product.toJSON()));
        });
    }
    
    loadFromLocalStorage() {
        const products = Object.keys(localStorage).map(key => {
            const data = JSON.parse(localStorage.getItem(key));
            return new Product(data.id, data.name, data.quantity, data.price);
        });
    
        this.#products = products;
    }
    
    
    
    get products(){
        return this.#products;
    }

    set products(value){
        this.#products = value;
    }

}