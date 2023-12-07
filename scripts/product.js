
// Clase de cada producto
export class Product {
    #id;
    #name;
    #quantity;
    #price;

    constructor(id, name, quantity, price) {
        this.#id = id;
        this.#name = name;
        this.#quantity = quantity;
        this.#price = price;
    }

     // Método para convertir el objeto a JSON y poder almacenarlo en localStorage
     toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            quantity: this.#quantity,
            price: this.#price
        };
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#quantity = value
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value
    }

    showProduct(){
        console.log(`ID: ${this.#id}, Nombre: ${this.#name}, Cantidad: ${this.#quantity}, Precio: ${this.#price}`);
    }
}