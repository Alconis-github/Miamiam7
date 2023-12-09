// Category.js
import React, { useState } from 'react';

const Category = ({ id, name, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '10px',
        padding: '10px',
        width: '32%',
        backgroundColor: isHovered ? '#A4D991' : '#fff',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icon} alt={name} style={{ width: '100px', height: '100px' }} />
      <span style={{ marginTop: '5px' }}>{name}</span>
    </div>
  );
};

export default Category;
