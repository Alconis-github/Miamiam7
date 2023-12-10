// Category.js
import React, { useState } from 'react';

const Category = ({ updateFilter, name, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '10px',
        padding: '15px',
        paddingTop: '10px',
        width: '32%',
        backgroundColor: isHovered ? '#A4D991' : '#fff',
        transition: 'background-color 0.3s',
        color: isHovered ? 'white' : 'black',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => updateFilter(name)}
    >
      <img src={icon} alt={name} style={{ width: '100px', height: '100px' }} />
      <div style={{ marginTop: '5px', padding: '0 30px' }}>{name}</div>
    </div>
  );
};

export default Category;
