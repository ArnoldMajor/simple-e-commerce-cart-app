import './App.css';
import ProductList from './ProductList';
import CartArea from './CartArea';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState({});

  function handeAddToCart(product) {
    setCart((prevCart) => ({
      ...prevCart,
      [product.name]: {
        ...product,
        quantity: (prevCart[product.name] ? prevCart[product.name].quantity + 1 : 1),
      }
    }))
  }

  function handleClearCart() {
    setCart({});
  }


  return (
    <div className="App">
      <h1>Enjoy a selection of our finest products!</h1>
      <div className='container'>
        <ProductList onAddToCart={handeAddToCart} />
        <CartArea cart={cart} clearCart={handleClearCart} />
      </div>
    </div>
  );
}

export default App;
