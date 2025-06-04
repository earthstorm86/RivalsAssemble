import datetime
import re
import sys

def update_file(path):
    ts = datetime.datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    pattern = r'(<span id="publish-timestamp">)[^<]*(</span>)'
    content = re.sub(pattern, lambda m: m.group(1) + ts + m.group(2), content)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Updated {path} to {ts}')

if __name__ == '__main__':
    files = sys.argv[1:] or ['index.html']
    for fpath in files:
        update_file(fpath)
