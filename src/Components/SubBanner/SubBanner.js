import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './SubBanner.css';

const SubBanner = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col lg={6} md={6} sm={12} xs={12} className="g-3 position-relative relative-radius">
                    <img src="https://i.postimg.cc/x87KMTpS/h4-banner1.jpg" alt="" className=" h-100 w-100 img-responsive "/>
                    <h2 className="position-absolute">Happiness <br /> Carrot Organic</h2>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className=" g-3 position-relative relative-radius">
                <img src="https://i.postimg.cc/pybmP91y/h4-banner2.jpg" alt="" className=" h-100 w-100 img-responsive"/>
                <h2 className="position-absolute">Happiness <br /> Carrot Organic</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default SubBanner;