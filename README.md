# 🛍️ React E-Commerce Mini App

This is a simple e-commerce frontend built using **React** and **React Router**. It features:
- A product listing page
- Favorite (❤️) functionality with animation
- Cart management using Context API
- Detail view for each product

---

## 📁 Project Structure
```
src/
│
├── components/ # Reusable UI components
│ ├── Cart.js # Cart component with its logic
│ ├── Favorite.js # Favorite icon component component with its logic
│ ├── Navbar.js # Navigation bar with links to pages
│ ├── ProductCard.js # Individual product card with image, price, and favorite icon
│ ├── ProductDetail.js # Component to show full product details
│ ├── ProductList.js # Displays all products as cards
│
├── context/ # Context API logic
│ ├── CartContext.js # Manages cart state and dispatch actions
│ ├── FavoriteContext.js # Manages favorite products using useReducer
│
├── pages/ # Route-level components (views)
│ ├── CartPage.js # Displays cart contents
│ ├── FavoritesPage.js # Displays all favorited products
│ ├── Home.js # Main home page showing the product list
│ ├── ProductDetailPage.js# Route-based wrapper around ProductDetail.js
│
├── App.js # Main app component with routes and layout
├── App.css 
├── index.js # React entry point
├── index.css 
└── logo.svg 
```
## ✨ Features Implemented

- ✅ Product listing with image, name, and price
- ✅ Filter option for the products
- ✅ Product detail view with more info
- ✅ Add/Remove favorites (❤️) with icon animation
- ✅ Context API for global state (favorites & cart)
- ✅ Navigation across Home, Cart, Favorites, and Detail pages
- ✅ Quantity selectors (e.g., + / – buttons) in the Cart
- ✅ Total price calculation of the products in the Cart


### ❤️ Favorites Improvements
- Persist favorites using `localStorage`
- Sync favorites with backend (user-based)

### 💅 UI/UX Enhancements
- Add loading spinners or skeletons

### 🔐 Authentication
- Add login/signup pages
- Store user-specific cart/favorites in backend

## 🛠️ Tech Stack

- **React** (Functional components)
- **React Router DOM**
- **Context API + useReducer**
- **Tailwind CSS** (used for styling)
- **Heroicons** for icons
