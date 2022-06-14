import React from 'react';
import useProducts from './../../hooks/useProducts';
import useCart from './../../hooks/useCart';
import Cart from './../cart/cart';
import './Orders.css'
import ReviewItem from './../reviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart]=useCart(products);
    const handleRemoveProduct=product=>{
        const rest=cart.filter(pd=>pd.id!==product.id );
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='container'>
            <div className='review-items-container'>
                {
                    cart.map(product=> <ReviewItem key={product.id} product={product}
                    handleRemoveProduct={handleRemoveProduct}> </ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to={'/inventory'}>
                        <button>Proceed Inventory</button>
                    </Link>
                </Cart>
            </div>
           
        </div>
    );
};

export default Orders;<h2>This is orders</h2>