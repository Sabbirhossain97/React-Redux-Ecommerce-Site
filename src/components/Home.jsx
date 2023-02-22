import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProductList from "../components/ProductList"
import ProductDetails from './ProductDetails';
export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/productdetails/:id" exact element={<ProductDetails />} />
        <Route />
      </Routes>
    </Router>
  );
}