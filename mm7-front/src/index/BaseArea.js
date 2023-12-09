// BaseArea.js
import React from 'react';
import Container from '@mui/material/Container';

const BaseArea = ({vheight="20vh", children, bgColor='#EBEBEB', p='10px'}) => {
  const areaStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100%',
    minHeight: vheight,
    backgroundColor: bgColor,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    padding: p,
  };

  return (
    <Container style={areaStyle}>
      {children}
    </Container>
  );
}

export default BaseArea;
