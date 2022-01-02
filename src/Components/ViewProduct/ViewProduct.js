import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import './ViewProduct.css';



const ViewProduct = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);

    let limit = 5;

    const handleQuantity = (para) => {
        if(para === true){
            if(quantity === limit){
                setQuantity(limit)
            }
            else{
                setQuantity(quantity + 1)
            }
        }
        else{
            if(quantity === 1){
                setQuantity(1);
            }
            else{
                setQuantity(quantity - 1)
            }
        }
    }
    

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/CoderDotJs/co-op-project/main/src/Components/Products/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const productView = product.filter(pro => Number(pro.id) === Number(productId));

    return (
        <Container style={{textAlign: 'left'}} className="my-5">
            <Row>
                <Col>
                    <img src={productView[0]?.img} alt="" />
                </Col>
                <Col>
                    <h2 className="my-2">{productView[0]?.name}</h2>
                    <Rating ratingValue={productView[0]?.review * 20} size={18} readonly={true}/>
                    <p className="mt-2" style={{
                  fontSize: '25px',
                  margin: '0'
               }}>
                   ${productView[0]?.price}
              </p>
              <span className="text-muted fw-light">Tax Included</span>
                <div className="quantity-counter my-3">
                    <button id="inc" onClick={()=>{
                        handleQuantity(false)
                    }}><i class="fal fa-minus"></i></button>
                    <input type="number" min="1" value={quantity} disabled/>
                    <button id="dec" onClick={()=> handleQuantity(true)}><i class="fal fa-plus"></i></button>
                </div>
                <Button variant="dark" className="d-block w-100 mx-auto my-2" >ADD TO CART</Button>
                <Button variant="outline-dark" className="d-block w-100 mx-auto mt-2">BUY IT NOW</Button>
                <div className="share-card d-flex justify-content-between align-items-center my-2">
                    <p className="m-0">Share:
                    <i class="fab fa-facebook-f ms-3"></i>
                    <i class="fab fa-twitter ms-3"></i>
                    <i class="fab fa-instagram ms-3"></i>
                    <i class="fab fa-pinterest-p ms-3"></i>
                    <i class="fab fa-facebook-messenger ms-3"></i>
                    <i class="fal fa-envelope ms-3"></i>
                    </p>

                    <p className="m-0">
                    <i class="fal fa-question-circle"></i>
                        Ask A Question
                    </p>
                </div>
                <div className="col-md-12 my-2">
                   <div className="login-or">
                      <hr className="hr-or"/>
                      <span className="span-or ">Payment</span>
                   </div>
                </div>
                <img src="https://demo.casethemes.net/organio/wp-content/uploads/2021/07/f7-payment.png" alt="payment" className="d-block mx-auto"/>
                </Col>
            </Row>
        </Container>
    );
};

export default ViewProduct;