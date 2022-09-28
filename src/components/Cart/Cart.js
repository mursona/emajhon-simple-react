import React from 'react';

const Cart = (props) => {

    let total = 0;
    let shipping = 0;
    for (const product of props.cartcounts) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    let tax = (total * 0.1).toFixed(2);
    let taxFloat = parseFloat(tax);
    const grandTotal = total + shipping + taxFloat;

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Item : {props.cartcounts.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : ${taxFloat}</p>
            <h4>Grand Total : ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;