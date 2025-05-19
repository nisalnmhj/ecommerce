import Home from './pages/Home.js';
import CartPage from './pages/CartPage.js'; 
import ProductDetailPage from './pages/ProductDetailPage.js';
import './App.css';
import { Routes, Route } from "react-router-dom";

console.log({ Home, CartPage, ProductDetailPage });
function App() {
  return (
    
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  
  );
}

export default App;
