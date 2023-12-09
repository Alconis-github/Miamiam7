import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BaseArea from './HomePage/BaseArea';

function RecipePage() {

  const parts = window.location.href.split('/');
  const lastPart = parts.pop();

  const [recipe, setRecipe] = React.useState()
  React.useEffect(() => {
    fetch(`http://localhost:3333/api/recipes/${lastPart}`)
    .then((response) => response.json())
    .then((data) => setRecipe(data))
    .catch((err) => { console.log(err); });
  },[])

  const innerContainerStyle = {
    minWidth: '25%',
    minHeight: '50%',
    textAlign: 'center',
    padding: "50px 0",
  };

  const flexC_ContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...innerContainerStyle
  }

  const flexR_ContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...innerContainerStyle
  }  
  
  return (
    <>
    {recipe&&(
        <BaseArea>
            <Container style={flexR_ContainerStyle} backgroundColor="red">
                <img
                src={require(`../assets/images/Recipes/${recipe.image}`)}
                alt={recipe.name}
                style={{
                    width: '250px',
                    height: '250px',
                    maxWidth:'80%',
                }}/>
                <Container style={flexC_ContainerStyle} >
                    <Typography variant="h3" color="text.primary" paragraph maxWidth="md" style={{fontWeight: 'bold'}}>
                        {recipe.name}
                    </Typography>
                    <Typography variant="h5" color="text.primary" paragraph maxWidth="md">
                            {recipe.description}
                    </Typography>
                </Container>
            </Container>
        </BaseArea>
    )}
    </>
  );
}

export default RecipePage;