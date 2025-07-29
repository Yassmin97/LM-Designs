import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Category from './Pages/Category';
import ProductDetail from './Pages/ProductDetail';
import Checkout from './Pages/Checkout';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartContext } from './Context/CartContext';


function App() {
  return (
   <Router>
    <Header />
    <main className='min-h-screen bg-white text-black'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produkter" element={<Products />} />
        <Route path="/produkter/ :kategori" element={<Category />} />
        <Route path="/produkt/ :slug" element={<ProductDetail />} />
        <Route path="/kassa" element={<Checkout />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/tack" element={<ThankYou />} />
        
        <CartContext.Provider value={{ cart: [], setCart: () => {} }}>
      <App />
        </CartContext.Provider>
      </Routes>
    </main>
    <Footer />
   </Router>
  )
}

export default App
