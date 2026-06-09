const CONFIG = {
  whatsappNumber: '5491158338126', // Formatted for WhatsApp URL link (+54 9 11 5833-8126)
  shopName: 'FGOParfum',
  providerName: 'Sherú Aromas',
  currency: '$',
};

const PRODUCTS = [
  {
    "id": "sheru-208156451",
    "name": "Perfume Mini 212 – SAUV",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/212-sauv-milano-sf-1-2140dd6714407bc77b17127627882078-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 212 – SAUV. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Pimienta de Sichuan, bergamota de Calabria y pimienta.",
      "corazon": "Lavanda, geranio, pimienta rosa y elemí.",
      "fondo": "Ambroxan, cedro y ládano."
    }
  },
  {
    "id": "sheru-206274411",
    "name": "Perfume Mini 213 – PHANT",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/213-phant-milano-sf-dd3068835633fd6b2a17114681595501-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 213 – PHANT. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-206274312",
    "name": "Perfume Mini 519 – MWAY",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/519-mway-milano-sf-08563653412efff3e217114681138696-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 519 – MWAY. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-206274200",
    "name": "Perfume Mini 518 – SCAN",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/518-scan-milano-sf-d422e3e7f0c46701a517114680639584-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 518 – SCAN. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-195582738",
    "name": "Combo Fragancias Mini Milano Femenino",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/combo-fragancias-mini-milano-femenino-fi-feed-1-1bb4737ff4e81c24ae17035986580274-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Combo Fragancias Mini Milano Femenino. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-195582639",
    "name": "Combo Fragancias Mini Milano Masculino",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/combo-fragancias-mini-milano-masculino-fi-feed-b8897d7fa53290ab5617035985779938-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Combo Fragancias Mini Milano Masculino. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-191763041",
    "name": "Perfume Mini 508 - J´adore",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/mini-milano-508-jdr-1-89d81577f86e1c1c5117006637220207-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 508 - J´adore. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188426418",
    "name": "Perfume Mini 210 - Bad Boy",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/mini-milano-210-bd-boy-1-9de44360927edcaa0816983360208721-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 210 - Bad Boy. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188425561",
    "name": "Perfume Mini 209 - Pure XS Men",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/mini-milano-209-pxs-7f0b4f5719c9426e8416983357274250-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 209 - Pure XS Men. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188425420",
    "name": "Perfume Mini 515 - Pure XS Fem",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/mini-milano-515-pxs-1-35c248ac5ac8b7969d16983356443921-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 515 - Pure XS Fem. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188425249",
    "name": "Perfume Mini 208 - Le Male",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/mini-milano-208-l-male-1-358b7135aa48a03cd416983354976115-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 208 - Le Male. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188417356",
    "name": "Perfume Mini 514 - Bella",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/mini-milano-514-bella-1-2df94316eeb789ea7316983323634420-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 514 - Bella. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Grosellas negras y pera.",
      "corazon": "Iris, jazmín y flor de azahar del naranjo.",
      "fondo": "Pranilé, vainilla, pachulí y haba tonka."
    }
  },
  {
    "id": "sheru-188417281",
    "name": "Perfume Mini 513 - SI",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/mini-milano-513-si-2f32aa601e9eaea99b169833231603851-dc8ec6d0003d38802216983323554009-240-0.jpg",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 513 - SI. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188417188",
    "name": "Perfume Mini 510 - Chanel Nº5",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/mini-milano-510-ch5-1-4df36f8fcb7964826016983322655215-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 510 - Chanel Nº5. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188417082",
    "name": "Perfume Mini 512 - 212",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/mini-milano-512-c212-1-dac71aa3481af5240616983321991810-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 512 - 212. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188416927",
    "name": "Perfume Mini 511 - Amor Amor",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 9500,
    "size": "50ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/mini-milano-511-amr-c07c81ca22916bd60a16983319432225-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Mini 511 - Amor Amor. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188554687",
    "name": "Perfume 516 - Black Opium",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/516-blkop-1200x1200-tienda-d5dd29e1b913768e8a16984105343284-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 516 - Black Opium. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188554620",
    "name": "Perfume 211 - Y",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/211-y-1200x1200-tienda-9085611f819878324e16984104869404-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 211 - Y. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188554547",
    "name": "Perfume 208 - Le Male",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-208-lmale-cba64c3b8c74dd82f916984104359929-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 208 - Le Male. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188554241",
    "name": "Perfume 514 - Bella",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-514-bella-9bcc6d169db99034dd16984103772973-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 514 - Bella. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Grosellas negras y pera.",
      "corazon": "Iris, jazmín y flor de azahar del naranjo.",
      "fondo": "Pranilé, vainilla, pachulí y haba tonka."
    }
  },
  {
    "id": "sheru-188554175",
    "name": "Perfume 510 - Chanel Nº5",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-510-ch5-6dc7e33c2dde9c363416984100515835-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 510 - Chanel Nº5. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188553699",
    "name": "Perfume 512 - 212",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-512-c212-f1c47a80f0879dd44916984099397017-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 512 - 212. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188553637",
    "name": "Perfume 511 - Amor Amor",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-511-amr-7f6e87c1035a25c8e316984098782030-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 511 - Amor Amor. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188553565",
    "name": "Perfume 506 - Lady Million",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-506-ldm-dca60fb92386b4096016984098262119-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 506 - Lady Million. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Mandarina sanguínea, toronja (pomelo) y menta.",
      "corazon": "Canela, notas especiadas y rosa.",
      "fondo": "Cuero, notas amaderadas, ámbar y pachulí hindú."
    }
  },
  {
    "id": "sheru-188553475",
    "name": "Perfume 505 - Light Blue Fem",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-505-lbf-eee94d8400e711c31a16984097727600-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 505 - Light Blue Fem. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188553307",
    "name": "Perfume 503 - Red Door",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-503-rdr-2924d781aa0c2887c2169840971607971-8a459707740bd087bf16984097684159-240-0.jpg",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 503 - Red Door. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188553229",
    "name": "Perfume 502 - Good Girl",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-502-gdg-18090fca475d537eea16984096641930-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 502 - Good Girl. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Almendra, café, bergamota y limón.",
      "corazon": "Nardo, jazmín sambac, flor de azahar, raíz de lirio y rosa de Bulgaria.",
      "fondo": "Habal tonka, cacao, vainilla, praliné, sándalo, ámbar y almizcle."
    }
  },
  {
    "id": "sheru-188553178",
    "name": "Perfume 501 - CK One",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-501-ock-7a043ccef3e66e68a816984095998147-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 501 - CK One. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188553110",
    "name": "Perfume 202 - Cool Water",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-202-cwt-89d71c880910048ec716984095445289-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 202 - Cool Water. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188553054",
    "name": "Perfume 201 - CH Classic",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-201-chc-e7be87dd38966fe71d16984094451115-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 201 - CH Classic. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-191762708",
    "name": "Perfume 205 - One Million",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-205-oml-152e0c7052af281e8e17006636239225-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 205 - One Million. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Mandarina sanguínea, toronja (pomelo) y menta.",
      "corazon": "Canela, notas especiadas y rosa.",
      "fondo": "Cuero, notas amaderadas, ámbar y pachulí hindú."
    }
  },
  {
    "id": "sheru-191762464",
    "name": "Perfume 504 - Olympea",
    "category": "perfumes",
    "categoryLabel": "Perfumes Milano",
    "price": 12000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/perfume-504-olp-350d4372f2e93717dc17006634110676-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 504 - Olympea. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Jazmín de agua, mandarina verde y flor de jengibre.",
      "corazon": "Vainilla salada y acordes marinos.",
      "fondo": "Ámbar gris, madera de cachemira y sándalo."
    }
  },
  {
    "id": "sheru-188555375",
    "name": "Body Splash Captivant",
    "category": "otros",
    "categoryLabel": "Body Splash Milano",
    "price": 6500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/captivant-body-splash-ba0faf4f1062da707b16984110387963-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Body Splash Captivant. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188555270",
    "name": "Body Splash Funny Girl",
    "category": "otros",
    "categoryLabel": "Body Splash Milano",
    "price": 6500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/funnygirl-body-splash-fece060b761e9d0afe16984109899309-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Body Splash Funny Girl. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188555211",
    "name": "Body Splash Pure Seduction",
    "category": "otros",
    "categoryLabel": "Body Splash Milano",
    "price": 6500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/pureseduction-body-splash-2f3193dc5a929a2eb316984109421888-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Body Splash Pure Seduction. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188555121",
    "name": "Body Splash Romantic Venice",
    "category": "otros",
    "categoryLabel": "Body Splash Milano",
    "price": 6500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/romanticvenice-body-splash-7f150dd89b612db27316984108611689-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Body Splash Romantic Venice. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188555062",
    "name": "Body Splash Miami Summer",
    "category": "otros",
    "categoryLabel": "Body Splash Milano",
    "price": 6500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/miamisummer-body-splash-1e67d03b44d4d16a5f16984108151138-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Body Splash Miami Summer. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-188554997",
    "name": "Body Splash Flowers",
    "category": "otros",
    "categoryLabel": "Body Splash Milano",
    "price": 6500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/flowers-body-splash-c0d887e1fcaf8d399e16984107606916-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Body Splash Flowers. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-285711488",
    "name": "Perfume M Way",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-m-way-femme-sf-saphirusparfum-1d6c4a3f2c45bb148417544017653769-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume M Way. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume M Way.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285711364",
    "name": "Perfume Si",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-si-femme-sf-saphirusparfum-cf9c97097dc982bcd317544017279418-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Si. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume Si.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285711257",
    "name": "Perfume One Million",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-one-million-homme-sf-saphirusparfum-0ce780cb3fadf7ad2417544016761358-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume One Million. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Mandarina sanguínea, toronja (pomelo) y menta.",
      "corazon": "Canela, notas especiadas y rosa.",
      "fondo": "Cuero, notas amaderadas, ámbar y pachulí hindú."
    }
  },
  {
    "id": "sheru-285711104",
    "name": "Perfume Fama",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-fama-femme-sf-saphirusparfum-9346073d27f8e2ac0617544016408175-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Fama. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume Fama.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285710994",
    "name": "Perfume Wanted",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-wanted-homme-sf-saphirusparfum-3389507986728b657c17544016015149-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Wanted. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume Wanted.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285710892",
    "name": "Perfume Idol",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-idol-femme-sf-saphirusparfum-6c7a325896397db18d17544015634854-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Idol. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume Idol.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285710788",
    "name": "Perfume 212 NYC",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-212-nyc-femme-sf-saphirusparfum-1cb3ba296e3189303417544015204560-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 212 NYC. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume 212 NYC.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285710670",
    "name": "Perfume Bad Man Cobalt",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-bad-man-cobalt-homme-sf-saphirusparfum-ebb04465ae6b561ca017544014826410-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Bad Man Cobalt. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume Bad Man Cobalt.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285710515",
    "name": "Perfume Very Good Woman",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-very-good-woman-femme-sf-saphirusparfum-1f0894353ebe897d7617544014409384-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Very Good Woman. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume Very Good Woman.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285710406",
    "name": "Perfume Bad Man",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-bad-man-homme-sf-saphirusparfum-5055855af434fa1ac817544014038042-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Bad Man. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume Bad Man.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285710295",
    "name": "Perfume Jador",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-jador-femme-sf-saphirusparfum-d0a478a8804c473fb317544013604324-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Jador. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume Jador.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285710178",
    "name": "Perfume 212 Heroes Fem",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-heroes-fem-femme-sf-saphirusparfum-760352ef07c4fcb33e17544013142994-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume 212 Heroes Fem. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume 212 Heroes Fem.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285710056",
    "name": "Perfume N°5",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-n5-femme-sf-saphirusparfum-75f66f74644b19ba9117544012687045-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume N°5. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume N°5.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285709957",
    "name": "Perfume Phant",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-phant-homme-sf-saphirusparfum-4711b1b2b8f9b3338f17544012310319-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Phant. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume Phant.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285709836",
    "name": "Perfume Divina",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-divina-femme-sf-saphirusparfum-0617f1318077ea84c017544011930927-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Divina. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Perfume Divina.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-285709756",
    "name": "Perfume Vida Bella",
    "category": "perfumes",
    "categoryLabel": "Saphirus Corporal",
    "price": 11000,
    "size": "100ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250626-perfumes-vida-bella-femme-sf-saphirusparfum-0a99bb64d6e7f2339317544011570439-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Perfume Vida Bella. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Grosellas negras y pera.",
      "corazon": "Iris, jazmín y flor de azahar del naranjo.",
      "fondo": "Pranilé, vainilla, pachulí y haba tonka."
    }
  },
  {
    "id": "sheru-287535997",
    "name": "Textil Erba",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250804-textil-erba-sf-saphirus-min-a240e3846e5b7c84e917551778795341-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Erba. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-287535739",
    "name": "Textil Pistacho Caramel",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250804-textil-pistacho-caramel-sf-saphirus-min-d10534cc6850f40a2917551778235272-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Textil Pistacho Caramel. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia dulce/gourmet.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259559921",
    "name": "Textil Breeze",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250218-textil-breeze-sf-saphirus-b681bfe65b692d555e17418078227157-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Breeze. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259559732",
    "name": "Textil Invicto Legend",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250218-textil-invicto-legend-sf-sapfirus-2b8dee92782b6c72b617418077626921-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Invicto Legend. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259559563",
    "name": "Textil Good Woman",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20241210-textil-good-woman-saphirus-2d8deac4ae0e937f6517418077202225-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Good Woman. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259559370",
    "name": "Textil Salvaje",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20241210-textil-salvaje-saphirus-62bd0ce6ab92d72aee17418076792492-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Salvaje. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259559101",
    "name": "Textil Bergamota &amp; Cedro",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240930-aromatizador-textil-bergamota-cedro-bc9a6b67dcbbc2158217418076009631-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Textil Bergamota &amp; Cedro. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259558912",
    "name": "Textil Fresias y Bergamota",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240911-textil-fresias-y-bergamota-saphirus-2fc594109edfb9ec4517418075602503-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Textil Fresias y Bergamota. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259558684",
    "name": "Textil Fama",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240812-textil-fama-saphirus-611feb4b030cac2e3417418075030746-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Fama. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259558407",
    "name": "Textil Peonias y Cedro",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240911-textil-peonias-y-cedro-saphirus-1-079b0bd334ee98266e17418074332014-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Textil Peonias y Cedro. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia floral.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259558024",
    "name": "Textil Scandal Fem",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240812-textil-scandal-fem-saphirus-1-377e863d17045b08a417418073373315-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Scandal Fem. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259557675",
    "name": "Textil Black",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/textil-black-xs-saphirus-474be1f040ad8be15e17418072617271-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Black. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259557421",
    "name": "Textil Scandal Man",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/textil-scandal-man-saphirus-439b38446b881fab2617418072154041-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Scandal Man. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-201701800",
    "name": "Textil Pure XS",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-textil-xs-1-34c2f9d9961c0b9caf17084534695153-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Pure XS. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-201518082",
    "name": "Pack Primaveral",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-textiles-pack-primaveral-1-18676d3fe3a5095ce117083506506081-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Pack Primaveral. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-196830929",
    "name": "Textil Yourself",
    "category": "textiles",
    "categoryLabel": "Aromatizante Textil",
    "price": 3200,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-textil-yourself-e91bb5f949e292489317048047405790-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Textil Yourself. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182285970",
    "name": "Home Spray Vainilla Cream",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-vanilla-cream-977f5e157ffe1ca6db17086988222640-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Home Spray Vainilla Cream. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Vainilla Cream.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285921",
    "name": "Home Spray Sweet Flower",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-sweet-flowers-b19e51cc8d268c4ac717086987001908-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Home Spray Sweet Flower. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Sweet Flower.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285868",
    "name": "Home Spray Sandía Pepino",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-sandia-pepino-8e4f37e5d49778e6ba17086984476524-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Home Spray Sandía Pepino. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Sandía Pepino.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285828",
    "name": "Home Spray Pomelo &amp; Menta",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-pomelo-menta-fa5d6eb3b66038c78917086985965921-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Home Spray Pomelo &amp; Menta. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Pomelo &amp; Menta.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285788",
    "name": "Home Spray Naranja Pomelo",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-naranja-pomelo-ecec8821f4e8bfe44917086984326931-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Home Spray Naranja Pomelo. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Naranja Pomelo.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285640",
    "name": "Home Spray Mountain Water",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-mountain-water-159c741d5bcd953cc817086985013833-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Home Spray Mountain Water. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Mountain Water.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285570",
    "name": "Home Spray Mix Tropical",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-mix-tropical-93be24a7867604a08117086987910451-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Home Spray Mix Tropical. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Mix Tropical.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285472",
    "name": "Home Spray Mango Ananá",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-mango-anana-1069444505b8d6a4fa17086988071449-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Home Spray Mango Ananá. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Mango Ananá.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285423",
    "name": "Home Spray Lino &amp; Peonias",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-lino-y-peonias-a0a1465c92d749dc1e17086983980450-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Home Spray Lino &amp; Peonias. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Lino &amp; Peonias.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285299",
    "name": "Home Spray Lima Limón",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-lima-limon-fd1ac8ad4ea94f72da17086983846476-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Home Spray Lima Limón. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Lima Limón.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285261",
    "name": "Home Spray Grosellas &amp; Nectarina",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-grosellas-nectarinas-6eac632eea0020aae517086987745660-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Home Spray Grosellas &amp; Nectarina. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Grosellas &amp; Nectarina.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285217",
    "name": "Home Spray Fresias &amp; Bergamota",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-fresia-y-bergamota-6e53cd2778aebf9e6917086987575891-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Home Spray Fresias &amp; Bergamota. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Fresias &amp; Bergamota.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285172",
    "name": "Home Spray Frambuesa &amp; Rosas",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-frambuesa-y-rosas-1-d93505b7b19a6c5faa17086984814574-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Home Spray Frambuesa &amp; Rosas. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Frambuesa &amp; Rosas.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285138",
    "name": "Home Spray Flor de Loto",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-flor-de-loto-6c0b9cef96c03f086717086988934965-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Home Spray Flor de Loto. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Flor de Loto.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285097",
    "name": "Home Spray Fancy Dreams",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-fancy-dreams-f89f8bac59369cbd3f17086984655449-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Home Spray Fancy Dreams. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Fancy Dreams.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182285065",
    "name": "Home Spray Coco Maracuyá",
    "category": "textiles",
    "categoryLabel": "Home Spray Saphirus",
    "price": 4000,
    "size": "500ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-home-spray-coco-maracuya-064a3814bae1f429dc17086986173854-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Home Spray Coco Maracuyá. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Home Spray Coco Maracuyá.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-259552576",
    "name": "Difusor Sandía Pepino",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250204-difusor-sandia-pepino-sf-saphirus-1-91d263cbdb7d645a7917418062435578-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Difusor Sandía Pepino. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia amaderado.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259552373",
    "name": "Difusor Cookies &amp; Cream",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250204-difusor-cookies-cream-sf-saphirus-dddd44ab4bb303877a17418061977169-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor Cookies &amp; Cream. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259552120",
    "name": "Difusor Bergamota &amp; Cedro",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240930-difusor-bergamota-cedro-2cf5c6c73ea189f3b717418061505677-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Difusor Bergamota &amp; Cedro. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259551411",
    "name": "Difusor Lavanda Vainilla",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240708-difusor-aromatico-lavanda-vainilla-saphirus-1-541622a226e09a816317418060080576-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Difusor Lavanda Vainilla. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia dulce/gourmet.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259550918",
    "name": "Difusor Pétalos de Orquídeas",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240708-difusor-aromatico-petalos-de-orquideas-saphirus-df01cadabce588007a17418058282149-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Difusor Pétalos de Orquídeas. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia floral.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-218139672",
    "name": "Difusor Melocotón Blanco",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240618-difusor-melocoton-blanco-saphirus-b886fe332d8091da0517192394882448-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor Melocotón Blanco. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-218139496",
    "name": "Difusor Lima Limón",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240618-difusor-lima-limon-saphirus-c9e7a85935d25ccc3517192394366634-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Difusor Lima Limón. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-205131571",
    "name": "Difusor Clean Cotton",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/difusor-saphirus-clean-cotton-fondo-blanco-a09832d3a42f16415517107676852654-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor Clean Cotton. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-205131379",
    "name": "Difusor Bad Man",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/difusor-saphirus-bad-man-fondo-blanco-c841d8bf74e7bc666117107676330639-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor Bad Man. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-198414967",
    "name": "Difusor Mango",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/difusor-aromatico-mango-e52db09d1df0b0bf5a17072485382503-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Difusor Mango. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-198414768",
    "name": "Difusor Coco Maracuyá",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/difusor-aromatico-coco-maracuya-32e1460405775087cb17072485039919-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Difusor Coco Maracuyá. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia dulce/gourmet.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182200848",
    "name": "Difusor Tropical",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-difusor-tropical1-05a73fe5899c7cba3616938478980387-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Difusor Tropical. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182199102",
    "name": "Difusor Wanted",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-difusores-wanted-11-fc59bca25ff4c5cc3816938569918590-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor Wanted. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182198887",
    "name": "Difusor Violetas",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-difusores-violeta1-d8e262a12566b1f39f16938469924919-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Difusor Violetas. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia floral.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182198720",
    "name": "Difusor Verbena",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-difusores-verbena1-92e206adb0e74e8f0516938469493307-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Difusor Verbena. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182198523",
    "name": "Difusor Vainilla",
    "category": "difusores",
    "categoryLabel": "Difusor de Aromas",
    "price": 4500,
    "size": "125ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-difusores-vainilla1-d4040568e6e2922c8316938469040941-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Difusor Vainilla. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia dulce/gourmet.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-195581466",
    "name": "Difusor Premium Cardamomo &amp; Anis",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/dp-cardamomo-y-anis-sf-665e6c37ca77fdb57217035978583049-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor Premium Cardamomo &amp; Anis. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-195580075",
    "name": "Difusor Premium Durazno &amp; Azahares",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/dp-durazno-y-azahares-sf-a1a6d8cd0c3d6fc80017035971033637-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Difusor Premium Durazno &amp; Azahares. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182223558",
    "name": "Difusor Premium Verbena Nature",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/verbenanature-5239a4b2930c6875ca17086301598610-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Difusor Premium Verbena Nature. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182218781",
    "name": "Difusor Premium Pumpkin Cake",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-difusor-premium-pumpkin-cake-9ac9cda68d0c0a3d4917086302643502-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor Premium Pumpkin Cake. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182218665",
    "name": "Difusor Premium Manzana Verde &amp; Pepino",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-difusor-premium-manzana-verde-pepino-e37bfd6acd53c72bb617086303610542-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Difusor Premium Manzana Verde &amp; Pepino. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182216377",
    "name": "Difusor Premium Lima &amp; Pera",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-difusor-premium-lima-pera-6a08c95f3608c0cf8d17086302364017-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Difusor Premium Lima &amp; Pera. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182216273",
    "name": "Difusor Premium Bergamota &amp; Cedro",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-difusor-premium-bergamota-cedro-753e06eaf6503db3c017086300393765-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Difusor Premium Bergamota &amp; Cedro. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182216160",
    "name": "Difusor Premium Moras &amp; Naranja",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/moras_naranja-78a12d85a503b5c10917086301021648-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Difusor Premium Moras &amp; Naranja. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182216020",
    "name": "Difusor Premium Melocoton Blanco",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/melocotonblanco-62e2c45bee8fe6bcb917086301979340-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor Premium Melocoton Blanco. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182215925",
    "name": "Difusor Premium Geranio &amp; Frutos Tropicales",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/geranio_frutostropicales-4811dfc8871d8c8db017086303316813-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Difusor Premium Geranio &amp; Frutos Tropicales. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182215820",
    "name": "Difusor Premium Eucalipto &amp; Menta",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/eucalipto_menta-685114ad5f646101d917086300711548-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor Premium Eucalipto &amp; Menta. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182215719",
    "name": "Difusor Premium Vainilla &amp; Coco",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/difusor-premium-vainilla-y-coco-01-0112-e4d2c9da10526d814517086297198076-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Difusor Premium Vainilla &amp; Coco. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia dulce/gourmet.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182215555",
    "name": "Difusor Premium Vainilla Oriental",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/difusor-premium-vainilla-oriental-01-0111-99977dbf29f7903cb417086299576847-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Difusor Premium Vainilla Oriental. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia dulce/gourmet.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182215387",
    "name": "Difusor Premium Sweet Baby",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/difusor-premium-sweet-baby-01-0110-1c4b418dacd6337ce217086296057835-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor Premium Sweet Baby. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182215273",
    "name": "Difusor Premium Pétalos de Orquídeas",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/difusor-premium-petalos-de-orquideas-01-019-d6ae3691929332ba8417086304069197-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Difusor Premium Pétalos de Orquídeas. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia floral.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182215150",
    "name": "Difusor Premium Naranja &amp; Limón",
    "category": "difusores",
    "categoryLabel": "Difusor Premium",
    "price": 5500,
    "size": "250ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/difusor-premium-naranja-limon-01-018-2a4a4bf9ae0860828a17086296427599-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Difusor Premium Naranja &amp; Limón. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-343579335",
    "name": "Difusor spicy lemon 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-spicy-lemon-fb-saphirus-color-1-84d2cadefb288737e117786099031798-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Difusor spicy lemon 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de spicy lemon 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343579082",
    "name": "Difusor buttermilk 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-buttermilk-fb-saphirus-1-f3650bcbc80c0752c217786098603148-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Difusor buttermilk 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de buttermilk 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343578832",
    "name": "Difusor amanecer citríco 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-amanecer-citrico-fb-saphirus-color-1-9c5ec361d0c7a5487017786098025586-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor amanecer citríco 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de amanecer citríco 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343578554",
    "name": "Difusor frutas exóticas 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-frutas-exoticas-fb-saphirus-color-1-5899dc5df41d1d7a7717786097796651-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor frutas exóticas 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de frutas exóticas 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343578427",
    "name": "Difusor corazón de moras 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-corazon-moras-fb-saphirus-color-1-5cdd79c2d2b38bcf2717786097431194-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Difusor corazón de moras 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de corazón de moras 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343577903",
    "name": "Difusor honey elixir 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/https___academia-saphirus-com-ar_wp-content_uploads_2026_04_20260429-difusor-mini-honey-elixir-fb-saphirus-color-1024x1024-7da47c179be2508ddf17786096765299-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Difusor honey elixir 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de honey elixir 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343577661",
    "name": "Difusor bomba tropical 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-bomba-tropical-fb-saphirus-color-1-e25fdca6e03db3033817786096373784-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Difusor bomba tropical 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de bomba tropical 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343577501",
    "name": "Difusor jardín marino 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-jardin-marino-fb-saphirus-color-1-9e277e4a5ff889428517786096065371-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Difusor jardín marino 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de jardín marino 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343577273",
    "name": "Difusor vainilla caramel 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-vanilla-caramel-fb-saphirus-1-2d31550b97f1e987bf17786095550556-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Difusor vainilla caramel 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de vainilla caramel 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343576967",
    "name": "Difusor sweet bubble 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-sweet-bubble-fb-saphirus-color-1-ea6b975142d512ff0217786095157473-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Difusor sweet bubble 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de sweet bubble 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343576641",
    "name": "Difusor strawberry and roses 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-strawberry-and-roses-fb-saphirus-color-1-dfb403485639af198817786094712207-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Difusor strawberry and roses 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de strawberry and roses 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-343576352",
    "name": "Difusor brisa floral 60ml",
    "category": "difusores",
    "categoryLabel": "Difusor Saphirus 60ml",
    "price": 3000,
    "size": "60ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20260429-difusor-mini-brisa-floral-fb-saphirus-color-1-67df500f6ca953238617786093442463-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Difusor brisa floral 60ml. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de brisa floral 60ml.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-259554188",
    "name": "Aerosol Clean Cotton",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250107-aerosol-clean-cotton-saphirus-1-5d94b260dd61578d3d17418065446097-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aerosol Clean Cotton. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259553808",
    "name": "Aerosol Mango",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20250107-aerosol-mango-saphirus-1a6bd4cca781f0484717418064508870-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Aerosol Mango. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259553365",
    "name": "Aerosol Peonias y Cedro",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20241030-aerosol-peonias-y-cedro-saphirus-812ce9ff5b7099bd1817418063860323-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Aerosol Peonias y Cedro. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia floral.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259553096",
    "name": "Aerosol Wanted",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20241030-aerosol-wanted-saphirus-9ec6367a11e7a7a28017418063423990-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aerosol Wanted. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182177273",
    "name": "Aerosol Violetas",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-violetas-b44e2a746044f47c6717067222062528-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Aerosol Violetas. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia floral.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182177195",
    "name": "Aerosol Verbena",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-verbena-797e62459de7627a3a17067222689177-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Aerosol Verbena. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182177106",
    "name": "Aerosol Vainilla",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-vainilla-b99a8c6629d7ba1a5d17072464899282-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Aerosol Vainilla. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia dulce/gourmet.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182177027",
    "name": "Aerosol Uva",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-uva-3af43cb7b871f3619317072465667214-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Aerosol Uva. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182176956",
    "name": "Aerosol Tropical",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-tropical-2584b34d167bdd815917072464279466-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Aerosol Tropical. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182176872",
    "name": "Aerosol Tokyo",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-tokyo-7f18d7a1f10c03011517072454620831-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aerosol Tokyo. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182176794",
    "name": "Aerosol Tilo",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-tilo-d0bd19d9d0305066e017072471753696-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aerosol Tilo. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182176699",
    "name": "Aerosol Rosas",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-rosas-9408497bf8fc86d3b017072471588515-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Aerosol Rosas. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia floral.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182176605",
    "name": "Aerosol Rocío",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-rocio-31192f2a6cf8d0a6ba17072454378940-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aerosol Rocío. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182176507",
    "name": "Aerosol Pitanga",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-pitanga-a051f424bb870605b817072452792191-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aerosol Pitanga. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182176418",
    "name": "Aerosol Peras y Flores",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-peras-y-flores-fab1af23d377016cfa17072453258448-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Aerosol Peras y Flores. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia floral.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182176318",
    "name": "Aerosol Paula",
    "category": "aerosoles",
    "categoryLabel": "Aerosol Ambiental",
    "price": 2900,
    "size": "270ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aerosoles-paula-cd81325a058555433817072435376686-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aerosol Paula. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-259562969",
    "name": "Repuesto Touch Pétalos Florales",
    "category": "aerosoles",
    "categoryLabel": "Saphirus Touch",
    "price": 2500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240719-blister-individual-petalos-florales-saphirus-6026e873733f0f8f3d17418085978682-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Repuesto Touch Pétalos Florales. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Repuesto Touch Pétalos Florales.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-259562758",
    "name": "Repuesto Touch Agua Marina",
    "category": "aerosoles",
    "categoryLabel": "Saphirus Touch",
    "price": 2500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240719-blister-individual-agua-marina-saphirus-006692c66bdb0b72a317418085507455-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Repuesto Touch Agua Marina. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Repuesto Touch Agua Marina.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-259562583",
    "name": "Repuesto Touch Frutos Rojos",
    "category": "aerosoles",
    "categoryLabel": "Saphirus Touch",
    "price": 2500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240719-blister-individual-frutos-rojos-saphirus-c0596b53ab233a3be417418085108733-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Repuesto Touch Frutos Rojos. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Repuesto Touch Frutos Rojos.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-259562436",
    "name": "Repuesto Touch Mix Citrico",
    "category": "aerosoles",
    "categoryLabel": "Saphirus Touch",
    "price": 2500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240719-blister-individual-mix-citricos-saphirus-026ca9641c7156413d17418084749969-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Repuesto Touch Mix Citrico. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Repuesto Touch Mix Citrico.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-259562260",
    "name": "Dispositivo Golden Sand + Repuesto Touch Mix Citrico",
    "category": "aerosoles",
    "categoryLabel": "Saphirus Touch",
    "price": 2500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240719-blister-compuesto-golden-sand-y-mix-citricos-saphirus-89eff768837a6b97b217418084258119-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Dispositivo Golden Sand + Repuesto Touch Mix Citrico. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Dispositivo Golden Sand + Repuesto Touch Mix Citrico.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-259562047",
    "name": "Dispositivo Light Blue + Repuesto Touch Agua Marina",
    "category": "aerosoles",
    "categoryLabel": "Saphirus Touch",
    "price": 2500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240719-blister-compuesto-light-blue-y-agua-marina-saphirus-cfe06b38eed29bbc1c17418083707779-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Dispositivo Light Blue + Repuesto Touch Agua Marina. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Dispositivo Light Blue + Repuesto Touch Agua Marina.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-259561805",
    "name": "Dispositivo White + Respuesto Touch Frutos Rojos",
    "category": "aerosoles",
    "categoryLabel": "Saphirus Touch",
    "price": 2500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240719-blister-compuesto-white-y-frutos-rojos-saphirus-99d6ff2d90db76f01e17418082866798-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Dispositivo White + Respuesto Touch Frutos Rojos. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Dispositivo White + Respuesto Touch Frutos Rojos.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-259561531",
    "name": "Dispositivo Soft Rose + Repuesto Touch Pétalos Florales",
    "category": "aerosoles",
    "categoryLabel": "Saphirus Touch",
    "price": 2500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240719-blister-compuesto-soft-rose-y-petalos-florales-saphirus-e28e9b592ffa8dae8f17418082299485-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Dispositivo Soft Rose + Repuesto Touch Pétalos Florales. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Dispositivo Soft Rose + Repuesto Touch Pétalos Florales.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182352972",
    "name": "Sahumerios Vrindavan Flower",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-vrindavanflower-430x4301-12eaafa05f4c36e02116939468217872-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Vrindavan Flower. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Vrindavan Flower.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182352614",
    "name": "Sahumerios Sweet Basil",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-sweetbasil-430x4301-2d8ae8f5ffb2eb862316939467253225-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Sweet Basil. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Sweet Basil.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182352505",
    "name": "Sahumerios Sándalo Madera",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-sandalwood-430x4301-d57c3bdfd5b718011316939466849015-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Sándalo Madera. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Sándalo Madera.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182352401",
    "name": "Sahumerios Patchouli",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-patchouli-430x4301-abbeb6285e29d9744716939466264570-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Patchouli. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Patchouli.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182352214",
    "name": "Sahumerios Nag Champa",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-nagchampa-430x4301-2445db44532e37d98416939465328999-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Nag Champa. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Nag Champa.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182352098",
    "name": "Sahumerios Musk",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-musk-430x4301-104243a21e736e5b0516939464878253-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Musk. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Musk.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182352002",
    "name": "Sahumerios Frankincense",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-frankincense-430x4301-60cd9a377c12da977a16939464252096-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Frankincense. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Frankincense.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182351530",
    "name": "Sahumerios Cinnamon",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-cinnamon-430x4301-0844dfa24a44bf2ff916939463238984-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Cinnamon. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Cinnamon.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182351166",
    "name": "Sahumerios Amber",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-amber-430x4301-8e91e941d286be2f7016939462579188-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Amber. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Amber.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182352760",
    "name": "Sahumerios Vainilla",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-vainilla-430x4301-f1fb08f97c123db81116939467689403-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Sahumerios Vainilla. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Vainilla.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182352293",
    "name": "Sahumerios Palo Santo",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-palosanto-430x4301-858e917904c037769016939465813197-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Palo Santo. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Palo Santo.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182351818",
    "name": "Sahumerios Fancy Bouquet",
    "category": "sahumerios",
    "categoryLabel": "Sahumerios Saphirus",
    "price": 1500,
    "size": "12 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sahumerios-fancybouquet-430x4301-38af3be7f0c050ec0416939463740819-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Sahumerios Fancy Bouquet. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Sahumerios Fancy Bouquet.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-214583133",
    "name": "Aceite para Hornillos Ruda y Romero",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240523-ambar-aceite-hornillo-ruda-y-romero-870d21b2f3ce79a81b17169025719607-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Ruda y Romero. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Ruda y Romero.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-214582927",
    "name": "Aceite para Hornillos Cedro",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/20240523-ambar-aceite-hornillo-cedro-6ac93e53d780e86e4417169025115531-640-0.webp",
    "featured": false,
    "family": "amaderado",
    "familyLabel": "Amaderado",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Cedro. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Cedro.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-201508341",
    "name": "Aceite para Hornillos Rosas",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/aceite-para-hornillos-saphirus-rosas-d2688a46b48a5bc87617083467042133-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Rosas. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Rosas.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-201508263",
    "name": "Aceite para Hornillos Frutilla",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/aceite-para-hornillos-saphirus-frutilla-5d0017400d17b7b61717083466276492-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Frutilla. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Frutilla.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191605984",
    "name": "Aceite para Hornillos Dragon&#039;s Blood",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aceite-esencial-dragons-blood-c35f214392ce84e05b17005786748050-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Dragon&#039;s Blood. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Dragon&#039;s Blood.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191605865",
    "name": "Aceite para Hornillos Albahaca y Canela",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/albahaca-y-canela-1200x1200-1-3c2e37747a37893f7317005786263967-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Albahaca y Canela. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Albahaca y Canela.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191605785",
    "name": "Aceite para Hornillos White Sage",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/white-sage-1200x1200-1-1a8d330111c4ce7e2017005785846519-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos White Sage. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos White Sage.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191605708",
    "name": "Aceite para Hornillos Verbena",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/verbena-1200x1200-1-20cbc49d4af33ddb0417005785501942-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Verbena. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Verbena.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-181946252",
    "name": "Aceite para Hornillos Night Queen",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aceites-queen-2a31b9a5078f3f070017086286250240-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Night Queen. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Night Queen.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-181946170",
    "name": "Aceite para Hornillos Menta",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aceites-menta-40621d56883a02666517086286972603-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Menta. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Menta.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-181946067",
    "name": "Aceite para Hornillos Mango",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aceites-mango-2c7720111d73a0720617086287544636-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Mango. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Mango.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-181945287",
    "name": "Aceite para Hornillos Bergamota",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-aceites-bergamota11-603ce6ad9a733739e416935857829050-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Bergamota. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Bergamota.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-181945200",
    "name": "Aceite para Hornillos Vrindavan",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/dv08ezrvvuz5nunfnvh1mes7qoqqaj4zltrdtno6-4-f2e8cd2f82c30e13a717086285398460-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Vrindavan. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Vrindavan.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-181944966",
    "name": "Aceite para Hornillos New Delhi",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/dlishhyocshupkalco90wgtzdussujxmdf7hdmdw-1-771e4040e6ef58a60b17086284950235-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos New Delhi. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos New Delhi.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-181944854",
    "name": "Aceite para Hornillos Cinnamon",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/aceite-cinnamon-1-1402fc882ff5c662ac17086282257516-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Cinnamon. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Cinnamon.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-181944105",
    "name": "Aceite para Hornillos Amber",
    "category": "aceites",
    "categoryLabel": "Aceites Saphirus",
    "price": 2000,
    "size": "10ml",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/aceite-amber-1-ec6a7e3836f878bf3c17086281552507-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Aceite para Hornillos Amber. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Aceite para Hornillos Amber.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-182185664",
    "name": "Caritas Naranja",
    "category": "otros",
    "categoryLabel": "Caritas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/naranja-1200x1200-1-eec14bb1e502a89ba217086293876290-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Caritas Naranja. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182185598",
    "name": "Caritas Multifruta",
    "category": "otros",
    "categoryLabel": "Caritas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/multifruta-1200x1200-1-21bf2a8cb92643ca1a17086293245603-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Caritas Multifruta. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182185529",
    "name": "Caritas Manzana",
    "category": "otros",
    "categoryLabel": "Caritas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/manzana-1200x1200-1-be4b06fb1fc248816017086293427777-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Caritas Manzana. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182185408",
    "name": "Caritas Lima Limón",
    "category": "otros",
    "categoryLabel": "Caritas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/lima-limon-1200x1200-1-3351f04e1ebf12e70217086294027534-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Caritas Lima Limón. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182181508",
    "name": "Caritas Sport",
    "category": "otros",
    "categoryLabel": "Caritas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/sport-1200x1200-1-145ba2fcb16cd2a5a717086293569626-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Caritas Sport. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182181392",
    "name": "Caritas Frutos Rojos",
    "category": "otros",
    "categoryLabel": "Caritas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/frutos-rojos-1200x1200-1-f9e659873eb5018f4a17086294186650-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Caritas Frutos Rojos. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182181308",
    "name": "Caritas Caribe",
    "category": "otros",
    "categoryLabel": "Caritas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/caribe-1200x1200-1-cf55fc4a4992d86db617086293711651-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Caritas Caribe. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182181229",
    "name": "Caritas Aqua",
    "category": "otros",
    "categoryLabel": "Caritas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/aqua-1200x1200-1-9c52ee14807224f73617086291265672-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Caritas Aqua. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182347626",
    "name": "Route 66 Tutti Frutti",
    "category": "otros",
    "categoryLabel": "Route 66 Auto",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/tuttifrutti-route-430x4301-e78ede4647d8ebf72416939451899196-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Route 66 Tutti Frutti. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182347281",
    "name": "Route 66 Tropical",
    "category": "otros",
    "categoryLabel": "Route 66 Auto",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/tropical-route-430x4301-9f159ab52861c8836616939451065013-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Route 66 Tropical. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182347189",
    "name": "Route 66 Uva",
    "category": "otros",
    "categoryLabel": "Route 66 Auto",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-uva-route-430x4301-c97c3a0e70cdbbab9416939450718303-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Route 66 Uva. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182346310",
    "name": "Route 66 Naranja Frutilla",
    "category": "otros",
    "categoryLabel": "Route 66 Auto",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/saphirus-naranja-frutilla-route-430x4301-7a369d9b038376ae4216939446055524-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Route 66 Naranja Frutilla. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182346200",
    "name": "Route 66 Polo",
    "category": "otros",
    "categoryLabel": "Route 66 Auto",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/polo-route-430x4301-a3c6c7d0d5fed874b016939445571546-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Route 66 Polo. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182346036",
    "name": "Route 66 Naranja",
    "category": "otros",
    "categoryLabel": "Route 66 Auto",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/naranja-route-430x4301-c26a2f54bdc4cd8b8916939444783635-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Route 66 Naranja. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182345912",
    "name": "Route 66 Marino",
    "category": "otros",
    "categoryLabel": "Route 66 Auto",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/marino-route-430x4301-7ffd93dab91b8743f716939444360516-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Route 66 Marino. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182345766",
    "name": "Route 66 Manzana",
    "category": "otros",
    "categoryLabel": "Route 66 Auto",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/manzana-route-430x4301-ae8ffabc36f4e9af9f16939443850837-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Route 66 Manzana. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182345664",
    "name": "Route 66 Frutos Rojos",
    "category": "otros",
    "categoryLabel": "Route 66 Auto",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/frutosrojos-route-430x4301-a1d93239b5933a2a0316939443451296-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Route 66 Frutos Rojos. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-182345481",
    "name": "Route 66 Cítrico",
    "category": "otros",
    "categoryLabel": "Route 66 Auto",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/citrus-route-430x4301-4b27ed63fe1a7f679d16939443012651-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Route 66 Cítrico. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia cítrico.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-187878855",
    "name": "Tarjeta Aromática Frutos Tropicales",
    "category": "otros",
    "categoryLabel": "Tarjetas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/frutos-tropicales-562f2b5f29b7b5869716980687806270-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Tarjeta Aromática Frutos Tropicales. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-187878779",
    "name": "Tarjeta Aromática Rosas y Neroli",
    "category": "otros",
    "categoryLabel": "Tarjetas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/rosas-y-neroli-5bc15d9a3b8f0202cf16980687282938-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Tarjeta Aromática Rosas y Neroli. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia floral.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-187876352",
    "name": "Tarjeta Aromática Magnolia y Vainilla",
    "category": "otros",
    "categoryLabel": "Tarjetas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/magnolia-y-vainilla-33e453b3a84c16e8d2169806740530511-fcd324337219bd692016980675902839-240-0.png",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Tarjeta Aromática Magnolia y Vainilla. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia dulce/gourmet.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-187875479",
    "name": "Tarjeta Aromatica Lima y Menta",
    "category": "otros",
    "categoryLabel": "Tarjetas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/lima-y-menta-5debc8f09769d3938416980668281798-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Tarjeta Aromatica Lima y Menta. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia fresco/herbal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-187875240",
    "name": "Tarjeta Aromática Lavanda y Manzanilla",
    "category": "otros",
    "categoryLabel": "Tarjetas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/lavanda-y-manzanilla-5f4000671bce889d3416980666924179-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Tarjeta Aromática Lavanda y Manzanilla. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia floral.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-187875028",
    "name": "Tarjeta Aromática Cereza Malbec",
    "category": "otros",
    "categoryLabel": "Tarjetas Aromáticas",
    "price": 1500,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/cereza-malbec-0dbcdcc79f8bff2a24169806654761481-baec71653bd706483216980666145441-240-0.png",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Tarjeta Aromática Cereza Malbec. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Acordes de salida vibrantes y característicos de la familia frutal.",
      "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
      "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
    }
  },
  {
    "id": "sheru-191606237",
    "name": "Air Cool Manzana Verde",
    "category": "otros",
    "categoryLabel": "Saphirus Air Cool",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/r8e16q07fp2h49urlsssi0zkb5to6lzk7yhxh8ph-2-9264f280cd702efbcf17005787942584-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Air Cool Manzana Verde. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Air Cool Manzana Verde.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191680376",
    "name": "Air Cool Lavanda",
    "category": "otros",
    "categoryLabel": "Saphirus Air Cool",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/qmzll57ubaff0wfroyvwt1f8dsllk6ngdytfckv0-1-99aa8b9a03e7da861217005984421469-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Air Cool Lavanda. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Air Cool Lavanda.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191680258",
    "name": "Air Cool Flores Blancas",
    "category": "otros",
    "categoryLabel": "Saphirus Air Cool",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/gxxvziiltqdcfd8sstjowarhgiulorvfhrsejcgv-1-8cd2ec26cda84c2f9417005983922057-640-0.webp",
    "featured": false,
    "family": "floral",
    "familyLabel": "Floral",
    "description": "Experimenta el encantador aroma Air Cool Flores Blancas. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Air Cool Flores Blancas.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191679899",
    "name": "Air Cool Bamboo",
    "category": "otros",
    "categoryLabel": "Saphirus Air Cool",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/givz38evyedum6u4sefppej64mfuxbucqmncmzoe-1-1c7ce213a6a2c735d517005982308040-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Air Cool Bamboo. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Air Cool Bamboo.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191679658",
    "name": "Air Cool Coco",
    "category": "otros",
    "categoryLabel": "Saphirus Air Cool",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/cmwyhibdoktzzkuauycar3fcdnlekspn2so73f19-1-7c0c9e25c608e82a8117005981547557-640-0.webp",
    "featured": false,
    "family": "dulce",
    "familyLabel": "Dulce/Gourmet",
    "description": "Experimenta el encantador aroma Air Cool Coco. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Air Cool Coco.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191679561",
    "name": "Air Cool Frutos Rojos",
    "category": "otros",
    "categoryLabel": "Saphirus Air Cool",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/aircool_frutosrojos-dfaa2d8eac7b90b39217005981152407-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Air Cool Frutos Rojos. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Air Cool Frutos Rojos.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191679210",
    "name": "Air Cool Limón",
    "category": "otros",
    "categoryLabel": "Saphirus Air Cool",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/8r1alkpdb5xefb9ubnesfzimmwhol1581slgucyx-1-ff33f34bdb48c783b617005981036482-640-0.webp",
    "featured": false,
    "family": "citrico",
    "familyLabel": "Cítrico",
    "description": "Experimenta el encantador aroma Air Cool Limón. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Air Cool Limón.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191677432",
    "name": "Air Cool Uva",
    "category": "otros",
    "categoryLabel": "Saphirus Air Cool",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/6esiexcmiqglgvdt3m2vqidbhyri2ckhqpkook1n-1-542591b94ed44c766617005976634701-640-0.webp",
    "featured": false,
    "family": "frutal",
    "familyLabel": "Frutal",
    "description": "Experimenta el encantador aroma Air Cool Uva. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Air Cool Uva.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191676740",
    "name": "Air Cool Acqua",
    "category": "otros",
    "categoryLabel": "Saphirus Air Cool",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/1ova3o26hl4h9ifmgkzjhlna5s9eymqljccmzs4u-1-1c64b9826fe66ca02217005975107952-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Air Cool Acqua. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Air Cool Acqua.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  },
  {
    "id": "sheru-191676242",
    "name": "Air Cool Chicle",
    "category": "otros",
    "categoryLabel": "Saphirus Air Cool",
    "price": 1800,
    "size": "1 u.",
    "image": "https://dcdn-us.mitiendanube.com/stores/003/593/083/products/1o3izmmyw3tq0ne1gjaqnkpk7txq3vjcfahjcro3-1-ef8085e8fb1703089417005973920562-640-0.webp",
    "featured": false,
    "family": "fresco",
    "familyLabel": "Fresco/Herbal",
    "description": "Experimenta el encantador aroma Air Cool Chicle. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos.",
    "notes": {
      "salida": "Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
      "corazon": "Esencia concentrada de Air Cool Chicle.",
      "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
    }
  }
];

const FILTER_DATA = {
  categories: {
    all: 'Todas las Colecciones',
    perfumes: 'Perfumes Milano',
    textiles: 'Aromatizantes Textiles',
    difusores: 'Difusores Premium',
    aerosoles: 'Aerosoles Saphirus',
    sahumerios: 'Sahumerios',
    aceites: 'Aceites Hornillo',
    otros: 'Otros'
  },
  families: {
    all: 'Todas las Familias',
    floral: 'Floral',
    dulce: 'Dulce/Gourmet',
    citrico: 'Cítrico',
    frutal: 'Frutal',
    amaderado: 'Amaderado',
    fresco: 'Fresco/Herbal'
  }
};
