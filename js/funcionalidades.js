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

    btn.dataset.id = articulo.id
    btn.id = 'btnAdd' + btn.dataset.id

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
    if (carro.style.transform === "") {
        carro.setAttribute('style', 'transform: translateX(-100%)')
    } else {
        carro.style.transform = ""
    }
}

botonCarrito.addEventListener('click', desplegarCarro)

//agregar al carrito

const btnAdd = document.querySelectorAll('article button')

const addX1 = (span, stock, btn, btn1) => {
    let contador = Number(span.textContent.replace(' x', ''))
    if(stock > contador) {
        contador += 1;
        span.textContent = ' x' + contador;
    } else {
        btn.disabled = true;
        btn1.disabled = true;
        btn.textContent = 'Sin Stock'
        
    }
}

const deleteInCart = (event) => {
    /* liBorrar = event.target.parentNode;
    liBorrar.parentNode.removeChild(liBorrar) */
    
    let liBorrar = event.target.parentNode;

    while(liBorrar && liBorrar.tagName !== 'LI') {
        liBorrar = liBorrar.parentNode;
    }
    if(liBorrar) {
        const btnAdd = document.querySelector(`#btnAdd${liBorrar.dataset.id}`)
        btnAdd.disabled = false;
        btnAdd.textContent = 'Agregar al carrito';

        liBorrar.parentNode.removeChild(liBorrar)
    }
}

const printInCart = (articulo, dom) => {
    const li = document.createElement('li');
    li.dataset.id = articulo.id;
    const p = document.createElement('p')
    const span = document.createElement('span');
    const btn1 = document.createElement('button');
    btn1.id = 'add' + articulo.id
    const btn2 = document.createElement('button');
    btn2.id = 'delete'
    const btn2i = document.createElement('i');
    const btn = document.querySelector(`#btnAdd${articulo.id}`)

    p.textContent = articulo.nombre;
    btn1.textContent = '+';
    span.textContent = ' x' + 1;
    btn1.addEventListener('click', () => addX1(span, articulo.stock, btn, btn1))
    btn2.addEventListener('click', deleteInCart)
    btn2i.className = 'fa-solid fa-trash-can';

    btn2.appendChild(btn2i)
    p.appendChild(span)
    li.append(p, btn1, btn2)
    dom.appendChild(li)

}

const destacarCart = (icono) => {
    icono.classList.add('active')

    setTimeout(() => {
        icono.classList.remove('active')
    }, 500)
}



const addToCart = (event) => {
    const carro = document.querySelector('.items');
    let id = event.target.dataset.id;
    const articulo = productList.find(product => product.id === Number(id))
    let añadido = document.querySelector(`.items li[data-id="${articulo.id}"]`);
    const icono = document.querySelector('#cart')

    if (añadido) {
        const span = añadido.querySelector('span');
        const btn = document.querySelector(`#btnAdd${articulo.id}`)
        const btn1 = añadido.querySelector(`#add${articulo.id}`)
        addX1(span, articulo.stock, btn, btn1)
        
    } else {
        printInCart(articulo, carro);
        destacarCart(icono)

    }



}

btnAdd.forEach(button => {
    button.addEventListener('click', addToCart);
})



/* const verTotal = document.querySelector('#total')

let calcularTotal = productList.reduce((acumulador, articulo) => acumulador + articulo.precio, 0)
console.log(calcularTotal) */