import { useState } from 'react';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function BakeryItem({ item, index, setCart }) {
  return (
    <div
      className="bakery-item"
      onClick={() =>
        setCart((prev) => {
          const quantity = prev[index] ?? 0;
          return { ...prev, [index]: quantity + 1 };
        })
      }
    >
      <img src={item.image} style={{ width: '5rem' }} alt={item.name} />
      <span>{item.name}</span>
      <span>{formatter.format(item.price)}</span>
    </div>
  );
}

export default BakeryItem;
