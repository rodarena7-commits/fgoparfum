import urllib.request
import re
import json
import os

def clean_html_tags(text):
    return re.sub('<[^<]+?>', '', text).strip()

def classify_product(name):
    name_lower = name.lower()
    
    # 1. perfumes
    if any(w in name_lower for w in ['perfume', 'parfum', 'fina', 'colonia', 'fragancia corporal', 'milano corporal', 'corporal', 'splash', 'splash1', 'body splash']) and not 'textil' in name_lower and not 'difusor' in name_lower:
        return 'perfumes', 'Perfumes Milano'
        
    # 2. textiles
    if any(w in name_lower for w in ['textil', 'ropa', 'telas', 'home spray', 'spray de ambientes', 'aromatizante textil']):
        return 'textiles', 'Aromatizante Textil'
        
    # 3. difusores
    if any(w in name_lower for w in ['difusor', 'varillas', 'reed', 'difusores']):
        return 'difusores', 'Difusor de Aromas'
        
    # 4. aerosoles
    if any(w in name_lower for w in ['aerosol', 'touch', 'repuesto', 'equipo', 'dispenser', 'aromatizador', 'aparato']):
        return 'aerosoles', 'Aerosol Ambiental'
        
    # 5. sahumerios
    if any(w in name_lower for w in ['sahumerio', 'sahumerios', 'incienso', 'carbón', 'carboncito']):
        return 'sahumerios', 'Sahumerios Saphirus'
        
    # 6. aceites
    if any(w in name_lower for w in ['aceite', 'esencial', 'hornillo', 'esencia para hornillo', 'aceites']):
        return 'aceites', 'Aceites Saphirus'
        
    # Default fallback is 'otros'
    return 'otros', 'Otros'

def main():
    print("Iniciando scraper extendido por categorías de sheru.com.ar...")
    products_file_path = "products.js"
    
    # 1. Load existing products.js to parse existing PRODUCTS
    existing_products = []
    if os.path.exists(products_file_path):
        try:
            with open(products_file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            # Find PRODUCTS array
            match = re.search(r'const PRODUCTS\s*=\s*(\[.*?\]);\s*const FILTER_DATA', content, re.DOTALL)
            if match:
                existing_products = json.loads(match.group(1))
                print(f"Base de datos cargada. Contiene {len(existing_products)} productos actualmente.")
        except Exception as e:
            print(f"Error al leer/parsear products.js existente: {e}")
            
    # Map existing products by ID
    existing_dict = {p["id"]: p for p in existing_products}
    
    # 2. Scrape live products page-by-page from /productos/ catalog
    live_scraped = []
    page = 1
    max_pages = 60
    
    while page <= max_pages:
        url = f"https://sheru.com.ar/productos/?page={page}"
        print(f"Scrapeando página {page} desde: {url}")
        
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
            html = urllib.request.urlopen(req).read().decode('utf-8')
        except Exception as e:
            print(f"Error al cargar página {page}: {e}")
            break
            
        product_chunks = re.split(r'class="[^"]*js-item-product[^"]*"', html)[1:]
        if not product_chunks:
            print(f"No se encontraron más productos en la página {page}. Fin de la paginación.")
            break
            
        print(f"Encontrados {len(product_chunks)} productos en la página {page}.")
        
        for chunk in product_chunks:
            id_match = re.search(r'data-product-id="(\d+)"', chunk)
            if not id_match:
                continue
            product_id = id_match.group(1)
            
            name_match = re.search(r'class="[^"]*item-name[^"]*"[^>]*>([^<]+)</div>', chunk)
            if not name_match:
                name_match = re.search(r'title="([^"]+)"\s+aria-label=', chunk)
                if not name_match:
                    continue
            product_name = name_match.group(1).strip()
            
            price = 0
            price_match = re.search(r'data-product-price="(\d+)"', chunk)
            if price_match:
                price = int(price_match.group(1))
                
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
            
            if image_url:
                image_url = re.sub(r'-\d+-\d+\.webp', '-640-0.webp', image_url)
                if image_url.startswith('http://'):
                    image_url = image_url.replace('http://', 'https://')
            
            # Classify category
            category, category_label = classify_product(product_name)
            
            name_lower = product_name.lower()
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
                
            notes = {
                "salida": f"Acordes de salida vibrantes y característicos de la familia {family_label.lower()}.",
                "corazon": "Cuerpo aromático equilibrado y elegante que define la personalidad del perfume.",
                "fondo": "Fondo cálido, persistente y sofisticado de maderas o acordes suaves."
            }
            
            if 'million' in name_lower or '205' in name_lower:
                notes = {"salida": "Mandarina sanguínea, toronja (pomelo) y menta.", "corazon": "Canela, notas especiadas y rosa.", "fondo": "Cuero, notas amaderadas, ámbar y pachulí hindú."}
            elif 'good girl' in name_lower or '502' in name_lower:
                notes = {"salida": "Almendra, café, bergamota and limón.", "corazon": "Nardo, jazmín sambac, flor de azahar, raíz de lirio y rosa de Bulgaria.", "fondo": "Habal tonka, cacao, vainilla, praliné, sándalo, ámbar y almizcle."}
            elif 'sauv' in name_lower or '212' in name_lower and 'sauv' in name_lower:
                notes = {"salida": "Pimienta de Sichuan, bergamota de Calabria y pimienta.", "corazon": "Lavanda, geranio, pimienta rosa y elemí.", "fondo": "Ambroxan, cedro y ládano."}
            elif 'olympea' in name_lower or '504' in name_lower:
                notes = {"salida": "Jazmín de agua, mandarina verde y flor de jengibre.", "corazon": "Vainilla salada y acordes marinos.", "fondo": "Ámbar gris, madera de cachemira y sándalo."}
            elif 'bell' in name_lower or 'vida' in name_lower or '514' in name_lower:
                notes = {"salida": "Grosellas negras y pera.", "corazon": "Iris, jazmín y flor de azahar del naranjo.", "fondo": "Pranilé, vainilla, pachulí y haba tonka."}
            elif 'saphirus' in category_label.lower() or 'saphirus' in name_lower:
                notes = {
                    "salida": f"Notas aromáticas de salida que perfuman inmediatamente el ambiente.",
                    "corazon": f"Esencia concentrada de {product_name.replace('Textil ', '').replace('Difusor ', '')}.",
                    "fondo": "Fondo agradable y de larga duración en tejidos o el aire."
                }
                
            description = f"Experimenta el encantador aroma {product_name}. Una fragancia de alta concentración seleccionada especialmente de la línea Saphirus / Milano para deleitar tus sentidos."
            
            live_scraped.append({
                "id": f"sheru-{product_id}",
                "name": product_name,
                "category": category,
                "categoryLabel": category_label,
                "price": price,
                "size": "",  # Sizes are customizable/optional and empty by default
                "image": image_url,
                "featured": False,
                "family": family,
                "familyLabel": family_label,
                "description": description,
                "notes": notes
            })
        
        page += 1
        
    # Remove duplicates from live scrape
    unique_live = []
    seen_ids = set()
    for p in live_scraped:
        if p["id"] not in seen_ids:
            seen_ids.add(p["id"])
            unique_live.append(p)
            
    print(f"Scraping en vivo finalizado. Encontrados {len(unique_live)} productos únicos en la web del proveedor.")
    
    # 3. Compare and merge
    final_products = []
    scraped_ids = {p["id"] for p in unique_live}
    
    # Process scraped products (updates and additions)
    for live_prod in unique_live:
        live_id = live_prod["id"]
        if live_id in existing_dict:
            # Existing product: Update details, but preserve manual edits
            existing_prod = existing_dict[live_id]
            existing_prod["name"] = live_prod["name"]
            existing_prod["image"] = live_prod["image"]
            # Keep manual changes of sizes if they are already custom edited by the user
            if not existing_prod.get("size"):
                existing_prod["size"] = live_prod["size"]
            
            # Preserve statusPending, price, priceOriginal, stockCount, statusOffer, statusNoStock, statusSold, etc.
            if "notes" not in existing_prod:
                existing_prod["notes"] = live_prod["notes"]
                
            final_products.append(existing_prod)
        else:
            # Brand new product from provider: Add it directly
            print(f"Nuevo producto detectado: {live_prod['name']}.")
            final_products.append(live_prod)
            
    # Process custom products (we must preserve custom products added by the admin!)
    for exist_id, exist_prod in existing_dict.items():
        if exist_id.startswith("custom-"):
            # Preserve custom product
            final_products.append(exist_prod)
        elif exist_id not in scraped_ids:
            # It was a provider product (sheru-) but is no longer on the supplier website
            print(f"Producto eliminado por el proveedor (dado de baja): {exist_prod['name']} (ID: {exist_id})")
            # We omit it, which deletes it from products.js!
            
    print(f"Sincronización finalizada. Catálogo resultante consolidado con {len(final_products)} productos.")
    
    # 4. Save back to products.js
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
        json.dump(final_products, f, indent=2, ensure_ascii=False)
        f.write(";\n")
        f.write(filter_data_section)
        
    print(f"Guardados {len(final_products)} productos reales en products.js!")

if __name__ == '__main__':
    main()
