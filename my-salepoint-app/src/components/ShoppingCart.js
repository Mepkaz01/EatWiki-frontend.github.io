import React, { useState } from 'react';

const ShoppingCart=(props) =>{
  const [cart, setCart] = useState([]);

  function addItemToCart(e) {
    const item = e.target.value;
    console.log(item);
    setCart(cart => [...cart, item]);
  }

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <div className="items">
      {props.shop.map(item =>
         <div>
        <img src={item.image} width="80" height="40"/>
        <button value={item.itemName} onClick={addItemToCart}>{item.itemName}</button>
         </div>)}
      </div>
      <div style={{border:'solid 2px black'}}>
        🛒Cart
        <ul>
          {cart.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;