import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css'


const Product = (props) => {
    const { name, img ,seller,ratings,price}=props.product;
    const {handleAddToCart}=props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <br />
            <small>price={price}</small>
            <br />
            <small>manufacturer={seller}</small>
            <br />
            <small>rating{ratings}</small>
            <br />
            <button onClick={()=>handleAddToCart(props.product)} className='button-cart'>add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
       
        </div>
    );
};

export default Product;