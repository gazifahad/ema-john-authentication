import React, { useEffect, useState } from 'react';
import './shop.css'
import Product from './../product/product';
import Cart from './../cart/cart';
import { addToDb } from './../../utilities/fakedb'
import useProducts from './../../hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [cart, setCart]=useState([])
    
    const [products , setProducts]=useProducts()
    const handleAddToCart=(product)=>{
        console.log(product);
        const newCart=[...cart,product]
        setCart(newCart);
        addToDb(product.id)
    }
    
    return (
        <div className='container'>
            <div className="products-container">
               {
               products.map(product=>
               <Product
                handleAddToCart={handleAddToCart} 
                 key={product.id}
                 product={product}> 
                 </Product> )
               }

            </div>
           
            <div className="cart-container">
            <Cart cart={cart}>
            <Link to={'/orders'}>
                    <button>
                        Review Orders
                    </button>
                </Link>
            </Cart>
            </div>
        </div>
    );
};

export default Shop;