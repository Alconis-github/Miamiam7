import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import accueilImg from './accueil.jpg'

const areaStyle={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',  
    minWidth: '100%',
    height: '60vh',
    backgroundColor: '#d8f3dc',
}


const titleStyle = {
    backgroundImage: `url(${accueilImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    ...areaStyle
  };

  
const innerContainerStyle = {
    minWidth: '25%',
    minHeight: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',  
};


function Presentation() {
return(
    <>

        <Container style={titleStyle}>
            <Container style={innerContainerStyle}>
                <Typography variant="h1" color="text.primary" paragraph maxWidth="md">
                    MiamMiam7
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph maxWidth="md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod condimentum ex ut viverra. Etiam tristique leo ut commodo semper. Curabitur porttitor id velit vitae finibus. Aliquam eu ligula nec augue vestibulum egestas eu dapibus enim. Aenean sed sapien libero.
                </Typography>

            </Container>
        </Container>
        <Container style={areaStyle}>
            <Typography>test</Typography>
        </Container>
    </>
);
}

export default Presentation;