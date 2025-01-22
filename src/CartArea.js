import React from "react";

function CartArea({ cart, clearCart }) {
    const cartItems = Object.values(cart);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-area">
            <h1>Cart</h1>
            <div className="list-area">
                {cartItems.length > 0 ? (<ul className="item-list">
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>) : <p id="cart-message">Your cart is empty!</p>}
            </div>
            <div className="checkout-area">
                <p>Total: ${totalPrice.toFixed(2)}</p>
                <button className="button checkout" onClick={clearCart} disabled={cartItems.length === 0}>Checkout</button>
            </div>
        </div>
    )
}

export default CartArea