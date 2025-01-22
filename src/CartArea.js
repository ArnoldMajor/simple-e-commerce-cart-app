import React from "react";

function CartArea({ cart, clearCart, removeItem }) {
    const cartItems = Object.values(cart);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-area">
            <h1>Cart</h1>
            <div className="list-area">
                {cartItems.length > 0 ? (<div className="item-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td><button className="button remove" onClick={removeItem.bind(null, item.name)}>x</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>) : <div className="message-area"><p id="cart-message">Your cart is empty!</p></div>}
            </div>
            <div className="checkout-area">
                <p>Total: ${totalPrice.toFixed(2)}</p>
                <button className="button checkout" onClick={clearCart} disabled={cartItems.length === 0}>Checkout</button>
            </div>
        </div>
    )
}

export default CartArea