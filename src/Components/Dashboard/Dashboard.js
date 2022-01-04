import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import useFirebase from "../../firebase/useFirebase";

const Dashboard = () => {

    const { user, logOut } = useFirebase();
    const [show, setShow] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(`https://softy-shop-web.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data[0]))

    }, [user])

    console.log(userInfo)
    if (!userInfo) {
        return <h1>Loading..</h1>
    }
    return (
        <div className="dashboard-area my-5">
            <Container fluid className="ps-0">
                <Row className="p-0">
                    <Col lg={2} className="p-0">
                        <div className="side-navbar desktop">
                            <Link to="/" className="logo">
                                <img style={{ width: "120px" }} src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/logo.svg" alt="" />
                            </Link>

                            <div className="dashboard-menu">
                                <ul>
                                    {
                                        userInfo?.roll === "admin" ? <>
                                            <li>
                                                <NavLink end to="/dashboard/manageOrders">
                                                    Manage Orders
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/dashboard/addProducts">
                                                    Add Products
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/dashboard/manageProducts">
                                                    Manage Products
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/dashboard/makeAdmin">
                                                    Make an Admin
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/home">
                                                    Back To Home
                                                </NavLink>
                                            </li>
                                        </> : <>
                                            <li>
                                                <NavLink end to="/dashboard/myOrder">
                                                    My Orders
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/dashboard/customerReview">
                                                    My Reviews
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/home">
                                                    Back To Home
                                                </NavLink>
                                            </li>
                                        </>
                                    }
                                </ul>
                            </div>

                            <button className="btn btn-success ms-4" onClick={logOut}>
                                Logout
                            </button>
                        </div>
                    </Col>
                    <Col lg={10} className="p-0">
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton></Offcanvas.Header>
                            <div className="side-navbar">
                                <Link to="/" className="logo">
                                    <img style={{ width: "120px" }} src="https://demo2wpopal.b-cdn.net/ecolive/wp-content/uploads/2021/10/logo.svg" alt="" />
                                </Link>

                                <div className="dashboard-menu">
                                    <ul>
                                        <>
                                            {
                                                userInfo.roll === "admin" ? <h1>admin</h1> : <h1>clesng</h1>
                                            }
                                            <li>
                                                <NavLink end to="/dashboard/myOrder">
                                                    My Orders
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/dashboard/customerReview">
                                                    My Reviews
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/home">
                                                    Back To Home
                                                </NavLink>
                                            </li>
                                        </>

                                        <>
                                            <li>
                                                <NavLink end to="/dashboard/manageOrders">
                                                    Manage Orders
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/dashboard/addProducts">
                                                    Add Products
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/dashboard/manageProducts">
                                                    Manage Products
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/dashboard/makeAdmin">
                                                    Make an Admin
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink end to="/home">
                                                    Back To Home
                                                </NavLink>
                                            </li>
                                        </>

                                    </ul>
                                </div>

                                <button className="btn btn-success ms-4" onClick={logOut}>
                                    Logout
                                </button>
                            </div>
                        </Offcanvas>
                        <div className="dashbord-header d-flex justify-content-between align-items-center">
                            <Button className="dashboard-sm" onClick={handleShow}>
                                Menu
                            </Button>
                            <p>Dashboard</p>
                            <span>{user?.displayName}</span>
                        </div>

                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;