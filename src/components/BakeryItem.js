import { useState } from 'react';

function BakeryItem({ item, index, setCart }) {
  return (
    <div
      className="bakery-item"
      style={{
        cursor: 'pointer',
        backgroundColor: '#eee',
        borderRadius: '1rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      onClick={() =>
        setCart((prev) => {
          const quantity = prev[index] ?? 0;
          return { ...prev, [index]: quantity + 1 };
        })
      }
    >
      <img src={item.image} style={{ width: '5rem' }} />
      {item.name}
    </div>
  );
}

export default BakeryItem;
