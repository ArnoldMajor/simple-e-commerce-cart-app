import React from "react";
import ProductCard from "./ProductCard";
import { productData } from "./data/productData";

function ProductList({ onAddToCart }) {
    const productItems = productData.map((product) => {
        return <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            url={product.url}
            onAddToCart={() => onAddToCart(product)}
        />
    })
    return (
        <div className="product-area">
            <div className="product-list">{productItems}</div>
        </div>
    )
}

export default ProductList;