// BaseArea.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const BaseArea = ({ backgroundImage, vheight="60vh", children }) => {
  const areaStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100%',
    height: vheight,
    backgroundColor: '#d8f3dc',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <Container style={areaStyle}>
      {children}
    </Container>
  );
}

export default BaseArea;
