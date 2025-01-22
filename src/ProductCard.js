import React from "react";

function ProductCard({ name, price, url, onAddToCart }) {

    return (
        <div className="product-card">
            <h2>{name}</h2>
            <img src={url} alt={name} className="product-image" />
            <div className="purchase-row">
                <button className="button" onClick={onAddToCart}>Add To Cart</button>
                <p className="price">Price:<span>${price}</span></p>
            </div>
        </div>
    )
}

export default ProductCard;