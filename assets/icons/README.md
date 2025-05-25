# assets/icons Directory

This directory contains all favicon and manifest-related icons for the site, including:
- android-chrome-192x192.png
- android-chrome-512x512.png
- apple-touch-icon.png
- favicon-16x16.png
- favicon-32x32.png
- favicon.ico

## Usage
- All icon references in `site.webmanifest` and HTML files should use the `/assets/icons/` path.
- Update or add new icons here as needed for PWA and browser support.

## Related Files
- `site.webmanifest` (in the project root) references these icons for PWA configuration.
- Update `<link rel="icon">`, `<link rel="apple-touch-icon">`, and similar tags in your HTML to use the new paths.
