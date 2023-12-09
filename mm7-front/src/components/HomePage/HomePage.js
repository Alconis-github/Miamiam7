import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BaseArea from './BaseArea';
import SearchSection from './SearchSection';
import CategorySelection from './CategorySelection';
import entreeIcon from '../../assets/images/HomePage/entree.png';
import platIcon from '../../assets/images/HomePage/plat.png';
import dessertIcon from '../../assets/images/HomePage/dessert.png';
import boissonIcon from '../../assets/images/HomePage/boisson.png';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HomePage() {

  const [recipe, setRecipe] = React.useState()
  React.useEffect(() => {
    fetch("http://localhost:3333/api/recipe-of-the-day")
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

  const hero = {
    backgroundColor: '#B23E3E',
    maxWidth: "80%",
    padding: "10px",
    borderRadius: '12px',
    ...flexC_ContainerStyle
  }

  const categories = [
    { id: 1, name: 'Entrée', icon: entreeIcon },
    { id: 2, name: 'Plat', icon: platIcon },
    { id: 3, name: 'Dessert', icon: dessertIcon },
    { id: 4, name: 'Boisson', icon: boissonIcon },
  ];

  const categoriesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',  // Ajuste selon tes préférences
    flexWrap: 'wrap',  // Permet le pliage sur une nouvelle ligne
    marginTop: '20px',  // Ajuste selon tes préférences
  };
  
  
  return (
    <>
    {recipe&&(
    <>
    <BaseArea vheight='60vh' bgColor="#53664C" p="60px">
      <Container style={hero}>
        <Typography variant="h2" color="white" paragraph maxWidth="md" style={{fontWeight: 'bold'}}>
          UN GRIMOIRE DE RECETTES 100% N7 ET 100% BDD
        </Typography>
        <Typography variant="h5" color="white" paragraph maxWidth="md">
          Retrouvez les recettes concoctées par nos meilleurs chefs cuisiniers de l'N7.
        </Typography>
      </Container>
    </BaseArea>

    <BaseArea>
        <Container style={flexC_ContainerStyle}>
            <Typography variant="h2" color="text.primary" paragraph maxWidth="md" style={{fontWeight: 'bold'}}>
                    LA VEDETTE DU JOUR
            </Typography>
          <Container style={flexR_ContainerStyle} backgroundColor="red">
              <img 
              src={require(`../../assets/images/Recipes/${recipe.image}`)}
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
        </Container>
    </BaseArea>

    <BaseArea>
      <SearchSection></SearchSection>
    </BaseArea>

    <BaseArea>
      <Container style={flexC_ContainerStyle}> 
      <Typography variant="h3" color="text.primary" paragraph maxWidth="md" style={{fontWeight: 'bold'}} >
          RECHERCHEZ UN PLAT SPECIFIQUE
        </Typography>        
        <Typography variant="h3" color="text.primary" paragraph maxWidth="md" style={{fontWeight: 'bold'}}>
          OU
        </Typography>
        <Typography variant="h3" color="text.primary" paragraph maxWidth="md" style={{fontWeight: 'bold'}}>
          DECOUVREZ UNE CATEGORIE
        </Typography>
      </Container>
    </BaseArea>
    
    <BaseArea>
        <Container>
          <div style={{ ...categoriesContainerStyle, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <CategorySelection key={category.id} {...category} />
            ))}
          </div>
        </Container>
      </BaseArea>

    <BaseArea>
      <Typography variant="h2" color="text.primary" paragraph maxWidth="md" style={{fontWeight: 'bold'}}>
        RECETTES RECENTES
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} padding="5% 30%">
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>RECETTE</Item>
          </Grid>
        ))}
      </Grid>
    </BaseArea>
    </>
    )}
    </>
  );
}

export default HomePage;
