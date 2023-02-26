import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProductList from "../components/ProductList"
import ProductDetails from './ProductDetails';
import Navbar from './Navbar';
import Footer from './Footer';
import Checkout from './Checkout';
export default function Home() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/productdetails/:id" exact element={<ProductDetails />} />
        <Route path="/checkout" exact element={<Checkout/>} />
        <Route />
      </Routes>
      <Footer/>
    </Router>
  );
}
