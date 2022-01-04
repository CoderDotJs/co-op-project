import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import OrderCart from "../OrderCart/OrderCart";

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch("https://softy-shop-web.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, [allOrders]);

    return (
        <div className="pt-4">
            <div className="mt-1">
                <Container>
                    <Row xs={1} sm={1} md={1} lg={2} className="g-5">
                        {allOrders?.map((order) => (
                            <OrderCart key={order._id} order={order} />
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ManageOrders;