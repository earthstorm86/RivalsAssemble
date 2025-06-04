import sys
from html.parser import HTMLParser

class SilentParser(HTMLParser):
    def error(self, message):
        raise Exception(message)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python validate_html.py <file>")
        sys.exit(1)
    path = sys.argv[1]
    parser = SilentParser()
    try:
        with open(path, 'r', encoding='utf-8') as f:
            parser.feed(f.read())
    except Exception as e:
        print(f"HTML parse error: {e}")
        sys.exit(1)
    print("HTML looks valid")
