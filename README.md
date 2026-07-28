# Suzhou Vigor New Materials Co., Ltd. — Official Website

A modern, responsive static website for Suzhou Vigor New Materials, a premium acoustic panel manufacturer based in Changshu, China.

## Features

- **3D Animated Homepage** — Interactive Three.js hexagon particle background inspired by acoustic panel geometry
- **Product Catalog** — Browse 5 product series with category filters, search, and detailed product pages
- **Product Detail Pages** — Complete specs, features, technical details, material info, and color options
- **Inquiry System** — Contact form with email submission (mailto:info@csvigor.com) and WhatsApp integration
- **Company Profile** — About page with company info, values, and contact details
- **Fully Responsive** — Optimized for desktop, tablet, and mobile devices

## File Structure

```
vigor-acoustic/
├── index.html           — Homepage with 3D hero
├── products.html        — Product catalog with search & filters
├── product-detail.html  — Individual product page
├── about.html           — Company information
├── contact.html         — Inquiry form & contact details
├── css/
│   └── style.css        — All styles
├── js/
│   ├── three-bg.js      — Three.js 3D background animation
│   ├── products.js      — Product data & catalog logic
│   └── main.js          — Common functionality
└── README.md
```

## How to Deploy on GitHub Pages

### Option 1: Deploy from the root of a repository

1. Create a new GitHub repository
2. Push all files from the `vigor-acoustic/` folder to the repository root
3. Go to **Settings → Pages**
4. Set **Source** to `main` branch, root folder
5. Click **Save** — your site will be live at `https://<username>.github.io/<repo>/`

### Option 2: Deploy from `/docs` folder

1. Rename `vigor-acoustic/` to `docs/`
2. Push to your repository
3. Go to **Settings → Pages**
4. Set **Source** to `main` branch, `/docs` folder
5. Click **Save**

## Customization

### Replace Placeholder Images
All product images currently use CSS gradient backgrounds with emoji icons. To add real product photos:

1. Add your images to the `images/` folder
2. Update the `.product-card-img` and `.product-main-img` elements in the HTML files
3. Replace the `background` CSS with actual `<img>` tags

### Update Company Information
All company details (phone, email, address) are set in the HTML files as provided. To modify:
- Company info: Edit the relevant sections in `about.html` and `contact.html`
- Footer links: Update across all HTML files
- Products data: Edit the `products` array in `js/products.js`

### Change Colors
Update the CSS variables in `:root` in `css/style.css`:
- `--color-primary`: Main dark color
- `--color-accent`: Gold accent color
- `--color-bg`: Background color

## Live Contact Links

The site includes functional contact methods:
- **Email**: info@csvigor.com
- **Phone**: 0512-52828160
- **Mobile/WhatsApp**: +86 13812831131
- **Website**: www.csvigor.com
- **Alibaba**: [Store Link](https://szfet.m.en.alibaba.com/)

## Requirements

No build tools or dependencies required. The site uses:
- Plain HTML5, CSS3, and vanilla JavaScript
- Three.js (r128) loaded from CDN for the 3D background

## License

All rights reserved — Suzhou Vigor New Materials Co., Ltd.
