import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="my-5 mx-auto">
            <Container>
                <img src="https://demo.casethemes.net/organio/wp-content/themes/orgio/assets/images/image-404.png" alt="page-not-found-img" className='img-fluid d-block mx-auto'/>
                <h1>Page Not Found</h1>
                <p>Something went wrong, looks like this page doesn't exist anymore.</p>
                <NavLink to="/" className="text-decoration-none btn btn-success">Back to home</NavLink>
            </Container>
        </div>
    );
};

export default NotFoundPage;