# Les Tech Store (Static Frontend)

This is a Lazada-style static storefront for **Les Tech Building Materials**, built for free hosting on GitHub Pages.

## Features
- Homepage with hero banner
- Product grid styled like Lazada
- Discount badges and star ratings
- Store locator (Google Maps embed)
- Floating WhatsApp order button
- "Buy Now" buttons (Stripe Checkout: Visa, Mastercard, Apple Pay, Google Pay)

## Deployment (GitHub Pages)
1. Create a new repo on GitHub (e.g. `les-tech-store`).
2. Clone it locally, copy these files in, then push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Lazada style storefront"
   git branch -M main
   git remote add origin https://github.com/<yourusername>/les-tech-store.git
   git push -u origin main
   ```
3. On GitHub → **Settings → Pages** → set Source to `main / root`.  
4. Your site will be live at `https://<yourusername>.github.io/les-tech-store/`.

## Editing Products
Edit `products.json` to update products. Example entry:
```json
{
  "name": "Granite Finish Tile",
  "price": 80,
  "old_price": 100,
  "discount": "20% OFF",
  "rating": 4,
  "reviews": 12,
  "image": "assets/product1.png",
  "stripe_url": "https://buy.stripe.com/test_1234567890abcdef",
  "whatsapp_url": "https://wa.me/6591234567?text=I%20want%20Granite%20Finish%20Tile"
}
```

- `stripe_url`: Generate a Payment Link in your Stripe dashboard.
- `whatsapp_url`: Replace phone number with your own.

## Social Commerce
- Export `products.json` → convert to CSV for Facebook/Instagram Commerce Manager or TikTok Seller Center.
- Use product URLs from your GitHub Pages site as "Website links".
