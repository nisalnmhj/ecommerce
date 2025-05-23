import Home from './pages/Home.js';
import CartPage from './pages/CartPage.js'; 
import ProductDetailPage from './pages/ProductDetailPage.js';
import FavoritesPage from './pages/FavoritesPage.js';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

console.log({ Home, CartPage, ProductDetailPage });
function App() {
  return (
    
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />

    </Routes>
  
  );
}

export default App;
