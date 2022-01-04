import { Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Header.css';
import Wishlist from '../Wishlist/Wishlist';
import useFirebase from '../../firebase/useFirebase';



const Header = () => {

  const { user, logOut } = useFirebase();
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();

  const { allProducts, wishList } = products;

  const cart = useSelector((state) => state.products.cart);

  // states for drwer 
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [wishlistState, setWishlistState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawerWishlist = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setWishlistState({ ...wishlistState, [anchor]: open });
  };

  return (
    <>
      {/* top header  */}
      <div className="top-header">
        <p className="special-offers-top">Special Offers! - <span style={{ color: '#F4C340' }}>Get 50%</span> Off On Vegitables</p>
        <select className="select-language" >
          <option defaultValue>English</option>
          <option >Bangla</option>
        </select>
      </div>


      {/* header  */}

      <Navbar bg="" expand="lg" className=" px-1 main-navbar">

        <Navbar.Brand as={NavLink} to="/" className="grid-logo">
          <img className="hfe-site-logo-img elementor-animation- lazyloaded" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/logo.svg" alt="logo" data-ll-status="loaded" width="50%" />
        </Navbar.Brand>



        <form action="" className="mx-auto search-form grid-search-form">
          <div className="input-group border p-1">
            <input type="search" placeholder="Search Products..." aria-describedby="button-addon3" className="form-control bg-none border-0 bg-transparent" />
            <div className="input-group-append border-0">
              <button id="button-addon3" type="button" className="btn btn-link text-black"><i className="fa fa-search"></i></button>
            </div>
          </div>

        </form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="grid-menu border-0 outline-0" />
        <Navbar.Collapse id="basic-navbar-nav" className="" >
          <Nav className="mx-auto navs">
            <Nav.Item className="d-flex justify-content-center align-items-center fw-normal mx-2">
              {user ? <i class="far fa-chart-line " style={{cursor: 'pointer'}} 
              onClick={()=>navigate('/dashboard')}></i>
              :
                <i 
              className="far fa-user " 
              style={{cursor: 'pointer'}} 
              onClick={()=>navigate('/dashboard')}
              ></i>
              }




              <div style={{ textAlign: 'left', margin: '0' }}>
                Hello {user?.displayName},
                <br />


                {user?.displayName ? <button onClick={logOut} className="btn btn-success btn-sm">Log Out</button> : <>
                  <div className="d-inline-block p-0">
                    <button type="button" className=" p-0 bg-transparent border-0 text-black dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" style={{ position: 'relative' }} data-bs-auto-close="outside" id="dropdownMenuClickableInside">
                      Login
                    </button>
                    <div aria-labelledby="dropdownMenuClickableInside" className="dropdown-menu border-0 bg-transparent dropdown-menu-lg-end p-0" style={{ position: 'absolute', top: '3.5rem', right: 0, width: 'auto' }} >
                      <Login />
                    </div>
                  </div>

                  <span> Or </span>

                  {/* registration modal  */}
                  <div className="d-inline-block p-0">
                    <button type="button" className=" p-0 bg-transparent border-0 text-black dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false" style={{ position: 'relative' }} data-bs-auto-close="outside" id="dropdownMenuClickableInside">
                      Register
                    </button>
                    <div aria-labelledby="dropdownMenuClickableInside" className="dropdown-menu border-0 bg-transparent dropdown-menu-lg-end p-0" style={{ position: 'absolute', top: '3.5rem', right: 0, width: 'auto' }}>
                      <Register />
                    </div>
                  </div>
                </>}

              </div>

            </Nav.Item>
            <Nav.Item className="mx-2 d-flex justify-content-center align-items-center">
              <button type="button" className="border-0 p-0 position-relative" onClick={toggleDrawerWishlist('right', true)}>
                <i className="far fa-heart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill pill-bg">
                  {wishList.length}
                  <span className="visually-hidden">Wishlists</span>
                </span>
              </button>

              <Drawer
                anchor={'right'}
                open={wishlistState['right']}
                sx={{ width: '300px' }}
                onClose={toggleDrawerWishlist('right', false)}
              >
                <Wishlist />
              </Drawer>

            </Nav.Item>
            <Nav.Item className="mx-2 d-flex justify-content-center align-items-center">
              <button type="button" className="border-0 p-0 position-relative" onClick={toggleDrawer('right', true)}>
                <i class="fal fa-cart-plus"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill pill-bg">
                  {cart.length}
                  <span className="visually-hidden">Cart</span>
                </span>
              </button>
              <Drawer
                anchor={'right'}
                open={state['right']}
                sx={{ width: '300px' }}
                onClose={toggleDrawer('right', false)}
              >
                <Cart />
              </Drawer>

            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      {/* category  */}


      <Navbar className="category container my-2 z" >
        <Container className="d-flex justify-content-between align-items-center flex-wrap">
          <Nav.Item as={NavLink}
            to='/products/supplements'
            className="text-white text-decoration-none mx-2">
            Supplements
          </Nav.Item>
          <Nav.Item as={NavLink}
            to='/products/fruits'
            className="text-white text-decoration-none mx-2">
            Fruits
          </Nav.Item>
          <Nav.Item as={NavLink}
            to='/products/beverages'
            className="text-white text-decoration-none mx-2">
            Beverages
          </Nav.Item>
          <Nav.Item as={NavLink}
            to='/products/dried'
            className="text-white text-decoration-none mx-2">
            Dried
          </Nav.Item>
          <Nav.Item as={NavLink}
            to='/products/juice'
            className="text-white text-decoration-none mx-2">
            Juice
          </Nav.Item>
          <Nav.Item as={NavLink}
            to='/products/meat'
            className="text-white text-decoration-none mx-2">
            Meat
          </Nav.Item>
          <Nav.Item as={NavLink}
            to='/products/food'
            className="text-white text-decoration-none mx-2">
            Food
          </Nav.Item>
        </Container>
      </Navbar>

    </>
  );
};

export default Header;