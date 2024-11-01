const productSection = document.querySelector('.escaparate');

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
    mostrarTotal();
}

function printOneArticle(articulo, dom) {

    const article = document.createElement('article');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const btn = document.createElement('button');

    img.src = articulo.imagen;
    img.alt = articulo.nombre;
    h3.textContent = articulo.nombre;
    ul.innerHTML = `<li>${articulo.descripcion}</li>
                    <li>Precio: ${articulo.precio}</li>`;
    btn.textContent = "Agregar al carrito";

    btn.dataset.id = articulo.id
    btn.id = 'btnAdd' + btn.dataset.id

    figure.appendChild(img);
    article.append(figure, h3, ul, btn);
    dom.appendChild(article);

    btn.addEventListener('click', addToCart)
}


function printAllStock(stockList, dom) {
    stockList.forEach(articulo => printOneArticle(articulo, dom))


}

const prevButton = document.querySelector('#previa');
const nextButton = document.querySelector('#siguiente');
const pagInfo = document.querySelector('#pag-info');

const articulosPag = 6;
let pagActual = 1;


const paginaEscaparate = (pag, lista) => {
    const inicio = (pag - 1) * articulosPag;
    const final = inicio + articulosPag;
    const mostrados = lista.slice(inicio, final)
    productSection.innerHTML = '';
    printAllStock(mostrados, productSection)
    pagInfo.textContent = `Página ${pagActual} de ${Math.ceil(lista.length / articulosPag)}`;
}

const avanzar = () => {
    const pagMax = Math.ceil(productList.length / articulosPag)
    if(pagActual < pagMax) {
        pagActual++
        paginaEscaparate(pagActual, productList)
    }
}

const retroceder = () => {
    if(pagActual > 1) {
        pagActual--
        paginaEscaparate(pagActual, productList)
    }
}

prevButton.addEventListener('click', retroceder)
nextButton.addEventListener('click', avanzar)

paginaEscaparate(pagActual, productList)

const buscador = document.querySelector('#buscador')

const pintarBusqueda = (event) => {
    const busqueda = event.target.value
    const resultadoBusqueda = productList.filter(articulo => articulo.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    productSection.innerHTML = '';
    printAllStock(resultadoBusqueda, productSection)
}

buscador.addEventListener('input', pintarBusqueda)

const botonCarrito = document.querySelector('#cart')

const desplegarCarro = () => {
    const carro = document.querySelector('.carro');
    if (carro.style.transform === "") {
        carro.setAttribute('style', 'transform: translateX(-100%)')
    } else {
        carro.style.transform = ""
    }
}

botonCarrito.addEventListener('click', desplegarCarro)

const verTotal = document.querySelector('#total')

const calcularTotal = (lista) => {
    const articulosCarrito = document.querySelectorAll('.items li')
    let total = 0;

    articulosCarrito.forEach(articulo => {
        const dataId = Number(articulo.dataset.id)
        const articuloEnCarrito = lista.find(product => product.id === dataId)
        const cantidad = Number(articulo.querySelector('span').textContent.replace(' x', ''))
        total += articuloEnCarrito.precio * cantidad;
    })
    return total;
}

const mostrarTotal = () => {
    verTotal.textContent = calcularTotal(productList)
}

const btnAdd = document.querySelectorAll('article button')

const addX1 = (span, stock, btn, btn1) => {
    let contador = Number(span.textContent.replace(' x', ''))
    if (stock > contador) {
        contador += 1;
        span.textContent = ' x' + contador;
    } else {
        btn.disabled = true;
        btn1.disabled = true;
        btn.textContent = 'Sin Stock'

    }
    mostrarTotal()
}

const deleteInCart = (event) => {

    let liBorrar = event.target.parentNode;

    while (liBorrar && liBorrar.tagName !== 'LI') {
        liBorrar = liBorrar.parentNode;
    }
    if (liBorrar) {
        const btnAdd = document.querySelector(`#btnAdd${liBorrar.dataset.id}`)
        btnAdd.disabled = false;
        btnAdd.textContent = 'Agregar al carrito';

        liBorrar.parentNode.removeChild(liBorrar)
    }
    mostrarTotal()
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

