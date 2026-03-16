#!/usr/bin/env python3
import os
from pathlib import Path
import fitz  # PyMuPDF

CERT_DIR = Path(__file__).resolve().parents[1] / 'certificates'
OUT_DIR = CERT_DIR / 'thumbs'
OUT_DIR.mkdir(parents=True, exist_ok=True)

# desired width in pixels for thumbnails
DESIRED_WIDTH = 300

pdf_files = sorted([p for p in CERT_DIR.iterdir() if p.suffix.lower() == '.pdf'])
if not pdf_files:
    print('No PDF files found in', CERT_DIR)
    exit(0)

for pdf in pdf_files:
    try:
        doc = fitz.open(pdf)
        page = doc.load_page(0)
        rect = page.rect
        scale = DESIRED_WIDTH / rect.width
        mat = fitz.Matrix(scale, scale)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        out_name = pdf.stem.lower().replace(' ', '-').replace('&', 'and')
        out_name = ''.join(c for c in out_name if c.isalnum() or c in ['-','_'])
        out_path = OUT_DIR / (out_name + '.png')
        pix.save(str(out_path))
        print(f'Wrote thumbnail: {out_path.name}')
    except Exception as e:
        print('Failed to create thumbnail for', pdf.name, '-', e)

print('Done.')
