//Capturas de elementos del DOM

const productSection = document.querySelector('.escaparate');



// Pintar productos en el Screen.
function printOneArticle(articulo, dom) {
    // Creación de los elementos
    const article = document.createElement('article');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const btn = document.createElement('button');

    // Meter contenido y gestionar atributos
    img.src = articulo.imagen;
    img.alt = articulo.nombre;
    h3.textContent = articulo.nombre;
    ul.innerHTML = `<li>${articulo.descripcion}</li>
                    <li>Precio: ${articulo.precio}</li>`;
    btn.textContent = "Agregar al carrito";

    // Meter los elementos dentro de sus contenedores
    figure.appendChild(img);
    article.append(figure, h3, ul, btn);
    dom.appendChild(article);
}


function printAllStock(stockList, dom) {
    stockList.forEach(articulo => printOneArticle(articulo, dom))
    
    
}

// Termina seccion de pintar productos

console.log(printAllStock(productList, productSection));

//desplegable carrito
const botonCarrito = document.querySelector('#cart')

const desplegarCarro = () => {
    const carro = document.querySelector('.carro');
    
    /* carro.style.transform = 'translateX(-100%)' */
    /* carroBtn.setAttribute('style', 'transform: translateX(-800%)') */
    if(carro.style.transform === "") {
        carro.setAttribute('style', 'transform: translateX(-100%)')
    } else {
        carro.style.transform = ""
    }
}

botonCarrito.addEventListener('click', desplegarCarro)

