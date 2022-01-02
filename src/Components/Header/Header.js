import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Header.css';



const Header = () => {

    return ( 
        <>
        {/* top header  */}
        <div className="top-header">
            <p className="special-offers-top">Special Offers! - <span style={{color: '#F4C340'}}>Get 50%</span> Off On Vegitables</p>
            <select className="select-language" >
                <option defaultValue>English</option>
                <option >Bangla</option>
            </select>
        </div>


        {/* header  */}

        <Navbar bg="" expand="lg" className=" px-1 main-navbar">
          
            <Navbar.Brand href="#home" className="grid-logo">
            <img className="hfe-site-logo-img elementor-animation- lazyloaded" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/logo.svg" alt="logo" data-ll-status="loaded" width="50%"/>
            </Navbar.Brand>
            

            
        <form action="" className="mx-auto search-form grid-search-form">
          <div className="input-group border p-1">
            <input type="search" placeholder="Search Products..." aria-describedby="button-addon3" className="form-control bg-none border-0 bg-transparent"/>
            <div className="input-group-append border-0">
              <button id="button-addon3" type="button" className="btn btn-link text-black"><i className="fa fa-search"></i></button>
            </div>
          </div>
          
        </form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="grid-menu border-0 outline-0"/>
            <Navbar.Collapse id="basic-navbar-nav" className="" >
              <Nav className="mx-auto navs">
                <Nav.Item className="d-flex justify-content-center align-items-center fw-normal mx-2">
                    <i className="far fa-user"></i>
                    <p style={{textAlign: 'left', margin: '0'}}>Hello, <br />
                    <NavLink to="/login"  className="text-decoration-none text-black user-login">Log In</NavLink> or <NavLink to="signup" className="text-decoration-none text-black user-login">Register</NavLink>
                    </p>
                </Nav.Item>
                <Nav.Item className="mx-2 d-flex justify-content-center align-items-center">
                <button type="button" className="border-0 p-0 position-relative">
                <i className="far fa-heart"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill pill-bg">
                    0
                    <span className="visually-hidden">Wishlists</span>
                  </span>
                </button>
                </Nav.Item>
                <Nav.Item className="mx-2 d-flex justify-content-center align-items-center">
                <button type="button" className="border-0 p-0 position-relative">
                <i class="fal fa-shopping-bag"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill pill-bg">
                    0
                    <span className="visually-hidden">Cart</span>
                  </span>
                </button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
        </Navbar>


        {/* category  */}


        <Navbar className="category container my-2 z" >
            <Container className="d-flex justify-content-between align-items-center flex-wrap">
                <Nav.Item as={NavLink} 
                to='/supplements' 
                className="text-white text-decoration-none mx-2">
                    Supplements
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/fruits' 
                className="text-white text-decoration-none mx-2">
                    Fruits
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/beverages' 
                className="text-white text-decoration-none mx-2">
                    Beverages
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/dried' 
                className="text-white text-decoration-none mx-2">
                    Dried
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/juice' 
                className="text-white text-decoration-none mx-2">
                    Juice
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/meat' 
                className="text-white text-decoration-none mx-2">
                    Meat
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/food' 
                className="text-white text-decoration-none mx-2">
                    Food
                </Nav.Item>
            </Container>
        </Navbar>

    </>
    );
};

export default Header;