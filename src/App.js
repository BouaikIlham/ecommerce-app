import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
