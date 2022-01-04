import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import './Card.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeWishProduct } from '../../redux/slice';

const Card = ({product, addToCart, addToWishlist}) => {

  const { id, name, img, category, price, review } = product;
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.products.wishList)
  const handleRemoveWishProduct = (product) => {
    dispatch(removeWishProduct(product));
}

  const wished = wishlist.find(p => product.id === p.id)

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="card h-100">
            <img src={img} className="card-img-top" alt={name}/>
            {
              wished ? 
              <i className="fas fa-heart icon-cart" style={{color: 'crimson'}} onClick={() => handleRemoveWishProduct(product)}></i> 
              : 
              <i className="far fa-heart icon-cart" onClick={() => addToWishlist(product)}></i>
            }

            <div className="add-to-cart-section d-flex flex-column">
            <i className="fal fa-cart-plus icon-add-to-cart" onClick={() => addToCart(product)}></i>
            <i className="far fa-eye icon-add-to-cart"></i>
            </div>
            <NavLink to={`/products/${category}/${id}`} className="text-decoration-none">
            <div className="card-body d-flex flex-column align-items-start">
                <Rating ratingValue={review * 20} size={18} readonly={true}/>
              <p style={{
                  color: '#818995', 
                  fontSize: '13px',
                  margin: '5px 0'
                  }}>
                      {String(category).toLocaleUpperCase()}
                </p>
              <h5 className="card-title" style={{
                  color: '#3e4a5e',
                  fontSize: '18px',
                  margin: '5px 0', 
                  letterSpacing: '1px'
                }}>
                    {name}
              </h5>
              <p style={{
                  color: '#3a9046',
                  fontSize: '25px',
                  margin: '0'
               }}>
                   ${price}
              </p>
            </div>
          </NavLink>
          </div>
        </div>
    );
};

export default Card;