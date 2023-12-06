import { productManager } from "./manager.js";

export const searchItem = () => { 
    const searchBtn = document.getElementById("search-button");
    const searchInput = document.getElementById("searchInput");
    const searchResult = document.getElementById("searchResult");

    //Función de búsqueda de producto
    const searchForItem = () => {
       
        
      const searchValue = searchInput.value.toUpperCase();
      const products = productManager.listProducts();
   
      const searchItem = products.find((item) => item.nombre.toUpperCase() === searchValue);
    
      if (searchItem) {
        searchResult.innerHTML = `Datos del Producto: <p>Producto: ${searchItem.nombre}</p>
                                  <p>Cantidad: ${searchItem.cantidad} uds</p>
                                  <p>Precio: ${searchItem.precio}€</p>`;
      } else {
        searchResult.textContent = "Producto no encontrado";
      }
      //Muestra el contenedor con los datos del producto durante 7seg
      searchResult.classList.add("visible"); 
      searchResult.scrollIntoView({behavior: "smooth"});
      setTimeout(() => {
        searchResult.classList.remove("visible");
      }, 7000);
    };
  
    searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
 
    // Si el navegador no soporta viewTransition ejecuta la función de búsqueda
     if(!document.startViewTransition){
        searchForItem();
        return;
      }  
      //Si el navegador soporta viewTransition ejecuta una transición
      document.startViewTransition(() => searchForItem()); 
      // Temporizador para borrar los datos del input
      // Al tardar un tiempo en hacer la transición se eliminaban antes de 
      // que se ejecutara, dando lugar a no encontrar el producto
      setTimeout(() => {
        searchInput.value = "";
      }, 3000);
    });
  
    searchInput.addEventListener("keyup", (e) => {
        e.preventDefault();
      if (e.key === "Enter") {
        
        if(!document.startViewTransition){
          searchForItem();
          return;
        }  
        document.startViewTransition(() => searchForItem()); 
        setTimeout(() => {
          searchInput.value = "";
        }, 3000);
      }
    });
  }
  