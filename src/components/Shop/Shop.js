import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {


    const [products, setProducts] = useState([]);    
    const [cartcounts, setCartcounts] = useState([]);    



    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoreCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity  = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }

        setCartcounts(saveCart);
    }, [products])

    const handleAddToCart = (product) => {
        console.log(product);
        // cartcounts.push(product); //this not use - use diff way that's is efficient way
        const newCart = [...cartcounts, product];
        setCartcounts(newCart);
        addToDb(product.id);

    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cartcounts={cartcounts}></Cart>
            </div>
        </div>
    );
};

export default Shop;