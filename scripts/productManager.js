import { Product } from './product.js';


// Clase para gestionar los productos
export class ProductManager {
    #products;

    constructor() {
        this.#products = [];
        this.loadFromLocalStorage(); // Cargar los productos del localStorage
    }
    searchProduct(searchValue){
        const products = this.#products;
        const upperCaseValue = searchValue.toUpperCase();
        const searchItem = products.find((item) => item.name.toUpperCase() === upperCaseValue);
        return searchItem;
    }

  
    // Método para obtener la lista de productos
    listProducts() {
        return this.#products;
    }

    // Método para agregar el producto
    addProduct(product) {
        this.#products.push(product);
        this.saveToLocalStorage(); // Guardar el producto en el localStorage
    }
    

    // Método para actualizar un producto por su ID
    updateProductById(id, updateProduct) {
        const index = this.#products.findIndex(product => product.id === id);

        // Si no existe error (es coincidente el index)
        if (index !== -1) {
            this.#products[index] = updateProduct;
            localStorage.removeItem(id); // Eliminar el producto del localStorage
            this.saveToLocalStorage(); // Guardar el producto actualizado en el localStorage
        }

    }

    // Método para eliminar un producto
    deleteProductById(id) {
        const index = this.#products.findIndex(product => product.id === id);

        if (index !== -1) {
            this.#products.splice(index, 1);
            localStorage.removeItem(id); // Eliminar el producto del localStorage
        }
    }

    // Método para buscar un producto por su nombre
    searchProduct(searchValue){
        const products = this.#products;
        const upperCaseValue = searchValue.toUpperCase();
        const searchItem = products.find((item) => item.name.toUpperCase() === upperCaseValue);
        return searchItem;
    }

    // Método para guardar un producto en el localStorage por su ID
    saveToLocalStorage() {
        this.#products.forEach(product => {
            localStorage.setItem(product.id, JSON.stringify(product.toJSON()));
        });
    }
    
    // Método para cargar los productos del localStorage
    loadFromLocalStorage() {
        const products = Object.keys(localStorage)
            .filter(key => key !== 'users') // Excluir elementos relacionados con usuarios
            .map(key => {
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