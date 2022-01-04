import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WhyUs = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col lg={3} md={3} sm={6} xs={12} className="g-3 d-flex justify-content-start align-items-center text-left">
                    <i class="fal fa-3x fa-shipping-fast"></i>
                    <div className="ps-3">
                        <h5 className="my-1">Free Shipping</h5>
                        <p className="my-1">Free Shipping Inside Dhaka</p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={6} xs={12} className="g-3 d-flex justify-content-start align-items-center text-left">
                    <i class="fal fa-3x fa-headset"></i>
                    <div className="ps-3">
                        <h5 className="my-1">24/7 Support</h5>
                        <p className="my-1">Find The Best Range Of Organic Food</p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={6} xs={12} className="g-3 d-flex justify-content-start align-items-center text-left">
                    <i class="fal fa-3x fa-credit-card-front"></i>
                    <div className="ps-3">
                        <h5 className="my-1">Safe Payment</h5>
                        <p className="my-1">Free Shipping When Spent 10000TK</p>
                    </div>
                </Col>
                <Col lg={3} md={3} sm={6} xs={12} className="g-3 d-flex justify-content-start align-items-center text-left">
                    <i class="fal fa-3x fa-dollar-sign"></i>
                    <div className="ps-3">
                        <h5 className="my-1">Cashback Offers</h5>
                        <p className="my-1">Get Cashback On Hot Products</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default WhyUs;