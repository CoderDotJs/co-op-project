import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeProduct } from '../../redux/slice';
import './Cart.css'
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const cart = useSelector((state) => state.products.cart);
    const totalPrice = useSelector((state) => state.products.totalPrice);
    const dispatch = useDispatch();

    const handleRemoveCartItem = (productId) => {
        dispatch(removeProduct(productId));
    }

    const handleIncrementQuantity = (product) => {
        dispatch(incrementQuantity(product));
    }

    const handleDecrementQuantity = (product) => {
        dispatch(decrementQuantity(product));
    }

    return (
        <div className="modal-cart">
            <h6 className="text-left">Added Items ({cart.length})</h6>

            {/* cart item  */}
            <div className="full-cart">
                <div>
                { !cart.length ? <h4 className="text-center mt-5">Cart Empty</h4> :
                    cart?.map(product => <>
                        <Row className="m-0 border-bottom" key={product.id}>
                    {/* cart item img  */}
                    <Col lg={4} md={4} sm={4} xs={4} className="d-flex align-items-center">

                        {/* cart item remove  */}
                        <button onClick={() => handleRemoveCartItem(product)} className="text-decoration-underline d-inline bg-transparent border-0 p-0 m-0"><i className="fal fa-times-circle"></i></button> 

                        <img src={product?.img} alt={product?.name} className="img-responsive w-100"/>

                    </Col>
                    {/* cart item text  */}
                    <Col lg={8} md={8} sm={8} xs={8} className="row m-0 p-0">
                        <Row className="m-0 p-0">
                            <Col lg={12} md={12} sm={12} xs={12} className="m-0 p-0">
                                <p className="m-0 p-0">{product?.name}</p>
                            </Col>
                        </Row>
                            <Row className="m-0 p-0">
                                <Col lg={12} md={12} sm={12} xs={12}  className="d-flex justify-content-between align-items-center m-0 p-0">
                                <p className="fw-semibold m-0">${product.price}</p>
                                    {/* qunatity inc dec  */}
                                <div className="quantity-counter my-2 mx-1">
                                    <button id="inc" onClick={() => handleDecrementQuantity(product)}>
                                        <i className="fal fa-minus"></i>
                                    </button>
                                    <input type="number" min="1" value={product?.quantity} disabled/>
                                    <button id="dec" onClick={() => handleIncrementQuantity(product)}>
                                        <i className="fal fa-plus"></i>
                                    </button>
                                </div> 
                                </Col>
                        </Row>

                    </Col>
                    </Row>
                    </>)
                }
                </div>

            {
                cart.length > 0 
                && 
                <div className="my-3 checkout-cart">
                <p className="d-flex justify-content-between align-items-center mx-0 px-2 my-2"><span className="total">Total:</span> <span>${totalPrice}</span></p>
                <Button as={NavLink} to="/products/checkout"  variant="outline-dark" className="d-block mx-auto w-75">PROCEED TO CHECKOUT</Button>
            </div>
            }

            </div>

        </div>
    );
};

export default Cart;