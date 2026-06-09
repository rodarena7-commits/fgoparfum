const CONFIG = {
  whatsappNumber: '5491158338126', // Formatted for WhatsApp URL link (+54 9 11 5833-8126)
  shopName: 'FGOParfum',
  providerName: 'Sherú Aromas',
  currency: '$',
};

const PRODUCTS = [
  // CATEGORY: Perfumes Milano
  {
    id: 'milano-1million',
    name: 'Milano One Million',
    category: 'perfumes',
    categoryLabel: 'Perfumes Milano',
    price: 9500,
    size: '100ml',
    image: './assets/perfume_milano.png',
    featured: true,
    family: 'amaderado',
    familyLabel: 'Amaderado Especiado',
    description: 'Una fragancia audaz y elegante para hombres. Un aroma opulento que representa la sofisticación y el éxito.',
    notes: {
      salida: 'Mandarina sanguínea, menta piperita y pomelo.',
      corazon: 'Canela de Ceylán, absoluto de rosa y notas especiadas.',
      fondo: 'Cuero rubio, ámbar ketal y pachulí hindú.'
    }
  },
  {
    id: 'milano-lavida',
    name: 'Milano La Vida',
    category: 'perfumes',
    categoryLabel: 'Perfumes Milano',
    price: 9500,
    size: '100ml',
    image: './assets/perfume_milano.png',
    featured: true,
    family: 'dulce',
    familyLabel: 'Oriental Floral',
    description: 'Inspirado en la felicidad y la libertad. Un aroma dulce y sofisticado que deja una estela cautivadora y femenina.',
    notes: {
      salida: 'Grosellas negras y pera dulce.',
      corazon: 'Iris de Florencia, jazmín de Arabia y flor de azahar.',
      fondo: 'Vainilla, praliné crujiente, pachulí y haba tonka.'
    }
  },
  {
    id: 'milano-invictos',
    name: 'Milano Invictos',
    category: 'perfumes',
    categoryLabel: 'Perfumes Milano',
    price: 9500,
    size: '100ml',
    image: './assets/perfume_milano.png',
    featured: false,
    family: 'fresco',
    familyLabel: 'Fresco Amaderado',
    description: 'La fragancia de la victoria. Un aroma fresco y acuático combinado con maderas magnéticas para un impacto duradero.',
    notes: {
      salida: 'Pomelo fresco, notas marinas cristalinas y mandarina.',
      corazon: 'Hojas de laurel y jazmín imperial.',
      fondo: 'Madera de guayaco, musgo de roble, pachulí y ámbar gris.'
    }
  },
  {
    id: 'milano-blue',
    name: 'Milano Blue',
    category: 'perfumes',
    categoryLabel: 'Perfumes Milano',
    price: 9500,
    size: '100ml',
    image: './assets/perfume_milano.png',
    featured: false,
    family: 'citrico',
    familyLabel: 'Cítrico Amaderado',
    description: 'Un homenaje a la libertad masculina. Una fragancia atemporal, fresca y profundamente aromática para el hombre contemporáneo.',
    notes: {
      salida: 'Limón de Sicilia, menta piperita, pimienta rosa y pomelo.',
      corazon: 'Jengibre picante, nuez moscada y jazmín.',
      fondo: 'Sándalo de Caledonia, cedro de Virginia, incienso y pachulí.'
    }
  },
  {
    id: 'milano-aura',
    name: 'Milano Aura',
    category: 'perfumes',
    categoryLabel: 'Perfumes Milano',
    price: 9500,
    size: '100ml',
    image: './assets/perfume_milano.png',
    featured: true,
    family: 'floral',
    familyLabel: 'Floral Amaderado',
    description: 'Una fragancia misteriosa y seductora. Combina notas florales delicadas con una base cremosa y magnética de maderas preciosas.',
    notes: {
      salida: 'Frutos rojos del bosque y bergamota de Calabria.',
      corazon: 'Flor de azahar del naranjo y jazmín sambac.',
      fondo: 'Vainilla Bourbon, almizcle blanco y madera de sándalo.'
    }
  },

  // CATEGORY: Aromatizantes Textiles
  {
    id: 'textil-cocovainilla',
    name: 'Textil Coco Vainilla',
    category: 'textiles',
    categoryLabel: 'Aromatizante Textil',
    price: 3200,
    size: '250ml',
    image: './assets/aromatizante_textil.png',
    featured: true,
    family: 'dulce',
    familyLabel: 'Dulce Gourmet',
    description: 'La fragancia más vendida. Una combinación irresistible y exótica que aporta calidez y dulzura a tus prendas y ambientes.',
    notes: {
      salida: 'Coco rallado tostado y notas lácteas.',
      corazon: 'Vainilla suave, caramelo y un toque de manteca de cacao.',
      fondo: 'Heliotropo y almizcles dulces.'
    }
  },
  {
    id: 'textil-cony',
    name: 'Textil Cony',
    category: 'textiles',
    categoryLabel: 'Aromatizante Textil',
    price: 3200,
    size: '250ml',
    image: './assets/aromatizante_textil.png',
    featured: true,
    family: 'floral',
    familyLabel: 'Floral Atalcado',
    description: 'Fragancia fresca y pura, reminiscente del aroma a ropa recién lavada. Ideal para sábanas y toallas con sensación de limpieza infinita.',
    notes: {
      salida: 'Limón, neroli y notas aldehídicas limpias.',
      corazon: 'Rosas búlgaras, violetas y jazmín de agua.',
      fondo: 'Almizcle blanco, talco clásico y haba tonka.'
    }
  },
  {
    id: 'textil-patagonia',
    name: 'Textil Patagonia',
    category: 'textiles',
    categoryLabel: 'Aromatizante Textil',
    price: 3200,
    size: '250ml',
    image: './assets/aromatizante_textil.png',
    featured: false,
    family: 'fresco',
    familyLabel: 'Fresco Agreste',
    description: 'Un soplo de aire puro del sur. Aroma fresco, limpio y silvestre que evoca bosques húmedos de pinos y montañas heladas.',
    notes: {
      salida: 'Pino silvestre, eucalipto y hojas de menta.',
      corazon: 'Lavanda de monte, romero y notas ozónicas cristalinas.',
      fondo: 'Cedro andino, musgo de roble y maderas claras.'
    }
  },
  {
    id: 'textil-hawai',
    name: 'Textil Hawai',
    category: 'textiles',
    categoryLabel: 'Aromatizante Textil',
    price: 3200,
    size: '250ml',
    image: './assets/aromatizante_textil.png',
    featured: false,
    family: 'frutal',
    familyLabel: 'Frutal Tropical',
    description: 'Una explosión alegre de frutas tropicales. Llena tu hogar y ropa de una energía caribeña, dulce y jugosa.',
    notes: {
      salida: 'Piña madura, durazno dulce y melón.',
      corazon: 'Mango jugoso, maracuyá y papaya.',
      fondo: 'Notas almibaradas de azúcar y coco sutil.'
    }
  },
  {
    id: 'textil-bebe',
    name: 'Textil Bebé',
    category: 'textiles',
    categoryLabel: 'Aromatizante Textil',
    price: 3200,
    size: '250ml',
    image: './assets/aromatizante_textil.png',
    featured: false,
    family: 'floral',
    familyLabel: 'Fresco Atalcado',
    description: 'El clásico y tierno aroma infantil. Suave, relajante y delicado, perfecto para el cuarto de los niños y ropa de cuna.',
    notes: {
      salida: 'Manzanilla romana, notas cítricas suaves y lavanda.',
      corazon: 'Pétalos de rosa, violetas silvestres y lilas.',
      fondo: 'Talco de bebé, vainilla cremosa y almizcle.'
    }
  },

  // CATEGORY: Difusores Aromáticos
  {
    id: 'difusor-vainilla',
    name: 'Difusor Vainilla Premium',
    category: 'difusores',
    categoryLabel: 'Difusor de Aromas',
    price: 4500,
    size: '125ml',
    image: './assets/difusor_aromatico.png',
    featured: true,
    family: 'dulce',
    familyLabel: 'Dulce Vainilla',
    description: 'Aroma ambiental constante y reconfortante. Llena tu sala con un perfume de vainilla dulce de alta concentración y varillas de bambú.',
    notes: {
      salida: 'Vainilla en rama y flores de vainilla.',
      corazon: 'Azúcar quemado, caramelo blando y miel silvestre.',
      fondo: 'Bálsamo de benjuí y almizcle cálido.'
    }
  },
  {
    id: 'difusor-lilas',
    name: 'Difusor Lilas Premium',
    category: 'difusores',
    categoryLabel: 'Difusor de Aromas',
    price: 4500,
    size: '125ml',
    image: './assets/difusor_aromatico.png',
    featured: false,
    family: 'floral',
    familyLabel: 'Floral Delicado',
    description: 'Un jardín primaveral en tu hogar. Aroma floral delicado que transmite paz, frescura y elegancia natural a cualquier espacio.',
    notes: {
      salida: 'Hojas verdes de lilas, neroli y jacinto.',
      corazon: 'Lilas en flor, jazmín blanco e ylang-ylang.',
      fondo: 'Almizcle blanco y un leve toque de madera de cedro.'
    }
  },
  {
    id: 'difusor-lavanda',
    name: 'Difusor Lavanda Premium',
    category: 'difusores',
    categoryLabel: 'Difusor de Aromas',
    price: 4500,
    size: '125ml',
    image: './assets/difusor_aromatico.png',
    featured: false,
    family: 'fresco',
    familyLabel: 'Fresco Herbal',
    description: 'Ideal para dormitorios y espacios de relajación. Sus aceites naturales de lavanda promueven un descanso profundo y calma mental.',
    notes: {
      salida: 'Flores de lavanda provenzal y hojas de romero.',
      corazon: 'Alcanfor suave, tomillo y salvia sclarea.',
      fondo: 'Maderas suaves de pino y almizcles limpios.'
    }
  },
  {
    id: 'difusor-uva',
    name: 'Difusor Uva Premium',
    category: 'difusores',
    categoryLabel: 'Difusor de Aromas',
    price: 4500,
    size: '125ml',
    image: './assets/difusor_aromatico.png',
    featured: true,
    family: 'frutal',
    familyLabel: 'Frutal Dulce',
    description: 'Intenso, alegre y deliciosamente frutal. Un aroma vibrante que perfuma espacios amplios de manera súper eficaz.',
    notes: {
      salida: 'Uvas tintas dulces, frutos rojos y grosellas.',
      corazon: 'Cerezas silvestres, ciruela negra y pulpa de durazno.',
      fondo: 'Azúcar caramelizado y almizcle frutal.'
    }
  }
];

// Families and categories dictionary for UI and filters
const FILTER_DATA = {
  categories: {
    all: 'Todas las Colecciones',
    perfumes: 'Perfumes Milano',
    textiles: 'Aromatizantes Textiles',
    difusores: 'Difusores Premium'
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
