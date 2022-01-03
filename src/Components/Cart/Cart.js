import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Cart.css'



const Cart = () => {

    const cart = useSelector((state) => state.products.cart);
    const [quantity, setQuantity] = useState(1);
    let limit = 5;

    const handleCartQuantity = (e) => {
        console.log(e.target)
    }

    return (
        <div className="modal-cart">
            <h6 className="text-left">You Cart ({cart.length})</h6>

            {/* cart item  */}

            <div className="full-cart ">
                <div>
                {
                cart.map(c=>{
                    return(
                        <Row className="m-0 border-bottom">

                        {/* cart item img  */}
        
                        <Col lg={4} md={4} sm={4} xs={4} className="d-flex justify-content-center align-items-center">
                            <button className="bg-transparent border-0 p-0 m-0 text-decoration-none" ><i class="fal fa-times-circle" ></i></button>
                            <img src={c.img} alt={c.name} className="img-responsive w-100 "/>
                        </Col>
        
                        {/* cart item text  */}
        
                        <Col lg={8} md={8} sm={8} xs={8} className="row m-0 p-0">
                            <Row className="m-0 p-0">
                                <Col lg={12} md={12} sm={12} xs={12} className="m-0 p-0">
                                    <p className="m-0 p-0">{c.name}</p>
                                </Col>
                            </Row>
                            <Row className="m-0 p-0">
                                <Col lg={12} md={12} sm={12} xs={12}  className="d-flex justify-content-between align-items-center m-0 p-0">
                                <p className="fw-semibold m-0">${c.price}</p>
        
                                    {/* qunatity inc dec  */}
        
                                <div className="quantity-counter my-3 mx-1">
                                    <button id="inc" 
                                    onClick={(e)=>handleCartQuantity(e)}>
                                        <i class="fal fa-minus"></i>
                                    </button>
                                    <input type="number" min="1" value={quantity} disabled/>
                                    <button id="dec" onClick={(e)=>handleCartQuantity(e)}>
                                        <i class="fal fa-plus"></i>
                                    </button>
                                </div> 
                                
                                
                                </Col>
                            </Row>
                                
                                {/* cart item remove  */}
                                
                            {/* <button className="text-decoration-underline d-inline bg-transparent border-0 p-0 m-0">REMOVE</button> */}
                                
                        </Col>
                    </Row>
                    );
                })
            }
                </div>


            <div className="my-3 checkout-cart">
                <p className="d-flex justify-content-between align-items-center mx-0 px-2 my-2"><span className="total">Total:</span> <span>$60</span></p>
                <Button variant="outline-dark" className="d-block mx-auto">PROCEED TO CHECKOUT</Button>
            </div>

            </div>

        </div>
    );
};

export default Cart;