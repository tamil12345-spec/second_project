import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModel from "./components/CartModel";
import ProductCard from "./components/ProductCard";
import "./App.css";
import "./Navbar.css";
import "./ProductList.css";
import "./ProductCard.css";
import "./CartModel.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const alreadyInCart = cartItems.find(item => item.id === product.id);
    if (alreadyInCart) {
      alert("Item already added to the cart");
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsModalOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      <CartModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
