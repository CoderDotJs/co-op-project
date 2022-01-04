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
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5">

            {allOrders?.map((order) => (
                <OrderCart key={order._id} order={order} />
            ))}
        
        </div>
        
    );
};

export default ManageOrders;