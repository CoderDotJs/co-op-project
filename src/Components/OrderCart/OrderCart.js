import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import swal from "sweetalert";
import useFirebase from "../../firebase/useFirebase";
import './OrderCart.css'

const OrderCard = ({ order, cancelOrder }) => {
    const { orderProducts, _id, Name, PhoneNumber, address, orderData, orderStates } = order;
    const [userInfo, setUserInfo] = useState({});
    const { user } = useFirebase();

    useEffect(() => {
        fetch(`https://softy-shop-web.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data[0]))

    }, [user])


    const shippedOrder = (id) => {
        fetch(`https://softy-shop-web.herokuapp.com/updateStates/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    swal("Order Shipped Successfully!", "", "success");
                }
            });
    };

    const deleteOrder = (id) => {
        swal({
            title: "Are you sure for Delete order?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(`https://softy-shop-web.herokuapp.com/deleteOrder/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            swal("Order Deleted!", "", "success");
                        }
                    });
            } else {
                swal("Order Delete Cancel.");
            }
        });
    };

    // console.log(userInfo?.roll === "admin" );

    return (
        <Col>
            <div className="order-card">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img width="100%" src={orderProducts[0].img} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-1">
                        <div className="order-info">
                            <p className="fw-bold fs-5">{_id}</p>
                            <p>{Name}</p>
                            <p>PhoneNumber: {PhoneNumber}</p>
                            <p>{address}</p>
                            <p>Order orderData: {orderData}</p>
                            <div className="d-flex justify-content-between">
                                <p>
                                    Status:
                                    {orderStates === "Shipped" ? (
                                        <span className="text-success fw-bold">{orderStates}</span>
                                    ) : (
                                        <span className="text-danger fw-bold">{orderStates}</span>
                                    )}
                                </p>
                                {!(userInfo?.roll === "admin") && <button
                                    onClick={() => cancelOrder(_id)}
                                    className="btn btn-danger btn-sm"
                                >
                                    <i className="fas fa-window-close"></i> Cancel
                                </button>}
                            </div>
                        </div>

                        {userInfo?.roll === "admin" && (
                            <div>
                                {orderStates === "pending" && userInfo?.roll === "admin" ? (
                                    <button
                                        onClick={() => shippedOrder(order._id)}
                                        className="btn btn-success btn-sm me-3"
                                    >
                                        <i className="fas fa-check-circle"></i> Shipped
                                    </button>
                                ) : (
                                    ""
                                )}
                                <button
                                    onClick={() => deleteOrder(order._id)}
                                    className="btn btn-danger btn-sm"
                                >
                                    <i className="fas fa-trash-alt"></i> Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default OrderCard;