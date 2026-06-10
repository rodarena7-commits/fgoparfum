import urllib.request
import re

url = "https://sheru.com.ar/productos/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    chunks = re.split(r'class="[^"]*js-item-product[^"]*"', html)[1:]
    if chunks:
        print(chunks[0][:2000])
    else:
        print("No product chunks found.")
except Exception as e:
    print("Error:", e)
