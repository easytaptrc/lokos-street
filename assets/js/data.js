/* Territorio Lokos Street — datos del menú.
   Edita aquí precios, descripciones y datos de contacto: la web (menu.html, index.html) y el menú imprimible leen este archivo. */

window.LOKOS_CONFIG = {
  // Datos del negocio. Si un campo queda vacío, la web no lo muestra.
  direccion: 'Av. Bravo 7083, Col. Villa Florencia, 27054 Torreón, Coah.',
  horario: '',              // ej. 'Lunes a domingo · 5:00 pm a 11:00 pm'
  telefono: '',             // ej. '+52 55 1234 5678'
  whatsapp: '',             // solo números con lada, ej. '5215512345678'
  facebook: 'https://www.facebook.com/share/19jk4nKSSC/',
  instagram: 'https://www.instagram.com/territorio.lokos.street/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Territorio%20Lokos%20Street%2C%20Av.%20Bravo%207083%2C%20Villa%20Florencia%2C%2027054%20Torre%C3%B3n%2C%20Coah.',
};

window.LOKOS_MENU = [
  {
    id: 'tradicional', name: 'Lo más tradicional', short: 'Tradicional', color: 'yellow', img: 'tradicional',
    tagline: 'Los clásicos de la calle',
    items: [
      { id: 'elote-entero', name: 'Elote entero', desc: 'Elote entero preparado a tu gusto.', price: 50 },
      { id: 'elote-desgranado', name: 'Elote desgranado', desc: 'Elote en vaso o charola preparado a tu gusto. Elige tu tamaño.',
        options: [{ label: 'Vaso mini', price: 35 }, { label: 'Vaso chico', price: 45 }, { label: 'Charolita', price: 65 }, { label: 'Vaso grande', price: 70 }, { label: 'Medio litro', price: 80 }] },
      { id: 'nachos', name: 'Nachos', desc: 'Nachos preparados a tu gusto.', price: 75 },
      { id: 'sabritas-preparadas', name: 'Sabritas preparadas', desc: 'Tus Sabritas favoritas preparadas a tu gusto.', price: 80 },
    ],
  },
  {
    id: 'elotes', name: 'Elotes especiales', short: 'Elotes', color: 'pink', img: 'elote-cheetos',
    tagline: 'Elote, quesito y mucho sabor',
    items: [
      { id: 'atrevido', name: 'Atrevido', desc: 'Elote entero bañado en queso caliente con Cheetos Flamin\' Hot en la base.', price: 90, hot: true },
      { id: 'entero-combinado', name: 'Entero combinado', desc: 'Elote entero combinado con elote desgranado, aderezos, salsas y toppings a tu gusto.', price: 80 },
      { id: 'volcan', name: 'Volcán', desc: 'Vaso de elote grande con tus papitas favoritas bañadas en quesito caliente y manchego.', price: 105 },
      { id: 'chorreado', name: 'Chorreado', desc: 'Chorreado con queso cheddar calientito, 3 Sabritas a elegir y tus aderezos y toppings favoritos.', options: [{ label: 'Chico', price: 85 }, { label: 'Grande', price: 105 }] },
      { id: 'elote-cheetos', name: 'Elote Cheetos', desc: 'Medio litro de elote con Cheetos preparado por capas con aderezos y quesito caliente.', price: 85, hot: true },
      { id: 'elote-loko', name: 'Elote Loko', desc: 'Elote preparado en capas con 4 tipos de Sabritas a combinar, queso cheddar caliente y tus aderezos favoritos.', price: 90 },
      { id: 'charola-mix', name: 'Charola Mix', desc: 'Charola de elote grande con queso manchego, aderezos, salsas a tu gusto y 2 Sabritas a elegir con quesito caliente encima.', price: 100 },
      { id: 'charola-3-quesos', name: 'Charola 3 quesos', desc: 'Charola grande de elote con queso manchego, chihuahua y cheddar, y 2 toppings a elegir. Agrega 1 bolsa de Sabritas por solo $20.', price: 95 },
      { id: 'sabrimaruchan', name: 'Sabrimaruchan', desc: 'Maruchan servida sobre una bolsa de Sabritas preparadas con elote, aderezos a elegir y mucho quesito.', price: 105 },
      { id: 'maruchan-loka', name: 'Maruchan Loka', desc: 'Maruchan con elote, aderezos y 3 Sabritas a elegir, cubiertas en quesito caliente.', price: 105 },
      { id: 'maruchanlote', name: 'Maruchanlote', desc: 'Charola con elote preparado a tu gusto y una Maruchan con tus aderezos favoritos y quesito caliente.', price: 80 },
      { id: 'empanizado-mix', name: 'Empanizado Mix', desc: 'Elote entero cubierto con Cheetos Flamin\' Hot, queso caliente, tus aderezos favoritos y una bolsa de Sabritas con queso a un ladito.', price: 95 },
    ],
  },
  {
    id: 'compartir', name: 'Enteros y para compartir', short: 'Para compartir', color: 'red', img: 'mix-comparte',
    tagline: 'Para el antojo en grupo',
    items: [
      { id: 'empanizado', name: 'Empanizado', desc: 'Elote cubierto de Cheetos Flamin\' Hot, queso caliente y tus aderezos favoritos.', price: 70 },
      { id: 'entero-mix', name: 'Entero Mix', desc: 'Elote entero preparado a tu gusto con una bolsa de Sabritas con queso caliente a un ladito.', price: 85 },
      { id: 'mix-comparte', name: 'Mix Comparte', desc: 'Elote entero partido en 2, empanizado con Cheetos Flamin\' Hot, dos tipos de Sabritas y elote desgranado preparado con quesos y tus aderezos favoritos.', price: 155, hot: true },
      { id: 'maxi-chorreado', name: 'Maxi Chorreado', desc: 'Más de medio litro de elote con queso manchego, aderezos y queso cheddar calientito, más dos bolsas de Sabritas chorreadas en quesito con elote desgranado.', price: 155 },
      { id: 'charola-jumbo', name: 'Charola Jumbo', desc: 'Charola grande con elote desgranado, queso manchego, queso caliente y tus aderezos favoritos, con 2 bolsas de Sabritas a elegir por encima con queso caliente.', price: 155 },
      { id: 'la-cornuda', name: 'La Cornuda', desc: 'Maruchan preparada, elote empanizado entero partido a la mitad y dos bolsas de Sabritas, todo con tus aderezos y salsas favoritas.', price: 195 },
    ],
  },
  {
    id: 'chilito', name: 'Con chilito', short: 'Con chilito', color: 'purple', img: 'dorilokos',
    tagline: 'Chamoy, Tajín y mucho picor',
    items: [
      { id: 'vaso-loko', name: 'Vaso Loko', desc: 'Elige los toppings que quieras de nuestra barra (papitas, dulces o gomitas) y combínalos con nuestro chamoy especial y polvitos como Tajín o Miguelito.', price: 60 },
      { id: 'dorilokos', name: 'Dorilokos', desc: 'Bolsa de Sabritas a elegir con cueritos, rielitos, cacahuates, limón, chamoy, shot de Clamato (si te gusta), Tajín, banderilla de tamarindo y serpentina.', price: 85, hot: true },
      { id: 'tosti-vaso', name: 'Tosti Vaso', desc: 'Vaso de medio litro: elige una bolsa de Sabritas y 5 toppings de nuestra barra, salsas negras, chamoy, limón, Tajín o Miguelito y un shot de Clamato (opcional).', price: 85 },
      { id: 'paponas', name: 'Paponas', desc: 'Vaso de litro con papas naturales y tus aderezos favoritos, preparadas con limón, Maggi y mix de cacahuates.', price: 75 },
      { id: 'cueritos-lokos', name: 'Cueritos Lokos', desc: 'Medio litro de mix de cueritos con cacahuates, rielitos, limón, salsas negras y Tajín.', price: 65 },
      { id: 'cacahuates-lokos', name: 'Cacahuates Lokos', desc: 'Medio litro de cacahuate japonés con salsas negras, Tajín, chamoy, rielitos y shot de Clamato.', price: 70 },
      { id: 'duro', name: 'Duro', desc: 'Medio litro de duritos con salsas negras, Tajín, chamoy, rielitos y shot de Clamato.', price: 70 },
      { id: 'papitas-queso', name: 'Papitas con queso', desc: 'Las papas que quieras con queso a tu gusto.', price: 55 },
      { id: 'cachitos-lokos', name: 'Cachitos Lokos', desc: 'Dos elotes enteros en trocitos con tus aderezos favoritos, queso amarillo, queso rallado y una papita triturada.', price: 100 },
      { id: 'costillitas', name: 'Costillitas', desc: 'Costillitas preparadas a tu gusto.', price: 95 },
      { id: 'paleta-loka', name: 'Paleta Loka', desc: 'Paleta del sabor que más te guste con 3 toppings de nuestra barra, chamoy y Miguelito.', price: 45 },
      { id: 'ramen', name: 'Ramen', desc: 'Ramen coreano con elotito desgranado, tus aderezos favoritos y una papita molida.', options: [{ label: 'Vaso chico', price: 105 }, { label: 'Bolsa', price: 140 }, { label: 'Bowl', price: 140 }] },
      { id: 'dumplings', name: 'Dumplings', desc: 'Dumplings rellenos de carne con pasta a elegir y su variedad de salsas.', options: [{ label: 'Con Maruchan', price: 105 }, { label: 'Con Ramen', price: 155 }] },
    ],
  },
  {
    id: 'frappes', name: 'Frappés especiales', short: 'Frappés', color: 'blue', img: 'frappe-oreo',
    tagline: 'Bebidas frías, cremosas y deliciosas',
    note: 'Por $25 más agrega Magnum a tu frappé. Los frappés de Magnum ya incluyen paleta.',
    items: [
      { id: 'frappe-oreo', name: 'Frappé Oreo', desc: 'Frappé especial de galleta Oreo.', price: 80, hot: true },
      { id: 'frappe-moka', name: 'Frappé Moka', desc: 'Frappé especial de café moka.', price: 80 },
      { id: 'frappe-moka-oreo', name: 'Frappé Moka Oreo', desc: 'Café moka con galleta Oreo.', price: 85 },
      { id: 'frappe-moka-avellana', name: 'Frappé Moka Avellana', desc: 'Café moka con avellana.', price: 85 },
      { id: 'frappe-fresas-crema', name: 'Frappé Fresas con Crema', desc: 'Frappé especial de fresas con crema.', price: 85 },
      { id: 'frappe-taro', name: 'Frappé Taro', desc: 'Frappé especial de taro con perlas (boba) y crema batida.', price: 85 },
      { id: 'frappe-gansito', name: 'Frappé Gansito', desc: 'Frappé especial con Gansito.', price: 90 },
      { id: 'frappe-frutos-rojos', name: 'Frappé Frutos Rojos', desc: 'Frappé especial de frutos rojos.', price: 90 },
      { id: 'frappe-mazapan', name: 'Frappé Mazapán', desc: 'Frappé especial de mazapán.', price: 90 },
      { id: 'frappe-ferrero', name: 'Frappé Ferrero', desc: 'Frappé especial con Ferrero.', price: 95 },
      { id: 'frappe-kinder', name: 'Frappé Kinder', desc: 'Frappé especial con chocolate Kinder.', price: 100 },
      { id: 'frappe-choco-deluxe', name: 'Frappé Choco Deluxe', desc: 'Frappé especial de chocolate.', price: 100 },
      { id: 'frappe-mordisco', name: 'Frappé Mordisco', desc: 'Frappé especial con Mordisko.', price: 105 },
      { id: 'frappe-magnum', name: 'Frappé Magnum', desc: 'Frappé especial que ya incluye tu paleta Magnum.', price: 105 },
    ],
  },
  {
    id: 'premium', name: 'Frappés premium', short: 'Premium', color: 'purple', img: 'cheesecake-fresa',
    tagline: 'Con pay, cheesecake y Nutella',
    items: [
      { id: 'fresas-mix', name: 'Fresas Mix', desc: 'Frappé premium de fresas.', price: 120 },
      { id: 'nutella-pay', name: 'Nutella Pay', desc: 'Frappé premium de Nutella con pay.', price: 130 },
      { id: 'fresa-pay', name: 'Fresa Pay', desc: 'Frappé premium de fresa con pay.', price: 130 },
      { id: 'cheesecake-fresa', name: 'Cheesecake Fresa', desc: 'Frappé premium de cheesecake de fresa.', price: 130 },
      { id: 'cheesecake-nutella', name: 'Cheesecake Nutella', desc: 'Frappé premium de cheesecake con Nutella.', price: 130 },
    ],
  },
  {
    id: 'frutales', name: 'Frappés frutales', short: 'Frutales', color: 'yellow', img: 'mango-mix',
    tagline: 'Fruta, chamoy y dulces',
    items: [
      { id: 'mangonada', name: 'Mangonada', desc: 'Frappé frutal de mango.', price: 75 },
      { id: 'fresada', name: 'Fresada', desc: 'Frappé frutal de fresa.', price: 80 },
      { id: 'jolly-ranch-boba', name: 'Jolly Ranch Boba', desc: 'Frappé frutal sabor Jolly Rancher con perlas (boba).', price: 80 },
      { id: 'pulparindo-mix', name: 'Pulparindo Mix', desc: 'Frappé frutal con Pulparindo.', price: 85 },
      { id: 'mango-mix', name: 'Mango Mix', desc: 'Frappé frutal de mango con dulces.', price: 85, hot: true },
      { id: 'pica-fresa-mix', name: 'Pica Fresa Mix', desc: 'Frappé frutal con Pica Fresa.', price: 85 },
      { id: 'jolly-ranch-mix', name: 'Jolly Ranch Mix', desc: 'Frappé frutal sabor Jolly Rancher con dulces.', price: 85 },
      { id: 'lucas-mango', name: 'Lucas Mango', desc: 'Frappé frutal de mango con Lucas.', price: 90 },
      { id: 'lucas-picafresa', name: 'Lucas Picafresa', desc: 'Frappé frutal de fresa con Lucas.', price: 90 },
    ],
  },
  {
    id: 'arma', name: 'Arma tus fresas', short: 'Arma tus fresas', color: 'pink', img: 'fresas-tradicionales',
    tagline: 'Elige tus frutas favoritas',
    items: [
      { id: 'fresas-tradicionales', name: 'Fresas tradicionales', desc: 'Elige tus frutas favoritas. Incluye 2 toppings + 1 jarabe + crema batida.',
        options: [{ label: 'Chico', price: 80 }, { label: 'Mediano', price: 90 }, { label: 'Grande', price: 100 }, { label: 'Medio litro', price: 110 }, { label: 'Litro', price: 170 }] },
    ],
    extras: {
      toppings: ['Granola', 'Coco', 'Nuez', 'Almendras', 'Arándanos', 'Lunetas', 'Oreo', 'Chocoretas', 'Cranky', 'Mazapán', 'Choco pasas', 'Chokis'],
      jarabes: ['Hershey\'s chocolate y fresa', 'Lechera', 'Nutella', 'Mermelada de fresa'],
      premium: [
        { price: '$10', items: ['Ferrero', 'Kinder Chocolate', 'Gansito', 'Hershey\'s Cookies \'n\' Creme', 'Bubulubu'], imgs: ['top-gansito', 'top-kinder', 'top-hersheys'] },
        { price: '$20', items: ['Kinder Delice', 'KitKat', 'Brownie'], imgs: ['top-delice', 'top-kitkat', 'top-brownie'] },
        { price: '$27 / $30', items: ['Pay $27', 'Magnum $30', 'Mordisko $30'], imgs: ['top-cheesecake', 'top-mordisko'] },
      ],
    },
  },
  {
    id: 'fresas', name: 'Fresas especiales', short: 'Fresas', color: 'red', img: 'bowl-fresas',
    tagline: 'Fresas con crema nivel loko',
    items: [
      { id: 'bowl-fresas', name: 'Bowl Fresas', desc: 'Nutella + fresas con crema + 3 toppings y bola de nieve. Agrega pay o combina pay y otro complemento por +$25.', price: 130, hot: true },
      { id: 'fresa-nieve', name: 'Fresa Nieve', desc: 'Dos toppings + bola de nieve y crema batida.', price: 110 },
      { id: 'kinder-mix', name: 'Kinder Mix', desc: 'Kinder Delice, Kinder barrita + 2 toppings y crema batida.', price: 115 },
      { id: 'fresuras', name: 'Fresuras', desc: 'Dos toppings, crema batida y una Magnum de almendras.', price: 115 },
      { id: 'domo-pay', name: 'Domo Pay', desc: 'Fresas con crema coronadas con pay.', price: 120 },
      { id: 'fresonas', name: 'Fresonas', desc: 'Dos toppings + pay + crema batida.', price: 125 },
      { id: 'cheesecake', name: 'Cheesecake', desc: 'Fresas con crema con cheesecake.', price: 130 },
      { id: 'domo-cheesecake', name: 'Domo Cheesecake', desc: 'Rebanada de cheesecake + 2 toppings y fresas con crema.', price: 135 },
      { id: 'fresas-gold', name: 'Fresas Gold', desc: 'Pay en cubos + 2 Ferrero + 2 toppings.', price: 135 },
      { id: 'croissant', name: 'Croissant', desc: 'Croissant con fresas, crema batida, chocolate y almendras.', price: 95 },
      { id: 'deluxe', name: 'Deluxe', desc: 'Pay en cubos, Kinder Delice, 1 Magnum y 2 toppings.', price: 145 },
    ],
  },
  {
    id: 'infantil', name: 'Menú infantil', short: 'Infantil', color: 'blue', img: 'kinder-sorpresa',
    tagline: 'Para los más pequeños',
    items: [
      { id: 'vasito-gomitas', name: 'Vasito de gomitas', desc: 'Vasito con gomitas para los peques.', price: 35 },
      { id: 'paleta-loka-infantil', name: 'Paleta Loka', desc: 'Paleta con gomitas y dulces.', price: 50 },
      { id: 'kinder-sorpresa', name: 'Frappé Kinder Sorpresa', desc: 'Frappé con huevito Kinder Sorpresa.', price: 75 },
    ],
  },
];

// Fotos disponibles (assets/img/products/<id>.webp). Los productos sin foto muestran un ícono.
window.LOKOS_PHOTOS = new Set([
  'tradicional', 'elote-entero', 'elote-desgranado', 'nachos', 'sabritas-preparadas', 'entero-combinado', 'volcan', 'chorreado', 'elote-cheetos', 'elote-loko', 'charola-mix',
  'charola-3-quesos', 'sabrimaruchan', 'maruchan-loka', 'atrevido', 'maruchanlote', 'empanizado-mix', 'empanizado', 'mix-comparte', 'entero-mix', 'la-cornuda', 'maxi-chorreado',
  'charola-jumbo', 'vaso-loko', 'dorilokos', 'tosti-vaso', 'paleta-loka', 'paponas', 'cueritos-lokos', 'cacahuates-lokos', 'papitas-queso', 'duro', 'cachitos-lokos', 'ramen',
  'frappe-oreo', 'frappe-moka', 'frappe-moka-oreo', 'frappe-frutos-rojos', 'frappe-fresas-crema', 'frappe-mazapan', 'frappe-kinder', 'frappe-choco-deluxe', 'frappe-mordisco',
  'frappe-magnum', 'nutella-pay', 'fresa-pay', 'cheesecake-fresa', 'fresas-mix', 'mangonada', 'fresada', 'mango-mix', 'lucas-mango', 'lucas-picafresa', 'fresas-tradicionales',
  'kinder-mix', 'fresas-gold', 'cheesecake', 'domo-pay', 'domo-cheesecake', 'deluxe', 'fresa-nieve', 'fresonas', 'fresuras', 'bowl-fresas', 'kinder-sorpresa', 'vasito-gomitas',
  'paleta-loka-infantil', 'dumplings', 'frappe-taro', 'jolly-ranch-boba', 'croissant', 'top-hersheys', 'top-bubulubu', 'top-gansito', 'top-kinder', 'top-delice', 'top-kitkat', 'top-brownie', 'top-mordisko', 'top-cheesecake',
]);
