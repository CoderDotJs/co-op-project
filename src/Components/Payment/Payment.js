import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Payment = () => {

    const navigate = useNavigate();

    return (
        <Container className="mx-auto">
            <img src="https://i.postimg.cc/HxrCFgSK/2999650-middle-removebg-preview.png" alt="coming soon" className="img-responsive d-block mx-auto mw-100" />
            <Button variant="outline-dark d-block mx-auto" onClick={()=> navigate('/')}>BACK TO HOME</Button>
        </Container>
    );
};

export default Payment;