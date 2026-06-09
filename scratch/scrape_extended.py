import urllib.request
import re
import json
import os

def clean_html_tags(text):
    return re.sub('<[^<]+?>', '', text).strip()

def scrape_category_url(url, category, category_label, default_size, default_price):
    products = []
    print(f"Scrapeando categoria {category_label} desde: {url}")
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
    except Exception as e:
        print(f"Error al cargar {url}: {e}")
        return products
        
    product_chunks = re.split(r'class="[^"]*js-item-product[^"]*"', html)[1:]
    print(f"Encontrados {len(product_chunks)} fragmentos de productos.")
    
    for chunk in product_chunks:
        # Extract product ID
        id_match = re.search(r'data-product-id="(\d+)"', chunk)
        if not id_match:
            continue
        product_id = id_match.group(1)
        
        # Extract product name
        name_match = re.search(r'class="[^"]*item-name[^"]*"[^>]*>([^<]+)</div>', chunk)
        if not name_match:
            name_match = re.search(r'title="([^"]+)"\s+aria-label=', chunk)
            if not name_match:
                continue
        product_name = name_match.group(1).strip()
        
        # Extract product price
        price = 0
        price_match = re.search(r'data-product-price="(\d+)"', chunk)
        if price_match:
            price = int(price_match.group(1))
            
        # Extract product image URL
        image_url = ""
        srcset_match = re.search(r'data-srcset="([^"]+)"', chunk)
        if srcset_match:
            srcset = srcset_match.group(1)
            first_url = srcset.split(',')[0].split(' ')[0].strip()
            if first_url.startswith('//'):
                image_url = "https:" + first_url
            else:
                image_url = first_url
        else:
            src_match = re.search(r'src="([^"]+)"', chunk)
            if src_match:
                src = src_match.group(1)
                if not src.startswith('data:image'):
                    if src.startswith('//'):
                        image_url = "https:" + src
                    else:
                        image_url = src
        
        # Size and Family
        size = default_size
        name_lower = product_name.lower()
        if '60ml' in name_lower: size = '60ml'
        elif '125ml' in name_lower: size = '125ml'
        elif '250ml' in name_lower: size = '250ml'
        elif '500ml' in name_lower: size = '500ml'
        elif '100ml' in name_lower: size = '100ml'
        elif '50ml' in name_lower: size = '50ml'
        elif '10ml' in name_lower: size = '10ml'
        elif '270ml' in name_lower: size = '270ml'
        elif '12 u' in name_lower or '12u' in name_lower: size = '12 u.'
        
        # Fallback price
        if price == 0:
            price = default_price
            
        # Predict Olfactory Family
        family = 'fresco'
        family_label = 'Fresco/Herbal'
        if any(w in name_lower for w in ['limon', 'limón', 'citrico', 'cítrico', 'pomelo', 'naranja', 'bergamota', 'mandarina', 'verbena', 'lemon', 'citrus']):
            family = 'citrico'
            family_label = 'Cítrico'
        elif any(w in name_lower for w in ['vainilla', 'coco', 'dulce', 'chocolate', 'caramelo', 'buttermilk', 'dulces', 'vanilla', 'honey', 'elixir', 'pistacho', 'caramel']):
            family = 'dulce'
            family_label = 'Dulce/Gourmet'
        elif any(w in name_lower for w in ['lilas', 'lavanda', 'jazmin', 'jazmín', 'flores', 'rosas', 'loto', 'gardenia', 'cony', 'orquidea', 'orquídea', 'violeta', 'roses', 'floral', 'fresias', 'magnolia', 'peonias', 'peonia']):
            family = 'floral'
            family_label = 'Floral'
        elif any(w in name_lower for w in ['uva', 'frutilla', 'manzana', 'durazno', 'mango', 'cereza', 'melon', 'melón', 'pera', 'hawai', 'hawaii', 'frutal', 'frutos', 'arandano', 'arándano', 'tropical', 'moras', 'strawberry', 'bubble', 'bomba']):
            family = 'frutal'
            family_label = 'Frutal'
        elif any(w in name_lower for w in ['pino', 'cedro', 'sándalo', 'sandaloid', 'madera', 'pachuli', 'pachulí', 'patagonia', 'oriental', 'sahumerio', 'bosque', 'wood', 'darth', 'vader', 'spicy', 'cuero', 'ambar', 'ámbar']):
            family = 'amaderado'
            family_label = 'Amaderado'
        elif any(w in name_lower for w in ['bebe', 'bebê', 'talco', 'algodon', 'algodón', 'clean', 'fresco', 'eucalipto', 'herbal', 'menta', 'agreste', 'marino', 'brisas', 'ocean', 'oceánico', 'breeze', 'bambú', 'bambu']):
            family = 'fresco'
            family_label = 'Fresco/Herbal'
            
        if image_url:
            image_url = re.sub(r'-\d+-\d+\.webp', '-640-0.webp', image_url)
            # Make sure it's secure URL
            if image_url.startswith('http://'):
                image_url = image_url.replace('http://', 'https://')
            
        # Customize notes based on family to make it look premium
        notes = {
            "salida": f"Acordes de salida vibrantes y característicos de la familia {family_label.lower()}.",
            "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
            "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
        }
        
        # Specific details for well-known scents
        if 'million' in name_lower or '205' in name_lower:
            notes = {"salida": "Mandarina sanguínea, toronja (pomelo) y menta.", "corazon": "Canela, notas especiadas y rosa.", "fondo": "Cuero, notas amaderadas, ámbar y pachulí hindú."}
        elif 'good girl' in name_lower or '502' in name_lower:
            notes = {"salida": "Almendra, café, bergamota y limón.", "corazon": "Nardo, jazmín sambac, flor de azahar, raíz de lirio y rosa de Bulgaria.", "fondo": "Habal tonka, cacao, vainilla, praliné, sándalo, ámbar y almizcle."}
        elif 'sauv' in name_lower or '212' in name_lower and 'sauv' in name_lower:
            notes = {"salida": "Pimienta de Sichuan, bergamota de Calabria y pimienta.", "corazon": "Lavanda, geranio, pimienta rosa y elemí.", "fondo": "Ambroxan, cedro y ládano."}
        elif 'olympea' in name_lower or '504' in name_lower:
            notes = {"salida": "Jazmín de agua, mandarina verde y flor de jengibre.", "corazon": "Vainilla salada y acordes marinos.", "fondo": "Ámbar gris, madera de cachemira y sándalo."}
        elif 'bell' in name_lower or 'vida' in name_lower or '514' in name_lower:
            notes = {"salida": "Grosellas negras y pera.", "corazon": "Iris, jazmín y flor de azahar del naranjo.", "fondo": "Pranilé, vainilla, pachulí y haba tonka."}
        elif 'saphirus' in category_label.lower():
            # Ambient sprays/diffusers
            notes = {
                "salida": f"Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
                "corazon": f"Esencia concentrada de {product_name.replace('Textil ', '').replace('Difusor ', '')}.",
                "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
            }
            
        description = f"Experimenta el encantador aroma {product_name}. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos."
        
        products.append({
            "id": f"sheru-{product_id}",
            "name": product_name,
            "category": category,
            "categoryLabel": category_label,
            "price": price,
            "size": size,
            "image": image_url,
            "featured": False,
            "family": family,
            "familyLabel": family_label,
            "description": description,
            "notes": notes
        })
        
    return products

def main():
    print("Iniciando scraper extendido por categorías de sheru.com.ar...")
    all_products = []
    
    # Define categories to scrape
    categories = [
        # Milano Perfumes
        {
            "url": "https://sheru.com.ar/milano1/perfume-mini1/",
            "category": "perfumes",
            "categoryLabel": "Perfumes Milano",
            "default_size": "50ml",
            "default_price": 9500
        },
        {
            "url": "https://sheru.com.ar/milano1/perfumeria-fina1/",
            "category": "perfumes",
            "categoryLabel": "Perfumes Milano",
            "default_size": "100ml",
            "default_price": 12000
        },
        {
            "url": "https://sheru.com.ar/milano1/body-splash1/",
            "category": "otros",
            "categoryLabel": "Body Splash Milano",
            "default_size": "125ml",
            "default_price": 6500
        },
        {
            "url": "https://sheru.com.ar/saphirus-parfum/perfumes/",
            "category": "perfumes",
            "categoryLabel": "Saphirus Corporal",
            "default_size": "100ml",
            "default_price": 11000
        },
        # Textiles
        {
            "url": "https://sheru.com.ar/saphirus1/aromatizante-textil/",
            "category": "textiles",
            "categoryLabel": "Aromatizante Textil",
            "default_size": "250ml",
            "default_price": 3200
        },
        {
            "url": "https://sheru.com.ar/saphirus1/home-spray1/",
            "category": "textiles",
            "categoryLabel": "Home Spray Saphirus",
            "default_size": "500ml",
            "default_price": 4000
        },
        # Reed Diffusers
        {
            "url": "https://sheru.com.ar/saphirus1/difusor-aromatico/",
            "category": "difusores",
            "categoryLabel": "Difusor de Aromas",
            "default_size": "125ml",
            "default_price": 4500
        },
        {
            "url": "https://sheru.com.ar/saphirus1/difusor-premium1/",
            "category": "difusores",
            "categoryLabel": "Difusor Premium",
            "default_size": "250ml",
            "default_price": 5500
        },
        {
            "url": "https://sheru.com.ar/saphirus1/difusor-60ml/",
            "category": "difusores",
            "categoryLabel": "Difusor Saphirus 60ml",
            "default_size": "60ml",
            "default_price": 3000
        },
        # Aerosols
        {
            "url": "https://sheru.com.ar/saphirus1/aerosol-ambiental/",
            "category": "aerosoles",
            "categoryLabel": "Aerosol Ambiental",
            "default_size": "270ml",
            "default_price": 2900
        },
        {
            "url": "https://sheru.com.ar/saphirus1/touch/",
            "category": "aerosoles",
            "categoryLabel": "Saphirus Touch",
            "default_size": "1 u.",
            "default_price": 2500
        },
        # Sahumerios
        {
            "url": "https://sheru.com.ar/saphirus1/sahumerios1/",
            "category": "sahumerios",
            "categoryLabel": "Sahumerios Saphirus",
            "default_size": "12 u.",
            "default_price": 1500
        },
        # Aceites
        {
            "url": "https://sheru.com.ar/saphirus1/aceite-esencial2/",
            "category": "aceites",
            "categoryLabel": "Aceites Saphirus",
            "default_size": "10ml",
            "default_price": 2000
        },
        # Otros
        {
            "url": "https://sheru.com.ar/saphirus1/caritas-aromaticas1/",
            "category": "otros",
            "categoryLabel": "Caritas Aromáticas",
            "default_size": "1 u.",
            "default_price": 1500
        },
        {
            "url": "https://sheru.com.ar/saphirus1/route-661/",
            "category": "otros",
            "categoryLabel": "Route 66 Auto",
            "default_size": "1 u.",
            "default_price": 1800
        },
        {
            "url": "https://sheru.com.ar/saphirus1/tarjetas-aromaticas1/",
            "category": "otros",
            "categoryLabel": "Tarjetas Aromáticas",
            "default_size": "1 u.",
            "default_price": 1500
        },
        {
            "url": "https://sheru.com.ar/saphirus1/air-cool1/",
            "category": "otros",
            "categoryLabel": "Saphirus Air Cool",
            "default_size": "1 u.",
            "default_price": 1800
        }
    ]
    
    for cat in categories:
        cat_prods = scrape_category_url(cat["url"], cat["category"], cat["categoryLabel"], cat["default_size"], cat["default_price"])
        all_products.extend(cat_prods)
        
    # Remove duplicates
    unique_products = []
    seen_ids = set()
    for p in all_products:
        if p["id"] not in seen_ids:
            seen_ids.add(p["id"])
            unique_products.append(p)
            
    print(f"Scraping finalizado. Encontrados {len(unique_products)} productos únicos categorizados.")
    
    # Save to products.js
    products_file_path = r"c:\Users\Rodrigo\Desktop\APP's\rodarena7-commits\fgoparfum\products.js"
    
    config_section = """const CONFIG = {
  whatsappNumber: '5491135931975', // Formatted for WhatsApp URL link (+54 9 11 3593-1975)
  shopName: 'FGOParfum',
  providerName: 'Sherú Aromas',
  currency: '$',
};
"""
    
    filter_data_section = """
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
"""
    
    with open(products_file_path, 'w', encoding='utf-8') as f:
        f.write(config_section)
        f.write("\nconst PRODUCTS = ")
        json.dump(unique_products, f, indent=2, ensure_ascii=False)
        f.write(";\n")
        f.write(filter_data_section)
        
    print(f"Guardados {len(unique_products)} productos reales en products.js!")

if __name__ == '__main__':
    main()
