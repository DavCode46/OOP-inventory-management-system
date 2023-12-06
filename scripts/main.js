/**
 *  **Autor: David Menéndez Blanco
 **Profesión: Estudiante de 2º DAW
 **GitHub: https://github.com/DavidMenendezBlanco/inventory-management-system.git
 */

import { darkMode } from "./darkMode.js";
import { manager } from './manager.js';
import { calculateTotalInventory } from "./total.js";
import { searchItem } from './searchProduct.js';


document.addEventListener("DOMContentLoaded", () => {
  darkMode();
  searchItem();
  manager();
  calculateTotalInventory();
});




