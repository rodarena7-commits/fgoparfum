import urllib.request
import re

def check_pages():
    for page in range(1, 10):
        url = f"https://sheru.com.ar/saphirus1/aromatizante-textil/?page={page}"
        print(f"Checking {url}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
            html = urllib.request.urlopen(req).read().decode('utf-8')
            chunks = re.split(r'class="[^"]*js-item-product[^"]*"', html)[1:]
            print(f"Page {page} has {len(chunks)} products.")
            if len(chunks) == 0:
                print(f"Finished at page {page} because no products were found.")
                break
        except Exception as e:
            print(f"Error on Page {page}: {e}")
            break

if __name__ == '__main__':
    check_pages()
