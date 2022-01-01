import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Header.css';



const Header = () => {

    return (
        <>
        {/* top header  */}
        <div className="top-header">
            <p className="special-offers-top">Special Offers! - <span style={{color: '#F4C340'}}>Get 50%</span> Off On Vegitables</p>
            <select className="select-language" >
                <option selected>English</option>
                <option >Bangla</option>
            </select>
        </div>


        {/* header  */}

        <Navbar bg="" expand="lg" className="d-flex align-items-center justify-content-center px-1">
          
            <Navbar.Brand href="#home">
            <img class="hfe-site-logo-img elementor-animation- lazyloaded" src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/logo.svg" alt="logo" data-ll-status="loaded" width="50%"/>
            </Navbar.Brand>
            

            
        <form action="" className="mx-auto" style={{width: '50%'}}>
          <div class="input-group border p-1">
            <input type="search" placeholder="Search Products..." aria-describedby="button-addon3" class="form-control bg-none border-0 bg-transparent"/>
            <div class="input-group-append border-0">
              <button id="button-addon3" type="button" class="btn btn-link text-black"><i class="fa fa-search"></i></button>
            </div>
          </div>
          
        </form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-between align-items-center">
              <Nav className="mx-auto">
                <Nav.Item className="d-flex justify-content-center align-items-center fw-normal mx-2">
                    <i class="far fa-user"></i>
                    <p style={{textAlign: 'left', margin: '0'}}>Hello, <br />
                    <a href="##"> Sign In</a> or <a href="##">Register</a>
                    </p>
                </Nav.Item>
                <Nav.Item className="mx-2">
                <button type="button" class="border-0 p-0 position-relative">
                <i class="far fa-heart"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill pill-bg">
                    0
                    <span class="visually-hidden">Wishlists</span>
                  </span>
                </button>
                </Nav.Item>
                <Nav.Item className="mx-2">
                <button type="button" class="border-0 p-0 position-relative">
                <i class="fas fa-shopping-bag"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill pill-bg">
                    0
                    <span class="visually-hidden">Cart</span>
                  </span>
                </button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
        </Navbar>


        {/* category  */}


        <Navbar className="category container my-2 ">
            <Container>
                <Nav.Item as={NavLink} 
                to='/' 
                className="text-white text-decoration-none">
                    Supplements
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/' 
                className="text-white text-decoration-none">
                    Fruits
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/' 
                className="text-white text-decoration-none">
                    Beverages
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/' 
                className="text-white text-decoration-none">
                    Dried
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/' 
                className="text-white text-decoration-none">
                    Juice
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/' 
                className="text-white text-decoration-none">
                    Meat
                </Nav.Item>
                <Nav.Item as={NavLink} 
                to='/' 
                className="text-white text-decoration-none">
                    Food
                </Nav.Item>
            </Container>
        </Navbar>

    </>
    );
};

export default Header;