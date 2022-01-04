import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './ViewProduct.css';
import { Typography } from '@mui/material';
import Card from '../Card/Card';
import { addProduct, setProducts } from '../../redux/slice';

const AntTabs = styled(Tabs)({
    borderBottom: '1.2px solid #000',
    '& .MuiTabs-indicator': {
      backgroundColor: '#000',
    },
  });

  const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#000',
      fontWeight: theme.typography.fontWeightBold,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography sx={{textAlign: 'left'}}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


const ViewProduct = () => {
  const [value, setValue] = useState(0);
  const cart = useSelector((state) => state.products.cart);
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch()

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const {productId} = useParams();
    

    useEffect(()=>{
        fetch('https://softy-shop-web.herokuapp.com/products')
        .then(res => res.json())
        .then(data => dispatch(setProducts(data)))
    }, [])

    const productView = products.filter(pro => Number(pro.id) === Number(productId));

    const category = productView[0]?.category;

    const relatedProducts = products.filter(pro => pro.category.toLocaleLowerCase() === category.toLocaleLowerCase())

  // add to cart
  const addToCart = (product) => {
    const obj = { ...product };
    obj.quantity = 1;
    dispatch(addProduct(obj));
}
    

    return (
    <>
        <Container style={{textAlign: 'left'}} className="">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <img src={productView[0]?.img} alt="" className="img-responsive w-100"/>
                </Col>
                <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
                    <div className="w-100">
                    <h2 className="my-2">{productView[0]?.name}</h2>
                    <Rating ratingValue={productView[0]?.review * 20} size={18} readonly={true}/>
                    <p className="mt-2" style={{
                  fontSize: '25px',
                  margin: '0'
               }}>
                   ${productView[0]?.price}
              </p>
              <span className="text-muted fw-light">Tax Included</span>
                <Button variant="dark" className="d-block w-100 mx-auto my-2" onClick={() => dispatch(addToCart(productView[0]))} >ADD TO CART</Button>
                <Button variant="outline-dark" className="d-block w-100 mx-auto mt-2">BUY IT NOW</Button>
                <div className="share-card d-flex justify-content-between align-items-center my-2">
                    <p className="m-0">Share:
                    <i className="fab fa-facebook-f ms-3"></i>
                    <i className="fab fa-twitter ms-3"></i>
                    <i className="fab fa-instagram ms-3"></i>
                    <i className="fab fa-pinterest-p ms-3"></i>
                    <i className="fab fa-facebook-messenger ms-3"></i>
                    <i className="fal fa-envelope ms-3"></i>
                    </p>

                    <p className="m-0">
                    <i className="fal fa-question-circle"></i>
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
                    </div>
                </Col>
            </Row>
        </Container>



                {/* tabs  */}
        
        <Container>
        <Box sx={{ bgcolor: '#fff' }}>
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="DESCRIPTION" />
            <AntTab label="SHIPPING & RETURN" />
            <AntTab label="REVIEWS" />
            <AntTab label="ADDITIONAL INFORMATION" />
          </AntTabs>
            <TabPanel value={value} index={0} >
                {productView[0]?.desc}
            </TabPanel>
            <TabPanel value={value} index={1} >
                NO DATA
            </TabPanel>
            <TabPanel value={value} index={2} >
                NO DATA
            </TabPanel>
            <TabPanel value={value} index={3} >
                NO DATA
            </TabPanel>
          <Box sx={{ p: 3 }} />
        </Box>
        </Container>

            <h3>Products You May Link</h3>

        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5">
        {
            relatedProducts.map(p =>{
                return(
                    <Card key={p.id} product={p} />
                );
            })
        }
        </div>
    </>
    );
};

export default ViewProduct;