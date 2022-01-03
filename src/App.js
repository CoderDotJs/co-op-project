import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Products from './Components/Products/Products';
import FilteredProduct from './Components/FilteredProduct/FilteredProduct';
import ViewProduct from './Components/ViewProduct/ViewProduct';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<FilteredProduct />}/>
          <Route path="/products/:category/:productId" element={<ViewProduct />}></Route>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
