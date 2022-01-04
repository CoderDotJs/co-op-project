import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import useFirebase from '../../firebase/useFirebase';
import {useNavigate} from 'react-router-dom';

const Checkout = () => {
    const cart = useSelector((state) => state.products.cart);
    const totalPrice = useSelector((state) => state.products.totalPrice);
    const { user } = useFirebase();

    const { register, handleSubmit } = useForm();

    const navigate=useNavigate();

    const onSubmit = (data) => {
        data.orderProducts = cart;
        data.totalPrice = totalPrice;
        data.userEmail = user.email;
        data.orderStates = "pending";
        data.orderData = new Date().toLocaleDateString();

        fetch('https://softy-shop-web.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order is Success");
                    navigate('/');
                }
            })
    };
    return (


        <div>
            <Container className="my-5">
                <Row className="mb-5">
                    <Col lg={7} md={7} sm={12} xs={12} className="container">
                        <div className="container-fluid  mx-auto">
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                                    <h1>Checkout</h1>
                                    <p className="blue-text">Please Fill up the form with correct information.</p>
                                    <div className="">
                                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="row justify-content-between text-left my-3">

                                                {/* names group  */}

                                                <div className="form-group col-lg-6 flex-column d-flex">

                                                    <input type="text" id="Name" name="Name" placeholder="Enter your name" defaultValue={user.displayName} className="form-control" {...register("Name", { required: true })} />
                                                </div>
                                                <div className="form-group col-sm-6 flex-column d-flex">

                                                    <input type="text" id="lastName" name="lastName" placeholder="Enter your phone number" className="form-control" {...register("PhoneNumber", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="row justify-content-between text-left my-3">

                                                {/* email input  */}

                                                <div className="form-group col-sm-12 flex-column d-flex">

                                                    <input type="email" id="email" name="email" placeholder="Enter Your Email"
                                                        defaultValue={user.email}
                                                        className="form-control" {...register("email", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="row justify-content-between text-left my-3">
                                                <div className="form-group col-sm-12 flex-column d-flex">

                                                    <input type="text" id="address" name="address" placeholder="Street Address" className="form-control" {...register("address", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="row justify-content-between text-left my-3">
                                                <div className="form-group col-sm-6 flex-column d-flex">

                                                    <input type="text" id="upazilla" name="upazilla" placeholder="Upazilla" className="form-control" {...register("upazilla", { required: true })} />
                                                </div>

                                                <div className="form-group col-sm-6 flex-column d-flex">
                                                    <input type="text" id="district" name="district" placeholder="District" className="form-control" {...register("district", { required: true })} />

                                                </div>
                                            </div>
                                            <div className="row justify-content-end my-3">

                                                <div className="form-group col-sm-12">
                                                    <Button variant="outline-dark" type="submit" className="d-block mx-auto w-100">Place Order</Button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} md={5} sm={12} xs={12} className="container border-start" >
                        {
                            cart?.map(product =>
                                <>
                                    <Row className="m-0 border-bottom">
                                        {/* cart item img  */}
                                        <Col lg={4} md={4} sm={4} xs={4} className="d-flex align-items-center">

                                            <img src={product?.img} alt={product?.name} className="img-responsive w-100" />

                                        </Col>
                                        {/* cart item text  */}
                                        <Col lg={8} md={8} sm={8} xs={8} className="d-flex justify-content-around align-items-end flex-column m-0 p-0">

                                            <h5 className="m-0 p-0">{product?.name}</h5>
                                            <h3 className="fw-semibold m-0">${product.price}</h3>
                                        </Col>
                                    </Row>
                                </>
                            )
                        }
                        <Row>
                            <p className="d-flex justify-content-between px-3 my-3"><span className="display-6 fw-semibold">Total: </span><span className="display-6 fw-semibold">${totalPrice}</span></p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;