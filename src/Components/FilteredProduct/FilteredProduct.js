import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct, addWishList, setProducts } from '../../redux/slice';
import Card from '../Card/Card';

const FilteredProduct = () => {

    const { category } = useParams();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.allProducts);

    useEffect(() => {
      fetch('https://softy-shop-web.herokuapp.com/products')
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

    const filtered = products.filter(pro => pro.category.toLocaleLowerCase() === category.toLocaleLowerCase());


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