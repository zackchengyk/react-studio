import './App.css';
import { useState } from 'react';
import bakeryData from './assets/bakery-data.json';
import BakeryItem from './components/BakeryItem.js';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = (process.env.PUBLIC_URL + '/' + item.image).replace('//', '/');
});
/* ############################################################## */

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function App() {
  const [cart, setCart] = useState({});

  const price = Object.entries(cart).reduce(
    (acc, [index, quantity]) => acc + bakeryData[index].price * quantity,
    0
  );

  return (
    <div className="App">
      <h1>My Bakery</h1>

      <div>
        <h2>Menu</h2>
        {bakeryData.map((item, index) => (
          <BakeryItem item={item} index={index} setCart={setCart} />
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        <div className="cart">
          {Object.entries(cart).map(([index, quantity]) => (
            <p>
              {quantity} x {bakeryData[index].name}
            </p>
          ))}
          {Object.entries(cart).length === 0 && 'Your cart is empty.'}
          {Object.entries(cart).length !== 0 && (
            <p>{'Total = ' + formatter.format(price)}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
