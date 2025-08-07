import React from 'react';


function CartModel({ isOpen, onClose, cartItems, removeFromCart }) {
  if (!isOpen) return null;

  return (
    <div className="model-overlay">
      <div className="model">
        <button className="close-btn" onClick={onClose}>X</button>
        <h3>Your Cart</h3>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartModel;
