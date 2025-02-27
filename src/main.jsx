import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import ProductList from './Components/Product/ProductList.jsx'; 
import productsData from './Components/Product/Product.json'; 
import Mycart from './Components/Mycart/Mycart.jsx';
import Login from './Components/Login/Login.jsx';



const router = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="mycart" element={<Mycart/>} />
      <Route path="product" element={<ProductList products={productsData} />} /> {/* Pass products data as props */}
      <Route path="login" element={<Login />} />
    </Route>
  </Routes>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>{router}</Router>
  </React.StrictMode>,
  document.getElementById('root')
);
