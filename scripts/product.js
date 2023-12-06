export class Product {
    #id;
    #nombre;
    #cantidad;
    #precio;

    constructor(id, nombre, cantidad, precio) {
        this.#id = id;
        this.#nombre = nombre;
        this.#cantidad = cantidad;
        this.#precio = precio;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        this.#nombre = value
    }

    get cantidad() {
        return this.#cantidad;
    }

    set cantidad(value) {
        this.#cantidad = value
    }

    get precio() {
        return this.#precio;
    }

    set precio(value) {
        this.#precio = value
    }

    showProduct(){
        console.log(`ID: ${this.#id}, Nombre: ${this.#nombre}, Cantidad: ${this.#cantidad}, Precio: ${this.#precio}`);
    }
}