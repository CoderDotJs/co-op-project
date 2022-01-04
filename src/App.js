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
// import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import Checkout from './Components/Checkout/Checkout';
import MyOrder from './Components/MyOrder/MyOrder';
import MyReviews from './Components/MyReviews/MyReviews';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import AddProducts from './Components/AddProudcts/AddProducts';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<FilteredProduct />} />
          <Route path="/products/:category/:productId" element={<ViewProduct />}></Route>
          <Route path="/products/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="/dashboard/myOrder" element={<MyOrder />} />
            <Route path="/dashboard/customerReview" element={<MyReviews />} />
            <Route path="/dashboard/manageOrders" element={<ManageOrders />} />
            <Route path="/dashboard/addProducts" element={<AddProducts />} />
            <Route path="/dashboard/manageProducts" element={<ManageProducts />} />
            <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
