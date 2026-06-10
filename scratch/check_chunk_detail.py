import urllib.request
import re

url = "https://sheru.com.ar/productos/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    chunks = re.split(r'class="[^"]*js-item-product[^"]*"', html)[1:]
    if chunks:
        chunk = chunks[0]
        # Search for data-srcset
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
        print("Extracted image URL:", image_url)
    else:
        print("No product chunks found.")
except Exception as e:
    print("Error:", e)
