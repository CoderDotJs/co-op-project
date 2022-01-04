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


    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="card h-100">
          <img src={orderProducts[0]?.img} className="card-img-top" alt={orderProducts[0]?.name}/>
          <div className="card-body d-flex flex-column align-items-start">

            <h5 className="card-title" style={{
                color: '#3e4a5e',
                fontSize: '18px',
                margin: '5px 0', 
                letterSpacing: '1px'
              }}>
                  {orderProducts[0]?.name}
            </h5>
             <p>PhoneNumber: {PhoneNumber}</p>
                <p>Address: {address}</p>
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
        </div>
      </div>
    );
};

export default OrderCard;