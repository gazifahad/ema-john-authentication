import React from 'react';
import './cart.css'
import Product from './../product/product';

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let shipping=0;
    for(const product of cart){
        total=total+product.price;
        shipping=shipping+product.shipping;    
    }
    const taxt=total*0.1;
    const tax=parseFloat(taxt.toFixed(0));
    const grandTotal=total+shipping+tax;
    return (
        <div className='cart'>
             <h1>order summary
                 quantity={props.cart.length}

                </h1>
                <p>total price:{total}</p>
                <p>  total shipping:{shipping}</p>
                <p>tax:{tax}</p>
                <p>grand total:{grandTotal}</p>
                <h3>{props.children}</h3>
        </div>
    );
};

export default Cart;