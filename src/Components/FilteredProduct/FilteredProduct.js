import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct, addWishList, setProducts } from '../../redux/slice';
import Card from '../Card/Card';

const FilteredProduct = () => {

    const { category } = useParams();
    
    const products = useSelector((state) => state.products.allProducts);
    const cart = useSelector((state) => state.products.cart);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/CoderDotJs/co-op-project/main/src/Components/Products/products.json')
        .then(res => res.json())
        .then(data => dispatch(setProducts(data)))
    }, [])

  const filtered = products.filter(pro => pro.category.toLocaleLowerCase() === category.toLocaleLowerCase());
  
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
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5">
        {
          filtered.map(pro=>{
                return(
                  <Card key={pro.id} product={pro} addToCart={addToCart} addToWishlist={addToWishlist}></Card>
                )
            })
        }
      </div>
    );
};

export default FilteredProduct;