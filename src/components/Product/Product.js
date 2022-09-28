import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {name , img, seller, price, ratings} = props.product;

    return (
        <div>
            <div className='product'>
                <img src={img} alt=""></img>
                <p>{name}</p>
                <div className='product-info'>
                <p>Price : ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Rating : {ratings} Stars</small></p>
                </div>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'><p>Add to Cart</p>
                <small><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></small>
                </button>
            </div>
        </div>
    );
};

export default Product;