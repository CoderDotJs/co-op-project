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
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import Checkout from './Components/Checkout/Checkout';
import MyOrder from './Components/MyOrder/MyOrder';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<FilteredProduct />} />
          <Route path="/products/:category/:productId" element={<ViewProduct />}></Route>
          <Route path="/products/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="/dashboard/myOrder" element={<MyOrder />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
