import React from 'react';


function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <h2>Fake Store</h2>
      <button className="cart-btn" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
