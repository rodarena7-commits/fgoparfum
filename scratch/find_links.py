import urllib.request
import re

url = "https://sheru.com.ar/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    links = re.findall(r'href="([^"]+)"', html)
    unique_links = sorted(list(set(links)))
    for link in unique_links:
        if 'saphirus' in link or 'milano' in link or 'categoria' in link or 'categories' in link or 'producto' in link:
            print(link)
except Exception as e:
    print("Error:", e)
