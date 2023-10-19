// Presentation.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import accueilImg from './accueil.jpg';
import BaseArea from './BaseArea';

function Presentation() {
  const innerContainerStyle = {
    minWidth: '25%',
    minHeight: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
    <BaseArea backgroundImage={accueilImg}>
      <Container style={innerContainerStyle}>
        <Typography variant="h1" color="text.primary" paragraph maxWidth="md">
          MiamMiam7
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph maxWidth="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod condimentum ex ut viverra. Etiam tristique leo ut commodo semper. Curabitur porttitor id velit vitae finibus. Aliquam eu ligula nec augue vestibulum egestas eu dapibus enim. Aenean sed sapien libero.
        </Typography>
      </Container>
    </BaseArea>
    <BaseArea>
        test
    </BaseArea>
    </>
  );
}

export default Presentation;
