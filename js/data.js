const productos = [
    {
      id: 1,
      nombre: "Alborada",
      imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Gypsophila%20repens.jpg" ,
      descripcion: "La planta Alborada es un arbusto perenne que se caracteriza por sus flores llamativas y de color intenso, generalmente en tonos rosados o morados.",
      precio: 25,
      stock: 10
    },
    {
      id: 2,
      nombre: "Alborada rosa",
      imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Gypsophila%20repens%20Rosea.jpg" ,
      descripcion: "La planta Alborada es un arbusto perenne que se caracteriza por sus flores llamativas y de color intenso, generalmente en tonos rosados o morados.",
      precio: 8,
      stock: 5
    },
    {
      id: 3,
      nombre: "Baron rojo",
      imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Imperata%20cylindrica%20Red%20Baron.jpg" ,
      descripcion: "Es popular en jardines y macetas debido a su resistencia y fácil mantenimiento, y prefiere ubicaciones de semisombra o sombra y un riego moderado.",
      precio: 12,
      stock: 12
    },
    {
      id: 4,
      nombre: "Brezo enano blanco",
      imagen: "https://www.planfor.fr//Donnees_Site/Produit/Photo//erica%20x%20darleyensis%20alba.jpg" ,
      descripcion: "Tiene tallos finos y hojas pequeñas de color verde oscuro. Florece en verano con pequeñas flores rosadas o púrpuras en forma de campana que cubren densamente la planta, atrayendo abejas y otros polinizadores.",
      precio: 17,
      stock: 6
    },
    {
      id: 5,
      nombre: "Brezo enano rojo",
      imagen: "https://www.planfor.fr//Donnees_Site/Produit/Photo//erica%20x%20darleyensis%20rubra.jpg" ,
      descripcion: "Tiene tallos finos y hojas pequeñas de color verde oscuro. Florece en verano con pequeñas flores rosadas o púrpuras en forma de campana que cubren densamente la planta, atrayendo abejas y otros polinizadores.",
      precio: 50,
      stock: 3
    },
    {
        id: 6,
        nombre: "Brezo enano rosa",
        imagen: "https://www.planfor.fr//Donnees_Site/Produit/Photo//erica%20x%20darleyensis%20rosea.jpg"  ,
        descripcion: "Tiene tallos finos y hojas pequeñas de color verde oscuro. Florece en verano con pequeñas flores rosadas o púrpuras en forma de campana que cubren densamente la planta, atrayendo abejas y otros polinizadores.",
        precio: 34,
        stock: 3
      },
    {
        id: 7,
        nombre: "Cola de caballo",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//equisetum%20japonicum.jpg",
        descripcion: "Crece en áreas húmedas y suele medir entre 20 y 50 cm de altura. Es conocida por sus propiedades medicinales.",
        precio: 21,
        stock: 3
      },
      {
        id: 8,
        nombre: "Cola de conejo",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//lagurus%20ovatus.jpg" ,
        descripcion: "Es una planta popular en jardines ornamentales y arreglos florales secos debido a su aspecto atractivo y textura sedosa.",
        precio: 19,
        stock: 3
      },
      {
        id: 9,
        nombre: "Elymus",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Agropyron%20magellanicum.jpg" ,
        descripcion: "Son adaptables a diversos climas y suelos, y muchas especies de Elymus son valoradas en ecología por su capacidad de estabilizar el suelo.",
        precio: 28,
        stock: 3
      },
      {
        id: 10,
        nombre: "Equiseto de invierno, Equiseto americana, Cola de caballo",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//equisetum%20americanum.jpg" ,
        descripcion: "Es común en suelos húmedos y arenosos, y se utiliza frecuentemente como planta ornamental en jardines acuáticos por su aspecto vertical y estilizado.",
        precio: 15,
        stock: 3
      },
      {
        id: 11,
        nombre: "Esparto 'Pony Tails'",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/HTML/images/thema-zoom_stipa-tenuissima-ponytail.jpg" ,
        descripcion: "Fácil de mantener, resiste bien la sequía y es ideal para jardines secos o rocallas.",
        precio: 16,
        stock: 3
      },
      {
        id: 12,
        nombre: "Carex 'evergold'",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Carex%20oshimensis%20Evergold.jpg" ,
        descripcion: "Su follaje en forma de cinta crea un efecto atractivo, ideal para jardines, bordes y macetas.",
        precio: 12,
        stock: 3
      },
      {
        id: 13,
        nombre: "Carex 'Frosted Curls'",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Carex%20comans%20Frosted%20Curls.jpg" ,
        descripcion: " Es ideal para jardines de sombra parcial y suelos húmedos, añadiendo textura y movimiento.",
        precio: 14,
        stock: 3
      },
      {
        id: 14,
        nombre: "Carex stricta 'Aurea'",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/HTML/images/thema-zoom_carex-stricta-aurea.jpg" ,
        descripcion: "Es ideal para áreas pantanosas o de ribera, ya que se adapta bien a suelos húmedos.",
        precio: 18,
        stock: 3
      },
      {
        id: 15,
        nombre: "Corazón de María",
        imagen: "https://www.planfor.es/Donnees_Site/Produit/Photo//dicentra%20spectabilis.jpg",
        descripcion: "Es común en jardines de sombra parcial o total y florece en primavera, ofreciendo un espectáculo visual delicado y llamativo.",
        precio: 36,
        stock: 3
      },
      {
        id: 16,
        nombre: "Corazón de María 'Alba'",
        imagen: "https://www.planfor.fr//Donnees_Site/Produit/Photo//dicentra%20spectabilis%20alba.jpg" ,
        descripcion: "Es ideal para jardines sombreados y prospera en climas templados, siendo muy apreciada en paisajismo por su apariencia romántica y encantadora.",
        precio: 32,
        stock: 3
      },
      {
        id: 17,
        nombre: "Corazón de María dorado",
        imagen: "https://www.planfor.fr//Donnees_Site/Produit/Photo//Dicentra%20spectabilis%20Gold.jpg" ,
        descripcion: "Es ideal para jardines sombreados, ya que aporta color y contraste. Además, florece en primavera y verano.",
        precio: 41,
        stock: 3
      },
      {
        id: 18,
        nombre: "Festuca azul o Castañuela azul",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/HTML/images/thema-zoom_festuca-glauca.jpg"  ,
        descripcion: "Es resistente, requiere poco mantenimiento y es ideal para jardines secos o de bajo consumo de agua.",
        precio: 37,
        stock: 3
      },
      {
        id: 19,
        nombre: "Festuca gautieri",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Festuca%20gautieri.jpg" ,
        descripcion: "Su uso principal es en la restauración de suelos erosionados y como forraje en pastizales.",
        precio: 34,
        stock: 3
      },
      {
        id: 20,
        nombre: "Gunnera de Magellan",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Gunnera%20megellanica.jpg"  ,
        descripcion: "Esta planta crece en ambientes húmedos, como márgenes de ríos y pantanos, y se adapta bien a climas fríos.",
        precio: 28,
        stock: 3
      },
      {
        id: 21,
        nombre: "Hakonechloa macra",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Hakonechloa%20macra.jpg" ,
        descripcion: "Es ideal para suelos húmedos y bien drenados, y se utiliza comúnmente en jardines de sombra o como cubierta de suelo.",
        precio: 39,
        stock: 3
      },
      {
        id: 22,
        nombre: "Heuchera 'Berry smoothie'",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Heuchera%20Berry%20smoothie.jpg"  ,
        descripcion: "Es ideal para jardines de sombra o semi-sombra y es apreciada por su resistencia y bajo mantenimiento.",
        precio: 23,
        stock: 3
      },
      {
        id: 23,
        nombre: "Hierba algodonera",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Eriophorum%20angustifolium.jpg"  ,
        descripcion: "Esta planta es sensible a las heladas y requiere climas cálidos y soleados para crecer adecuadamente.",
        precio: 31,
        stock: 3
      },
      {
        id: 24,
        nombre: "Hierba de San Cristóbal 'Atropurpurea'",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Actaea%20simplex%20Atropurpurea.jpg" ,
        descripcion: "Esta planta prefiere suelos bien drenados y sombra parcial, lo que la hace ideal para interiores y jardines de sombra.",
        precio: 50,
        stock: 3
      },
      {
        id: 25,
        nombre: "Pennisetum alopecuroides",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Pennisetum%20alopecuroides.jpg" ,
        descripcion: "Esta planta es ideal para bordes, jardines de rocas y paisajismo naturalista.",
        precio: 25,
        stock: 3
      },
      {
        id: 26,
        nombre: "Salvia rusa 'Blue spire'",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Perovskia%20Blue%20spire.jpg"   ,
        descripcion: "Esta salvia es ideal para jardines de bajo mantenimiento, prefiriendo pleno sol y un buen drenaje.",
        precio: 44,
        stock: 3
      },
      {
        id: 27,
        nombre: "Stipa arundinacea",
        imagen: "https://www.planfor.fr/Donnees_Site/Produit/Photo//Stipa%20arundinacea.jpg"   ,
        descripcion: "Es nativa de regiones de clima templado y se adapta bien a suelos bien drenados, prefiriendo exposiciones soleadas.",
        precio: 37,
        stock: 3
      },

  ];
  