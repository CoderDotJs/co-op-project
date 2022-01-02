import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addWishList, setProducts } from '../../redux/slice';
import Card from '../Card/Card';

const Products = () => { 

    const products = useSelector((state) => state.products.allProducts);
    const cart = useSelector((state) => state.products.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
        .then(data => dispatch(setProducts(data)))
    }, [])

    // add to cart
    const addToCart = (product) => {
        const obj = { ...product };
        obj.quantity = 1;
        dispatch(addProduct(obj));
    }
    // add to wish list
    const addToWishlist = (product) =>{
        const obj = { ...product };
        obj.quantity = 1;
        dispatch(addWishList(obj));
    }

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5">
              {
                products?.map(pro=>{
                      return(
                        <Card key={pro.id} product={pro} addToCart={addToCart} addToWishlist={addToWishlist}></Card>
                      )
                  })
              }
            </div>
        </div>
    );
};

export default Products;